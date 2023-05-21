<h1 align="center">Weather Information Retrieval</h1>

<p align="center">
  <img src="https://img.shields.io/badge/npm-v6.14.14-red" alt="npm version">
  <img src="https://img.shields.io/badge/node-v14.17.6-green" alt="node version">
</p>

<p align="center">
  <strong>A code snippet to retrieve weather information using WeatherAPI</strong>
</p>

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Testing the Code](#testing-the-code)
- [Customization and Configuration](#customization-and-configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Weather Information Retrieval code snippet allows users to log in and retrieve weather information for a specific city and date using the WeatherAPI. This code snippet is implemented in JavaScript and utilizes the Axios library for making HTTP requests and interacting with the WeatherAPI.

## Prerequisites

Before running the code, ensure that you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org): Make sure you have Node.js installed. You can download it from the official website.

## Installation

Follow these steps to install and set up the project:

1. **Clone the repository**:

   ```shell
   git clone https://github.com/yourusername/weather-information-retrieval.git
   ```

2. **Navigate to the project directory**:

   ```shell
   cd weather-information-retrieval
   ```

3. **Install dependencies**:

   ```shell
   npm install
   ```

   This will install the necessary dependencies, including axios, readline, and fs.

## Testing the Code

To test the Weather Information Retrieval code, follow these steps:

1. **Run the code**:

   ```shell
   node app.js
   ```

   This command will start the code execution.

2. **Login**:

   When prompted, enter your username and password as per the instructions.

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

   To change the API endpoint or headers, modify the `historyOptions`, `forecastOptions`, and `realtimeOptions` objects in the code. Update the URL, query parameters, and headers as required.

- **API Key**:

   Replace the `X-RapidAPI-Key` value in the headers with your own API key. Make sure to obtain a valid API

 key from the weather service provider.

## Troubleshooting

If you encounter any issues while installing or running the code, consider the following troubleshooting steps:

- Ensure that you have a stable internet connection.
- Double-check that the API key and endpoints are correctly configured.
- Make sure you are running the code with the required Node.js version.
- Check for any error messages or console logs for hints on the problem.

If the issue persists, please open an issue in the GitHub repository for assistance.

## Contributing

Contributions are welcome! If you have any improvements or bug fixes, feel free to open a pull request. Please ensure that your code adheres to the existing coding style and conventions.
