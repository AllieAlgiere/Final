function generateMealPlan() {
    // Get user input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var goal = document.getElementById('goal').value;

    // Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Logic to generate the meal plan
    // ...

    // Open a new window with the generated meal plan
    var newWindow = window.open();
    newWindow.document.write("<html><head><title>Meal Plan</title></head><body>");
    // Populate the new window with meal plan content
    // Use document.write() to generate the content
    newWindow.document.write("</body></html>");
}
