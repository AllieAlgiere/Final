// Function to generate a meal plan based on user input
function generateMealPlan() {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const meals = {
        breakfast: ['Oatmeal with fruits', 'Scrambled eggs with spinach', 'Greek yogurt with granola', 'Smoothie bowl'],
        snack: ['Apple slices with peanut butter', 'Trail mix', 'Carrot sticks with hummus', 'Greek yogurt'],
        lunch: ['Grilled chicken salad', 'Vegetable stir-fry with tofu', 'Turkey and avocado wrap', 'Quinoa salad'],
        dinner: ['Salmon with roasted vegetables', 'Pasta with marinara sauce', 'Stuffed bell peppers', 'Vegetable curry']
    };

    const mealPlan = {};

    // Generate a random meal plan for each day of the week
    for (let i = 0; i < daysOfWeek.length; i++) {
        const day = daysOfWeek[i];
        mealPlan[day.toLowerCase()] = {};

        // Select a random meal for each meal type
        Object.keys(meals).forEach(mealType => {
            const randomIndex = Math.floor(Math.random() * meals[mealType].length);
            mealPlan[day.toLowerCase()][mealType] = meals[mealType][randomIndex];
        });
    }

    // Open a new window to display the meal plan
    const newWindow = window.open('', '_blank');
    newWindow.document.write('<html><head><title>Meal Plan</title>');
    newWindow.document.write('<style>table {border-collapse: collapse; width: 100%;} th, td {border: 1px solid #ddd; padding: 8px; text-align: left;} th {background-color: #007bff; color: white;}</style>');
    newWindow.document.write('<style>button {padding: 10px; margin-right: 10px; background-color: #007bff; color: #fff; border: none; border-radius: 5px; cursor: pointer;} button:hover {background-color: #0056b3;}</style>');
    newWindow.document.write('</head><body>');
    newWindow.document.write('<h1>Meal Plan</h1>');
    newWindow.document.write('<table>');
    newWindow.document.write('<tr><th>Day</th><th>Breakfast</th><th>Snack</th><th>Lunch</th><th>Dinner</th></tr>');
    
    // Populate the new window with meal plan content
    daysOfWeek.forEach(day => {
        newWindow.document.write(`<tr><td>${day}</td><td>${mealPlan[day.toLowerCase()].breakfast}</td><td>${mealPlan[day.toLowerCase()].snack}</td><td>${mealPlan[day.toLowerCase()].lunch}</td><td>${mealPlan[day.toLowerCase()].dinner}</td></tr>`);
    });
    
    newWindow.document.write('</table>');
    // Add print button to the new window
    newWindow.document.write('<button onclick="window.print()">Print</button>');

    // Add download button to the new window
    newWindow.document.write('<button id="downloadButton">Download</button>');

    newWindow.document.write('</body></html>');
    newWindow.document.close();

    // Add event listener to the download button
    newWindow.document.getElementById('downloadButton').addEventListener('click', () => {
        downloadMealPlan(mealPlan);
    });
}

// Function to download the meal plan as a text file
function downloadMealPlan(mealPlan) {
    const daysOfWeek = Object.keys(mealPlan);
    let mealPlanContent = "Meal Plan:\n\n";

    daysOfWeek.forEach(day => {
        mealPlanContent += `${day}:\n`;
        Object.keys(mealPlan[day]).forEach(mealType => {
            mealPlanContent += `${mealType}: ${mealPlan[day][mealType]}\n`;
        });
        mealPlanContent += "\n";
    });

    // Trigger download
    const blob = new Blob([mealPlanContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "meal_plan.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
