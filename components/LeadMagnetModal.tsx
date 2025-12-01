import React, { useState, useEffect } from 'react';
import { XIcon } from './icons';
import { submitEmailForLeadMagnet } from '../utils/emailCapture';
import { trackLead } from '../utils/pixel';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  useEffect(() => {
    if (isOpen) {
      // Focus trap: prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      // Focus first input
      const firstInput = document.querySelector('input[type="email"]') as HTMLInputElement;
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
      }
    } else {
      document.body.style.overflow = '';
      // Reset form when modal closes
      setEmail('');
      setIsSuccess(false);
      setError('');
      setDownloadUrl('');
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await submitEmailForLeadMagnet(email);
      
      if (response.success) {
        setIsSuccess(true);
        if (response.downloadUrl) {
          setDownloadUrl(response.downloadUrl);
        }
        // Track lead with Meta Pixel
        trackLead({
          content_name: '7-Day AI Skill Map',
          content_category: 'Lead Magnet',
        });
      } else {
        setError(response.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (downloadUrl) {
      window.open(downloadUrl, '_blank');
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-border-secondary bg-surface-primary p-8 shadow-card">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-text-secondary transition-colors hover:bg-surface-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Close modal"
        >
          <XIcon className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <>
            <h2 id="modal-title" className="text-2xl font-bold text-text-primary mb-2">
              Get Your Free 7-Day AI Skill Map
            </h2>
            <p className="text-text-secondary mb-6">
              Learn exactly what a week of focused building looks like. Get the roadmap to ship your first AI project in 7 days.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isLoading}
                  className="w-full rounded-lg border border-border-secondary bg-surface-secondary px-4 py-3 text-text-primary placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                />
              </div>

              {error && (
                <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full rounded-[12px] bg-primary px-6 py-3 text-lg font-bold text-white shadow-primary transition-transform hover:translate-y-[-1px] hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/35 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isLoading ? 'Submitting...' : 'Get My Free Skill Map'}
              </button>
            </form>

            <p className="mt-4 text-xs text-text-secondary text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </>
        ) : (
          <div className="text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <svg
                className="h-8 w-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-2">
              Success! Your Download is Ready
            </h2>
            <p className="text-text-secondary mb-6">
              Your 7-Day AI Build Sprint Map is ready for instant download. Click the button below to get it now!
            </p>
            {downloadUrl && (
              <button
                onClick={handleDownload}
                className="w-full rounded-[12px] bg-primary px-6 py-3 text-lg font-bold text-white shadow-primary transition-transform hover:translate-y-[-1px] hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/35"
              >
                Download Now
              </button>
            )}
            <button
              onClick={onClose}
              className="mt-4 text-text-secondary hover:text-text-primary transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadMagnetModal;

