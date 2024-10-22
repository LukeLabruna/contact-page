
# Contact Page

This project is a simple, responsive contact page built with modern web technologies, designed to capture user inquiries.

## Features

- Responsive design
- Form validation
- Clean and minimalistic UI
- Integrated with a custom microservice for sending contact emails
- Gmail App Password support for sending emails securely

## Technologies Used

- HTML
- CSS
- JavaScript
- Vite (build tool)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/LukeLabruna/contact-page.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the project:
   ```bash
   npm run dev
   ```

## Email Microservice

This project uses a custom microservice to handle contact form submissions and send emails. You can configure the microservice by adjusting the environment variables in the project to point to your microservice endpoint.

### Gmail App Password Setup

To securely send emails using Gmail, you'll need to generate an App Password. Here's how:

1. Go to your [Google Account Security settings](https://myaccount.google.com/security).
2. Under **"Signing in to Google"**, enable **2-Step Verification** if it's not already enabled.
3. Once 2-Step Verification is active, go to the **App Passwords** section.
4. Select **Mail** as the app and **Other** for the device name (you can name it something like "Contact Page").
5. Generate the App Password and copy it.
6. Add this App Password to your environment variables or configuration file (`VITE_APP_PASSWORD`).

## License

This project is open-source and available under the MIT License.
