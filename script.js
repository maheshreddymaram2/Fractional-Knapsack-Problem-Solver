// shows Login & Signup Logic
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const loginContainer = document.querySelector(".login-container");
const signupContainer = document.querySelector(".signup-container");
const loginError = document.getElementById("loginError");
const signupError = document.getElementById("signupError");

document.getElementById("show-signup").addEventListener("click", () => {
    loginContainer.classList.add("hidden");
    signupContainer.classList.remove("hidden");
});

document.getElementById("show-login").addEventListener("click", () => {
    signupContainer.classList.add("hidden");
    loginContainer.classList.remove("hidden");
});

signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    if (!username || !password) {
        signupError.textContent = "Username and password are required!";
        return;
    }

    if (localStorage.getItem(username)) {
        signupError.textContent = "Username already exists!";
        return;
    }

    localStorage.setItem(username, btoa(password));
    alert("Signup successful. Please log in.");
    signupContainer.classList.add("hidden");
    loginContainer.classList.remove("hidden");
});

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedPassword = localStorage.getItem(username);
    
    if (storedPassword && storedPassword === btoa(password)) {
        sessionStorage.setItem("loggedInUser", username);
        alert("Login successful");
        window.location.href = "knapsackproblemsolver.html";
    } else {
        loginError.textContent = "Invalid username or password!";
    }
});

// shows solution of solution.html
if (window.location.pathname.includes("solution.html")) {
    document.addEventListener("DOMContentLoaded", () => {
        const solutionOutput = document.getElementById("solution-output");
        const solutionData = JSON.parse(localStorage.getItem("knapsackSolution"));

        if (solutionData) {
            solutionOutput.innerHTML = `
                <h2>Total Value: ${solutionData.totalValue.toFixed(2)}</h2>
                <h3>Items Taken:</h3>
                <ul>${solutionData.solution.map(item => `<li>${item.weight} kg - Value: ${item.value.toFixed(2)}</li>`).join("")}</ul>
            `;
        } else {
            solutionOutput.innerHTML = "<p>No solution found.</p>";
        }
    });
}

// Check we done login in
document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("loggedInUser")) {
        document.body.classList.add("logged-in");
    }
});
