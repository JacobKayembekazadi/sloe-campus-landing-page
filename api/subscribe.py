from http.server import BaseHTTPRequestHandler
import json
import os
import urllib.request
import urllib.error

# Environment variables (We will set these in Vercel later)
AIRTABLE_API_KEY = os.environ.get('AIRTABLE_API_KEY')
AIRTABLE_BASE_ID = os.environ.get('AIRTABLE_BASE_ID')
AIRTABLE_TABLE_NAME = os.environ.get('AIRTABLE_TABLE_NAME') or 'Leads'

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        # 1. Read the body
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        try:
            data = json.loads(post_data.decode('utf-8'))
            email = data.get('email')
            
            if not email:
                self.send_response(400)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': 'Email is required'}).encode('utf-8'))
                return

            # 2. Prepare data for Airtable
            airtable_url = f"https://api.airtable.com/v0/{AIRTABLE_BASE_ID}/{AIRTABLE_TABLE_NAME}"
            record = {
                "fields": {
                    "Email": email,
                    "Status": "New",
                    "Source": "Lead Magnet"
                }
            }
            
            # 3. Send to Airtable
            req = urllib.request.Request(
                airtable_url,
                data=json.dumps(record).encode('utf-8'),
                headers={
                    "Authorization": f"Bearer {AIRTABLE_API_KEY}",
                    "Content-Type": "application/json"
                },
                method='POST'
            )

            with urllib.request.urlopen(req) as response:
                response_data = json.load(response)
                
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                # Return the PDF link so the frontend can auto-download/open it too
                self.wfile.write(json.dumps({
                    'success': True, 
                    'message': 'Added to list!',
                    'downloadUrl': '/The-7-Day-AI-Build-Sprint.pdf'
                }).encode('utf-8'))

        except urllib.error.HTTPError as e:
            self.send_response(e.code)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'error': f'Airtable Error: {e.reason}'}).encode('utf-8'))
            
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'error': str(e)}).encode('utf-8'))

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type")
        self.end_headers()
