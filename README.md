# 🎒 Fractional Knapsack Problem Solver

A web-based and mobile-responsive application that solves the **Fractional Knapsack Problem** using a Greedy algorithm. Users can sign up, log in, input custom values and weights, and get the optimal solution with fractional item support.

🔗 **Live Demo**: [Click Here to Use It](https://maheshreddymaram2.github.io/Fractional-Knapsack-Problem-Solver/)

---

## 🧠 Project Overview

This project guides the user through:

1. 🔐 **Login/Signup** using `index.html` (data stored using `localStorage`)
2. ➕ **Item input and capacity setup** in `knapsackproblemsolver.html`
3. 🧮 **Solution output with total value and items selected** in `solution.html`

The application is fully responsive and works smoothly on mobile, tablet, and desktop devices.

---

## 🚀 Features

- Secure login and signup form using `localStorage`
- Knapsack capacity and item (weight, value) entry
- Dynamic table to view added items with remove option
- Clear all items and solve using "Solve Knapsack" button
- Greedy algorithm to solve the fractional knapsack problem
- Total value and items displayed in the solution page
- Back and Logout options
- Mobile, tablet, and desktop responsive design

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript (vanilla)
- **Storage**: localStorage
- **Deployment**: GitHub Pages

---
## Fractional-Knapsack-Problem-Solver/
├── index.html                  # Login and Signup UI
├── styles.css                  # Styling for index.html
├── script.js                   # JS logic for login/signup
├── knapsackproblemsolver.html # UI to input capacity and items
├── knapsackproblemsolver.css  # Styling for solver interface
├── knapsackproblemsolver.js   # JS logic for solver table
├── solution.html               # Final output display page
├── screenshots/                # Folder containing UI screenshots
│   ├── login.png               # Screenshot of login/signup page
│   ├── knapsack_solver.png     # Screenshot of problem solver interface
│   └── solution.png            # Screenshot of final solution display
