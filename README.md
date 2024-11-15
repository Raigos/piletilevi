# Piletilevi Frontend Test Task

This project implements a CMS page for managing discounts according to Piletilevi's test task requirements. The implementation follows the provided Figma design and includes all required functionalities.

## 🔴 Live Demo

Visit the live application at: [https://piletilevi.vercel.app](https://piletilevi.vercel.app)

## 🎯 Task Requirements

- ✅ API integration with `/v1/discounts` endpoint
- ✅ Display discounts in a table format
- ✅ Implement client-side pagination
- ✅ Filtering by name and category
- ✅ "Create discount" modal with form (UI only)
- ✅ Follows provided Figma design
- ✅ Critical API integration test
- ✅ Mobile-responsive design (additional feature)

## 🛠️ Implementation Details

### Technology Stack
- React 18
- Material-UI v6 for components
- Emotion for styling
- React Testing Library

### Search Functionality
- Current implementation: Search executes when clicking the search button
- Alternative implementation available: Real-time search updates as user types (commented in code)
- Both search patterns supported for flexibility in user experience

### Additional Features
- Custom mobile-responsive design (not part of original requirements)
- Integration test for API reliability
- Custom hooks for search and filtering logic

## 🏃‍♂️ Running the Project

1. Clone the repository
```bash
git clone https://github.com/raigos/piletilevi.git
cd piletilevi
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```
The application will be available at [http://localhost:3000](http://localhost:3000) which will reroute to [http://localhost:3000/back-office/codes/discounts](http://localhost:3000/back-office/codes/discounts)
## 🧪 Testing

The project includes a critical integration test for the API endpoint:

```bash
npm test
```

The integration test verifies:
- API response time (ensures response within 2 seconds)
- Data structure of the response
- Required fields presence and types

This test ensures the reliability of the core data fetching functionality that the application depends on.

## 📱 Notes on Mobile Design

While the original task didn't include mobile designs, I took the initiative to create a quick responsive layout.
