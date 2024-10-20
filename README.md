**###### Currency Converter**
### Project Overview
The Currency Converter is a web application built using React, Tailwind CSS, and ExchangeRate-API. It allows users to convert between different currencies in real time by fetching live exchange rates from a public API. The app features a simple, user-friendly interface that works on both desktop and mobile devices. This project demonstrates API integration, state management, responsive design, and error handling, simulating real-world frontend development.

### Features
Real-time Exchange Rates: Fetches up-to-date exchange rates for a wide range of global currencies using the ExchangeRate-API.
Currency Conversion: Allows users to select two currencies and enter an amount to convert. The result is dynamically displayed based on current exchange rates.
Responsive Design: The UI is fully responsive, adapting seamlessly across desktop, tablet, and mobile devices.
Error Handling: User-friendly error messages are shown in case of network issues or unsupported currencies.
State Management: Manages application state using React hooks (useState, useEffect) to update the UI dynamically.
### Technologies Used
React: JavaScript library for building the user interface.
Tailwind CSS: Utility-first CSS framework used for designing a responsive and modern UI.
ExchangeRate-API: Public API used to fetch real-time exchange rates.
JavaScript (ES6): Core language used for logic and interactivity.
Vite: Tool for fast project setup and development.
### How It Works
Currency Selection: Users can select the currencies they want to convert from and to using a dropdown menu.
Input Amount: Users input the amount of currency they want to convert.
Converted Amount Displayed: The application fetches the latest exchange rates and displays the converted amount along with the current exchange rate.
### Setup and Installation
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/DeMoOx77/currency-converter.git
cd currency-converter
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000 to view the application.

### API Key Setup
To use this project, you need to sign up for an API key from ExchangeRate-API:

Visit ExchangeRate-API and create an account.
Copy your API key.
In the project directory, create a .env file and add your API key:
bash
Copy code
REACT_APP_API_KEY=your-api-key
### Deployment
This application can be easily deployed on Netlify or Vercel. Simply follow their deployment guides and connect your repository for seamless hosting.

### Future Enhancements
Historical Exchange Rates: Add a feature to allow users to view historical data for selected currency pairs.
Favorite Currency Pairs: Allow users to save their frequently used currency pairs.
Dark Mode: Implement a dark mode option for a better user experience in low-light environments.
Multi-Currency Conversion: Enable users to convert a single amount into multiple currencies at once.
### License
This project is licensed under the MIT License. See the LICENSE file for details.

