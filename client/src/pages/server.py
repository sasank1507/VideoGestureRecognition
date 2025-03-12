import http.server
import socketserver
import os

PORT = 8889

class NoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_my_headers()

    def send_my_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        http.server.SimpleHTTPRequestHandler.end_headers(self)

handler = NoCacheHTTPRequestHandler
handler.extensions_map.update({
    ".html": "text/html",
    ".ico": "image/x-icon",
})

# Get the absolute path to the directory containing the script
script_dir = os.path.dirname(os.path.abspath(__file__))

with socketserver.TCPServer(("", PORT), handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    os.chdir(script_dir)  # Change the current working directory to the script's directory
    httpd.serve_forever()
