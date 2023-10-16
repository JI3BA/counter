# Counter

This project is a simple counter application developed using React, TypeScript, Redux Toolkit, and Redux Persist. The project implements two variations of the counter: one using hooks (useState, useEffect), and the other using Redux Toolkit with Slice and Redux Persist for storing values in Local Storage.

## Functionality

- Display the current value of the counter on the screen.
- Buttons to increment and decrement the counter value.
- A "Settings" button that, when clicked, switches the counter window to the settings window.
- In the settings window, users can specify the initial and maximum values for the counter.
- The counter settings are saved in Local Storage and loaded when the application is reopened.

## Technical Details

- Counter state management using hooks (useState, useEffect) and Redux Toolkit with Slice.
- Redux Persist is used to store the counter state in Local Storage for persistence.
- TypeScript is used for static typing and improved development experience.

