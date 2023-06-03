# Grand Sorter

This is a web application that allows users to compare the prices of two items from the game Oldschool Runescape and test their knowledge. The app utilizes React.js and Tailwind CSS. By the way my high score is 12.

# Features

- Fetches item data from an external API (https://oldschool.runescape.wiki/w/RuneScape:Real-time_Prices) to display two items for comparison.

- Starts a countdown timer for 60 seconds for users to correctly select the item with the higher price, tracking the score based on the users correct and wrong answers.

- Updates the high score and stores it in the browser's local storage.

- Plays sound effects for correct and wrong answers using HTML5 Audio. A mute button to toggle the sound effects is provided

- Utilizes responsive design with the help of Tailwind CSS for a better user experience across different devices.

# Components

There are three main components for the web application but there are also smaller components as well such as the utils.jsx files which holds functions to convert the API prices from string to number.

- App:
  The main component that serves as the entry point of the application. It manages the state and handles the fetching of item data, score tracking, and high score management.

- Comparison:
  A component responsible for displaying the two items for comparison. It starts the countdown timer and handles user interactions, such as selecting the correct item and updating the score.

- Item:
  A reusable component that represents an individual item. It displays the item's details, such as name and image, and allows the user to click on it for selection.

# Dependencies

The app utilizes the following dependencies:

- React Axios: Promise-based HTTP client for making API requests.
- Tailwind CSS: Utility-first CSS framework for styling the components.
- Vite: Fast development server and build tool.

# Development Dependencies

- ESLint: Pluggable JavaScript linter for identifying and reporting code errors and enforcing coding standards.
- Prettier: Opinionated code formatter for maintaining consistent code style and formatting.
