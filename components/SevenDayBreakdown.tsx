import React, { useState } from 'react';
import { CheckIcon } from './icons';

type PathType = 'shopify' | 'internal-tools' | 'website';

interface DayBreakdown {
  days: string;
  title: string;
  description: string;
  tasks: string[];
}

const pathData: Record<PathType, { name: string; description: string; breakdown: DayBreakdown[] }> = {
  shopify: {
    name: 'Shopify AI Store Builder',
    description: 'Plan with AI, design simply, and launch a real Shopify store.',
    breakdown: [
      {
        days: 'Days 1-2',
        title: 'Planning Phase',
        description: 'Pick a simple store idea and use AI to plan your products and content.',
        tasks: [
          'Pick a simple store idea (real or practice)',
          'Use Gemini to brainstorm products',
          'Write basic product descriptions with AI help',
          'Outline your pages (home, about, contact)',
        ],
      },
      {
        days: 'Days 3-4',
        title: 'Building Phase',
        description: 'Use Shopify\'s visual editor to build your store and save changes safely.',
        tasks: [
          'Use Shopify\'s visual editor to add pages and products',
          'Use Cursor + GitHub to save changes safely',
          'Set up version control for easy rollbacks',
          'Build out your store structure',
        ],
      },
      {
        days: 'Days 5-7',
        title: 'Deployment & Polish',
        description: 'Clean up the design, connect settings, and make your store live.',
        tasks: [
          'Clean up design using Pinterest inspiration',
          'Connect basic settings (payments, shipping templates)',
          'Make the store live with a real URL',
          'Test and prepare to show to businesses',
        ],
      },
    ],
  },
  'internal-tools': {
    name: 'AI Internal Tools for Local Businesses',
    description: 'Build a small system that helps real estate agents, lawyers, or local services track leads, jobs, or documents.',
    breakdown: [
      {
        days: 'Days 1-2',
        title: 'Planning Phase',
        description: 'Choose a business problem and sketch out your tool with AI help.',
        tasks: [
          'Choose a simple problem for a common business',
          'Use AI assistant to sketch what the tool should do',
          'Identify what data the tool needs',
          'Plan the dashboard structure',
        ],
      },
      {
        days: 'Days 3-4',
        title: 'Building Phase',
        description: 'Build a simple web dashboard and connect it to familiar tools.',
        tasks: [
          'Build a simple web dashboard using Cursor',
          'Store code on GitHub for version control',
          'Connect to Google Sheets or Airtable',
          'Set up data viewing and updating',
        ],
      },
      {
        days: 'Days 5-7',
        title: 'Deployment & Features',
        description: 'Add smart features, host the tool, and document how to use it.',
        tasks: [
          'Add one or two small "smart" features (reminders, summaries, filters)',
          'Host the tool on Vercel for a live link',
          'Document how a business owner would use it',
          'Prepare to show to real businesses',
        ],
      },
    ],
  },
  website: {
    name: 'AI Powered Website',
    description: 'Plan, design, and deploy a live website with AI help, plus optional automations.',
    breakdown: [
      {
        days: 'Days 1-2',
        title: 'Planning Phase',
        description: 'Pick a business type and plan your site with AI assistance.',
        tasks: [
          'Pick a business type (realtor, lawyer, café, personal brand)',
          'Use Gemini to plan key pages and write draft copy',
          'Collect design inspiration from Pinterest',
          'Outline site structure and content',
        ],
      },
      {
        days: 'Days 3-4',
        title: 'Building Phase',
        description: 'Turn your plan into a real site and deploy it to the web.',
        tasks: [
          'Use Cursor to turn plan into a real site',
          'Save code on GitHub for version control',
          'Deploy to Vercel so the website is live',
          'Test the live site',
        ],
      },
      {
        days: 'Days 5-7',
        title: 'Polish & Automate',
        description: 'Polish the design and optionally add smart automations.',
        tasks: [
          'Polish the design and user experience',
          'Optionally connect forms to n8n or Zapier',
          'Set up lead capture and automatic follow-ups',
          'Turn it from static to a "smart" site',
        ],
      },
    ],
  },
};

const SevenDayBreakdown: React.FC = () => {
  const [activePath, setActivePath] = useState<PathType>('shopify');

  return (
    <section className="border-b border-border-primary bg-surface-primary py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text-primary mb-4">
          What You'll Do in 7 Days
        </h2>
        <p className="text-lg text-text-secondary text-center mb-12 max-w-2xl mx-auto">
          A day-by-day breakdown of your focused week. Choose your path and see exactly what you'll build.
        </p>

        {/* Path Tabs */}
        <div className="flex flex-nowrap overflow-x-auto pb-4 md:pb-0 md:flex-wrap justify-start md:justify-center gap-4 mb-12 px-4 -mx-4 md:mx-0 scrollbar-hide snap-x">
          {Object.entries(pathData).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActivePath(key as PathType)}
              className={`flex-shrink-0 snap-center px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                activePath === key
                  ? 'bg-primary text-white shadow-primary'
                  : 'bg-surface-secondary text-text-secondary hover:bg-surface-tertiary hover:text-text-primary border border-border-secondary'
              }`}
            >
              {data.name}
            </button>
          ))}
        </div>

        {/* Active Path Description */}
        <div className="mb-12 text-center">
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {pathData[activePath].description}
          </p>
        </div>

        {/* Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pathData[activePath].breakdown.map((phase, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border-secondary bg-surface-secondary p-6 shadow-card transition hover:shadow-primary-lg"
            >
              <div className="mb-4">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  {phase.days}
                </span>
                <h3 className="text-xl font-bold text-text-primary mt-2 mb-2">
                  {phase.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {phase.description}
                </p>
              </div>
              <ul className="space-y-2">
                {phase.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start gap-2 text-sm text-text-primary">
                    <CheckIcon className="mt-0.5 flex-shrink-0 text-accent w-4 h-4" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SevenDayBreakdown;

