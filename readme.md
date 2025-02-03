# XyronixLabs Website

This repository contains the source code for the XyronixLabs website, built with Django and React.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Python 3.8+
- Node.js 14+
- Yarn
- OpenSSL
- Nginx

### Backend (Django)

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/xyronixlabs-website.git
   cd xyronixlabs-website/server
2. Create a virtual environment and activate it:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
3. Install the required Python packages:
    ```sh
    pip install -r requirements.txt
4. Apply migrations:
    ```sh
    python manage.py migrate
    ```
5. Create a superuser:
    ```sh
    python manage.py createsuperuser
    ```
### Frontend (React)
1. Navigate to the client directory:
    ```sh
    cd ../client
    ```
2. Install the required packages using Yarn:
    ```sh
    yarn install
    ```
### Running the Project
## Backend (Django)
1. Generate a self-signed certificate using OpenSSL:
    ```sh
    openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes
    ```
2. Run the Django development server with HTTPS:
    ```sh
    python manage.py runserver_plus --cert-file cert.pem --key-file key.pem
    ```

## Frontend (React)
1. Start the React development server:
    ```sh
    yarn start
    ```

## Nginx Configuration
1. Install Nginx:
    ```sh
    sudo apt update
    sudo apt install nginx
    ```
2. Configure Nginx to proxy requests to the Django and React development servers. Update your Nginx configuration file (e.g., /etc/nginx/sites-available/xyronixlabs):
    ```sh
    server {
    listen 80;
    server_name xyronixlabs.com www.xyronixlabs.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /api {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }

    return 301 https://$host$request_uri;
    }

    server {
        listen 443 ssl;
        server_name xyronixlabs.com www.xyronixlabs.com;

        ssl_certificate /etc/ssl/certs/certificate.crt;
        ssl_certificate_key /etc/ssl/private/private.key;

        location / {
            proxy_pass http://127.0.0.1:3000;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        location /api {
            proxy_pass http://127.0.0.1:8000;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        location /.well-known/acme-challenge/ {
            root /var/www/html;
        }
    }
    ```
3. Enable the Nginx configuration:
    ```sh
    sudo ln -s /etc/nginx/sites-available/xyronixlabs /etc/nginx/sites-enabled/
    sudo nginx -t
    sudo systemctl restart nginx
    ```
### Configuration
## Django Settings
# Update the settings.py file with your configuration:
```sh
# filepath: /c:/Users/adity/OneDrive/Desktop/XyronixLabs_website/server/server/settings.py
SECRET_KEY = 'your-secret-key'
DEBUG = True  # Set to False in production
ALLOWED_HOSTS = ['xyronixlabs.com', 'www.xyronixlabs.com', 'localhost', '127.0.0.1']
CSRF_TRUSTED_ORIGINS = [
    'https://xyronixlabs.com',
    'https://www.xyronixlabs.com',
    'https://localhost',
    'http://localhost:3000',
    'http://192.168.1.7:3000'
]
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://192.168.1.7:3000",
    "https://xyronixlabs.com",
    "https://www.xyronixlabs.com"
]
```

## Proxy Configuration
# Create a setupProxy.js file in the src directory of your React project:
```sh
// filepath: /c:/Users/adity/OneDrive/Desktop/XyronixLabs_website/client/src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
  );
};
```

### Usage
## Accessing the Application
# 1. Backend: https://localhost:8000
# 2. Frontend: http://localhost:3000

## Admin Panel
# Access the Django admin panel at https://localhost:8000/admin and log in with the superuser credentials.

## License
# This project is licensed under the MIT License. See the LICENSE file for details.