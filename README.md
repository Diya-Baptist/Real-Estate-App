


### **Real Estate App**

## Overview

The **Real Estate App** is a responsive web application designed to help users find and lease apartments with ease. The application features multiple pages, including:

- Login Page
- Search Results Page
- Eligibility Check Page
- Transaction Review Page
- Approved Offer Page

## Tools and Technologies

- **HTML**: For structuring the content of the pages.
- **CSS**: For styling the application, ensuring it is responsive and visually appealing across different devices.
- **JavaScript**: For adding interactivity and managing the flow between different pages of the application.
- **Responsive Design**: Implemented using media queries to ensure the app functions well on mobile, tablet, and desktop screens.
- **Box Shadow and Border Radius**: Used for styling elements to make the design modern and user-friendly.

## Features

- **Login Page**: Allows users to enter their credentials to access the application.
- **Search Results Page**: Displays a list of available apartments with filters and search functionality.
- **Eligibility Check Page**: Collects user information to verify their eligibility for leasing an apartment.
- **Transaction Review Page**: Shows details of the selected apartment, allows the user to select the rental period, and displays payment details.
- **Approved Offer Page**: Presents the final offer details and allows users to complete the payment.

## Challenges and Solutions

### Page Navigation and Display Issues

**Challenge**: Managing the visibility of different pages and ensuring smooth transitions between them was challenging. Initially, some pages were not displaying correctly after certain interactions.

**Solution**: Implemented JavaScript functions to control the display of pages based on user interactions. Corrected the display logic in the script to ensure that the eligibility check page appears after selecting an apartment and before the transaction review page.

### Responsiveness

**Challenge**: Ensuring the application is fully responsive and looks good on all device sizes.

**Solution**: Used CSS media queries to adjust the layout and styling for mobile, tablet, and desktop views. Ensured that elements like buttons and input fields are appropriately sized and spaced across different screen sizes.

### Dynamic Content Updates

**Challenge**: Dynamically updating the transaction review page with selected apartment details and payment information was complex.

**Solution**: Stored selected apartment data in a JavaScript object and used DOM manipulation to update the transaction review page with this information. Added event listeners to handle user interactions and dynamically adjust the content displayed.

### Form Handling and Validation

**Challenge**: Validating and resetting the eligibility check form correctly was essential for a smooth user experience.

**Solution**: Implemented form validation and reset functionality in the JavaScript code. Added logic to ensure the form is cleared when transitioning between pages and validated before submission.

## How to Run the App

1. **Clone the Repository**:

    ```sh
    git clone <repository-url>
    ```

2. **Navigate to the Project Directory**:

    ```sh
    cd <project-directory>
    ```

3. **Open index.html in a Web Browser**:
   - Double-click the `index.html` file or use a local web server to view the application.

## Future Improvements

- **Enhanced Validation**: Implement more comprehensive validation for user input on the eligibility check page.
- **User Authentication**: Integrate a backend service for user authentication and session management.
- **Improved UI/UX**: Continue refining the user interface and user experience based on user feedback.

## URL of project

-https://real-estate-app-website.vercel.app/
