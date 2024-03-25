function signInThis(email, password) {
    const userDataKeys = Object.keys(localStorage);
    for (const key of userDataKeys) {
        const storedData = JSON.parse(localStorage.getItem(key));
        // Mark all users as logged out
        console.log(storedData)
        // storedData.isLoggedIn = false;
        localStorage.setItem(key, JSON.stringify(storedData));

        if (storedData.email === email && storedData.password === password) {
            // Set the user as authenticated and logged in
            storedData.isLoggedIn = true;

            // Update the user's data in local storage
            localStorage.setItem(key, JSON.stringify(storedData));

            // Rest of your authentication logic
            const sessionToken = generateSessionToken();
            storedData.sessionToken = sessionToken;

            // Store the session token and user data in local storage
            localStorage.setItem("sessionToken", sessionToken);
            localStorage.setItem(sessionToken, JSON.stringify(storedData));

            return storedData;
        }
    }
    return null; // Invalid credentials
}


// Function to generate a unique session token
function generateSessionToken() {
    return `session-${Math.random().toString(36).substr(2, 10)}`;
}

// Function to handle sign-in button click
if(window.location.href.includes("signInPage.html"))
document.getElementById("signInBtn").addEventListener("click", signInBtn);
function signInBtn() {
    var logInId = document.getElementById("login_id").value;
    var passWord = document.getElementById("password").value;
    var signInResult = signInThis(logInId, passWord);
    if (signInResult != null) {
        // Redirect to the home page if sign-in is successful
        window.location.href = `home.html`;
    }
}










