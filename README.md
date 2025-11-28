# Amazon Clone Website — JavaScript, HTML, and CSS
A fully interactive Amazon-style ecommerce website built using pure JavaScript, without any frameworks. This project demonstrates real-world web development practices including DOM manipulation, state management, modular code architecture, OOP principles, asynchronous operations, and automated testing using Jasmine.

Designed as a major learning and portfolio project, it showcases strong knowledge of frontend fundamentals and scalable application structure without relying on libraries like React or backend frameworks.
![Image](https://github.com/user-attachments/assets/4dcf1457-0dec-49b7-9686-897d4f003859)

## Overview

This project replicates core ecommerce functionality: viewing products, adding/removing items from the cart, checkout workflow, real-time UI updates, and order processing simulation.

The website follows a structured development approach emphasizing:
- JavaScript data modeling
- Dynamic HTML generation
- MVC (Model-View-Controller) architecture
- Modular code organization using ES Modules
- Asynchronous communication with backend APIs

## Key Features
- Pure JavaScript (No Frameworks)
- Modular Codebase using ES Modules
- Real-time UI updates with DOM manipulation
- Complete Add-to-Cart & Delete functionality
- Dynamic product rendering from data
- Checkout page and simulated order placement
- OOP using classes, inheritance & polymorphism
- URL parameter-based routing
- Asynchronous API requests using Fetch
- Automated Testing using Jasmine
- Reusable utility functions
- Responsive design with CSS

## Technical Concepts Implemented

**Data Structures**
- Products stored as objects (name, price, rating, image, id, etc.)
- Cart storing minimal data (```productID```, ```quantity```)
- Normalized data used to avoid duplication

**DOM Manipulation**
- ```document.querySelector()``` for selecting elements
- ```innerHTML``` to render UI dynamically
- Regenerate full UI after data updates (not mutating small parts)

**Utility Functions**
- Shared reusable functions such as ```formatCurrency()``` for consistent formatting.

## Website Interactivity

- Event Handling: ```addEventListener()``` for buttons (add to cart, delete)
- Data Attributes: ```data-product-id``` for linking UI elements to logic
- Cart Logic: updating quantities, deleting items, recalculation
- Radio Selection: dynamically generated unique input groups
- Navigation: ```<a>``` based internal page transitions

## Testing
Testing was implemented to verify application correctness and reliability:
- Framework: [Jasmine](https://jasmine.github.io/)
- Unit Tests & Integration Tests
- Spies & Mocking using ```spyOn()``` for localStorage & API functions
- Testing async behavior using Jasmine’s done callback

## Running the Project
**Clone the Repository**
```bash
git clone https://github.com/Madhankannan02/Amazon-Website-Using-Javascript.git
cd amazon-website-using-javascript
```
**Open in Browser**
Since this is a frontend-only project, simply open the main HTML file:
```bash
index.html
```
No server required.

## Future Enhancements

- Improved search and sorting features
- LocalStorage persistence for cart
- Product filtering by category
- Admin dashboard for product CRUD operations
- Backend database integration
- Payment system simulation

## Purpose & Learning Outcomes
Through this project, gained experience in:
- Real-world JavaScript architecture and browser APIs
- DOM manipulation and async workflow
- MVC design and modular code organization
- OOP principles: classes, inheritance, polymorphism
- API request handling and error management
- Automated testing and debugging strategy


## License

Distributed under the [MIT](https://choosealicense.com/licenses/mit/) Licenses.
