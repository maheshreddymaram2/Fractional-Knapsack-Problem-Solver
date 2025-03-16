let items = [];

// Add Item
function addItem() {
    let weight = parseFloat(document.getElementById("itemWeight").value);
    let value = parseFloat(document.getElementById("itemValue").value);

    if (isNaN(weight) || weight <= 0 || isNaN(value) || value <= 0) {
        alert("Enter valid item details!");
        return;
    }

    items.push({ weight, value, ratio: value / weight });
    document.getElementById("itemWeight").value = "";
    document.getElementById("itemValue").value = "";
    renderItems();
}

// Render Items
function renderItems() {
    let itemsTable = document.querySelector("#itemsBody");
    itemsTable.innerHTML = "";
    items.forEach((item, index) => {
        const row = itemsTable.insertRow();
        row.innerHTML = `
            <td>${item.weight}</td>
            <td>${item.value}</td>
            <td><button onclick="removeItem(${index})">Remove</button></td>
        `;
    });
}

// Remove Item
function removeItem(index) {
    items.splice(index, 1);
    renderItems();
}

// Clear Items
function clearItems() {
    document.getElementById("capacity").value = "";
    items = [];
    renderItems();
}

// Solve Knapsack Problem
function solveKnapsack() {
    let capacity = parseFloat(document.getElementById("capacity").value);
    if (isNaN(capacity) || capacity <= 0) {
        alert("Please enter a valid capacity.");
        return;
    }
    
    if (items.length === 0) {
        alert("No items added to the knapsack!");
        return;
    }

    items.sort((a, b) => b.ratio - a.ratio);

    let remainingCapacity = capacity;
    let totalValue = 0;
    let solution = [];

    for (let item of items) {
        if (remainingCapacity >= item.weight) {
            totalValue += item.value;
            remainingCapacity -= item.weight;
            solution.push({ weight: item.weight, value: item.value });
        } else {
            totalValue += item.ratio * remainingCapacity;
            solution.push({ weight: remainingCapacity, value: item.ratio * remainingCapacity });
            break;
        }
    }

    const knapsackResult = { totalValue, solution };
    localStorage.setItem("knapsackSolution", JSON.stringify(knapsackResult));
    
    console.log("Knapsack Solution Saved:", knapsackResult); // Debugging log

    // ✅ Redirect to solution.html
    window.location.href = "solution.html";
}

// Attach event listeners
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addItem").addEventListener("click", addItem);
    document.getElementById("solveKnapsack").addEventListener("click", solveKnapsack);
    document.getElementById("clearItems").addEventListener("click", clearItems);
});
