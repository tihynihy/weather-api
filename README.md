
<h1 align="center">Weather API</h1>

<p align="center">
  <img src="https://img.shields.io/badge/npm-v6.14.14-red" alt="npm version">
  <img src="https://img.shields.io/badge/node-v14.17.6-green" alt="node version">
</p>

<p align="center">
  <strong>A code snippet to retrieve weather information using WeatherAPI - Course assignment</strong>
</p>

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Testing the Code](#testing-the-code)
- [Customization and Configuration](#customization-and-configuration)
- [RapidAPI](#rapidapi)



## Introduction

The Weather API code snippet allows users to log in and retrieve weather information for a specific city and date using the WeatherAPI. This code snippet is implemented in JavaScript and utilizes the Axios library for making HTTP requests and interacting with the WeatherAPI.

## Prerequisites

Before running the code, ensure that you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org): Make sure you have Node.js installed. You can download it from the official website.

## Installation

Follow these steps to install and set up the project:

1. **Clone the repository**:

   ```shell
   git clone https://github.com/yourusername/weather-api.git
   ```

2. **Navigate to the project directory**:

   ```shell
   cd weather-api
   ```

3. **Install dependencies**:

   ```shell
   npm install
   ```

   This will install the necessary dependencies, including axios, readline, and fs.

## Testing the Code

To test the Weather API code, follow these steps:

1. **Run the code**:

   ```shell
   node app.js
   ```

   This command will start the code execution.

2. **Login**:

   When prompted, enter your username and password. The login data is stored in the `local_db.json` file. If you need to create or modify user credentials, update the `local_db.json` file accordingly.

3. **Enter city and date**:

   After successful login, enter the city name and the date (in the format YYYY-MM-DD) for which you want to retrieve weather information.

4. **View results**:

   The code will fetch and display historical weather data, forecast information, and real-time weather data for the specified city and date. The results will be printed on the console.

5. **Repeat the process**:

   You can repeat the process by logging in again with a different username and password and providing new city and date inputs.

6. **Exit the program**:

   Once you are done testing, you can exit the program by pressing Ctrl + C in the terminal.

**Note**: Make sure you have an active internet connection during testing, as the code relies on making API requests to retrieve weather information.

## Customization and Configuration

The code is configured to work with the RapidAPI WeatherAPI using default API keys and endpoints. If you have your own API credentials or want to use a different weather API, you can modify the code accordingly.

- **API Configuration**:

   To change the API endpoint or headers, modify the `historyOptions`, `forecastOptions`, and `realtimeOptions` objects in the code. Update the URL, query parameters, and

 headers as per the API documentation.

- **User Data**:

   The user login data is stored in the `local_db.json` file. You can update this file to add or modify user credentials. Ensure the JSON structure remains valid.

## RapidAPI
To obtain the API keys from the WeatherAPI.com on RapidAPI, follow these steps:

1. Visit the WeatherAPI.com RapidAPI page at https://rapidapi.com/weatherapi/api/weatherapi-com.

2. Click on the "Pricing" tab to view the available pricing plans for the API.

3. Choose a pricing plan that suits your needs and click on the "Subscribe" button.

4. Sign in to your RapidAPI account or create a new account if you don't have one.

5. Complete the subscription process by providing the necessary details and payment information as per RapidAPI's instructions.

6. After subscribing, you will gain access to your API keys.

7. Copy the API key provided by WeatherAPI.com.

8. Open your code file (e.g., `app.js`) and locate the section where API keys are used.

9. Replace the existing API key `'ffbdc38f00mshfa60716f35785ffp10b986jsn56a8db74c3e2'` with your newly obtained API key from WeatherAPI.com.

10. Save the code file.

Now, when you run your application, it will use the updated API key to make requests to the WeatherAPI.com service.
