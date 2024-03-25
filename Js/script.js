// // User details object
// var users = {};
// // Group details object
// var groups = {};
// // Function to add a new user
// function addUser(name, email) {
//     var userId = `EMPID-${Object.keys(users).length + 1}`;
//     users[userId] = {
//         userId,
//         name,
//         email,
//         groups: [],
//         // Add more user details as needed
//     };
//     return userId;
// }
// // Function to add a new group
// function addGroup(name, description) {
//     var groupId = `group-${Object.keys(groups).length + 1}`;
//     groups[groupId] = {
//         groupId,
//         name,
//         description,
//         members: [],
//         // Add more group details as needed
//     };
//     return groupId;
// }
// // Function to add a user to a group
// function addUserToGroup(userId, groupId) {
//     if (users[userId] && groups[groupId]) {
//         users[userId].groups.push(groupId);
//         groups[groupId].members.push(userId);
//     }
// }
// // Example usage:
// var user1Id = addUser("John Doe", "johndoe@example.com");
// var user2Id = addUser("Jane Smith", "janesmith@example.com");
// var group1Id = addGroup("Developers", "A group for software developers");


// addUserToGroup(user1Id, group1Id);
// addUserToGroup(user2Id, group1Id);

// console.log(users[user1Id]); // New user details
// console.log(groups[group1Id]); // New group details







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// // User details object
// const users = {};

// // Group details object
// const groups = {};

// // Function to add a new user
// function addUser(name, email, password) {
//     const userId = `user-${Object.keys(users).length + 1}`;
//     users[userId] = {
//         userId,
//         name,
//         email,
//         password,
//         groups: [],
//         // Add more user details as needed
//     };

//     // Store the user data in local storage
//     localStorage.setItem(userId, JSON.stringify(users[userId]));

//     return userId;
// }

// // Function to add a new group
// function addGroup(name, description) {
//     const groupId = `group-${Object.keys(groups).length + 1}`;
//     groups[groupId] = {
//         groupId,
//         name,
//         description,
//         members: [],
//         // Add more group details as needed
//     };

//     // Store the group data in local storage
//     localStorage.setItem(groupId, JSON.stringify(groups[groupId]));

//     return groupId;
// }

// // Function to add a user to a group
// function addUserToGroup(userId, groupId) {
//     if (users[userId] && groups[groupId]) {
//         users[userId].groups.push(groupId);
//         groups[groupId].members.push(userId);
//     }

//     // Update user and group data in local storage
//     localStorage.setItem(userId, JSON.stringify(users[userId]));
//     localStorage.setItem(groupId, JSON.stringify(groups[groupId]));
// }

// // Function to sign in and create a session
// function signIn(email, password) {
//     for (const userId in users) {
//         const userData = JSON.parse(localStorage.getItem(userId));
//         if (userData.email === email && userData.password === password) {
//             // User is authenticated
//             const sessionToken = generateSessionToken();
//             userData.sessionToken = sessionToken;

//             // Store the session token and user data in local storage
//             localStorage.setItem("sessionToken", sessionToken);
//             localStorage.setItem(sessionToken, JSON.stringify(userData));

//             return userData;
//         }
//     }
//     return null; // Invalid credentials
// }

// // Function to generate a unique session token
// function generateSessionToken() {
//     return `session-${Math.random().toString(36).substr(2, 10)}`;
// }

// // Function to verify the session
// function verifySession() {
//     const sessionToken = localStorage.getItem("sessionToken");
//     if (sessionToken) {
//         const userData = JSON.parse(localStorage.getItem(sessionToken));
//         if (userData) {
//             return userData;
//         }
//     }
//     return null;
// }

// // Function to clear the session (log out)
// function clearSession() {
//     const sessionToken = localStorage.getItem("sessionToken");
//     if (sessionToken) {
//         localStorage.removeItem(sessionToken);
//         localStorage.removeItem("sessionToken");
//     }
// }

// // Sign-Up form submission
// function signUp() {
//     const name = document.getElementById("signUpName").value;
//     const email = document.getElementById("signUpEmail").value;
//     const password = document.getElementById("signUpPassword").value;

//     const userId = addUser(name, email, password);

//     // Redirect or perform other actions after successful sign-up
// }

// // Sign-In form submission
// function signIn() {
//     const email = document.getElementById("signInEmail").value;
//     const password = document.getElementById("signInPassword").value;

//     const user = signIn(email, password);

//     if (user) {
//         // User is authenticated, you can redirect to the user's dashboard or perform other actions
//     } else {
//         // Display an error message for invalid credentials
//     }
// }

// // Log Out button click event
// function logOut() {
//     clearSession();
//     // Redirect to the sign-in page or perform other actions
// }





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // User and Group Management Code

// // User details object
// const users = {};

// // Group details object
// const groups = {};

// // Function to add a new user
// // function addUser(name, email, password) {
// //   const userId = `user-${Object.keys(users).length + 1}`;
// //   users[userId] = {
// //     userId,
// //     name,
// //     email,
// //     password,
// //     groups: [],
// //     // Add more user details as needed
// //   };

// //   // Store the user data in local storage
// //   localStorage.setItem(userId, JSON.stringify(users[userId]));

// //   return userId;
// // }
// // Function to add a new user
// function addUser(name, email, password) {
//   const userId = `user-${Object.keys(users).length + 1}`;
//   users[userId] = {
//     userId,
//     name,
//     email,
//     password,
//     groups: [],
//     registered: true, // New users are marked as registered
//     // Add more user details as needed
//   };

//   // Store the user data in local storage
//   localStorage.setItem(userId, JSON.stringify(users[userId]));

//   return userId;
// }

// // Function to handle user sign-up
// function signUp() {
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   const userId = addUser(name, email, password);

//   // Optionally, you can automatically sign in the user after sign-up
//   const user = signIn(email, password);

//   if (user) {
//     // User is authenticated, you can redirect to the user's dashboard or perform other actions
//   }
// }

// // Sign Up button click event
// document.getElementById("signUpButton").addEventListener("click", signUp);
// // Function to add a new group
// function addGroup(name, description) {
//   const groupId = `group-${Object.keys(groups).length + 1}`;
//   groups[groupId] = {
//     groupId,
//     name,
//     description,
//     members: [],
//     // Add more group details as needed
//   };

//   // Store the group data in local storage
//   localStorage.setItem(groupId, JSON.stringify(groups[groupId]));

//   return groupId;
// }

// // Function to add a user to a group
// function addUserToGroup(userId, groupId) {
//   if (users[userId] && groups[groupId]) {
//     users[userId].groups.push(groupId);
//     groups[groupId].members.push(userId);
//   }

//   // Update user and group data in local storage
//   localStorage.setItem(userId, JSON.stringify(users[userId]));
//   localStorage.setItem(groupId, JSON.stringify(groups[groupId]));
// }

// // Function to handle sign-in
// function handleSignIn() {
//   const email = document.getElementById("signInEmail").value;
//   const password = document.getElementById("signInPassword").value;

//   const user = signIn(email, password);

//   if (user) {
//     // User is authenticated, you can redirect to the user's dashboard or perform other actions
//   } else {
//     // Display an error message for invalid credentials
//   }
// }

// // Add user to group button click event
// function addUserToGroupClick() {
//   const userId = document.getElementById("userIdToAdd").value;
//   const groupId = document.getElementById("groupIdToAdd").value;
//   addUserToGroup(userId, groupId);
//   // Update the user interface to reflect the changes
// }

// // Session Management Code

// // Function to sign in and create a session
// function signIn(email, password) {
//   for (const userId in users) {
//     const userData = JSON.parse(localStorage.getItem(userId));
//     if (userData.email === email && userData.password === password) {
//       // User is authenticated
//       const sessionToken = generateSessionToken();
//       userData.sessionToken = sessionToken;

//       // Store the session token and user data in local storage
//       localStorage.setItem("sessionToken", sessionToken);
//       localStorage.setItem(sessionToken, JSON.stringify(userData));

//       return userData;
//     }
//   }
//   return null; // Invalid credentials
// }

// // Function to generate a unique session token
// function generateSessionToken() {
//   return `session-${Math.random().toString(36).substr(2, 10)}`;
// }

// // Function to verify the session
// function verifySession() {
//   const sessionToken = localStorage.getItem("sessionToken");
//   if (sessionToken) {
//     const userData = JSON.parse(localStorage.getItem(sessionToken));
//     if (userData) {
//       return userData;
//     }
//   }
//   return null;
// }

// // Function to clear the session (log out)
// function clearSession() {
//   const sessionToken = localStorage.getItem("sessionToken");
//   if (sessionToken) {
//     localStorage.removeItem(sessionToken);
//     localStorage.removeItem("sessionToken");
//   }
// }

// // Log Out button click event
// function logOut() {
//   clearSession();
//   // Redirect to the sign-in page or perform other actions
// }








///////////////////////////////////////////////////////////////////////////////////////////////////








// // User and Group Management Code

// // User details object
// // var users = localStorage.JSON.parse("users");

// var users = {};
// // Group details object
// var groups = {};
// console.log(`user-${Object.keys(users).length + 1}`)
// // Function to add a new user
// function addUser(name, email, password, number) {
//   var userId = `user-${Object.keys(users).length + 1}`;
//   users[userId] = {
//     userId: userId,
//     name:name,
//     email:email,
//     password:password,
//     number:number,
//     groups: [],
//     registered: true, // New users are marked as registered
//     // Add more user details as needed
//   };
//   console.log(`user-${Object.keys(users).length + 1}`)

//   // Store the user data in local storage
//   // console.log(userId, JSON.stringify(users[userId]))
//   localStorage.setItem(userId, JSON.stringify(users[userId]));
//   localStorage.setItem("users", JSON.stringify(users));

//   return userId;
// }

// // Function to add a new group
// function addGroup(name, description) {
//   var groupId = `group-${Object.keys(groups).length + 1}`;
//   groups[groupId] = {
//     groupId : groupId,
//     name : name,
//     description:description,
//     members: [],
//     // Add more group details as needed
//   };

//   // Store the group data in local storage
//   localStorage.setItem(groupId, JSON.stringify(groups[groupId]));

//   return groupId;
// }

// // Function to add a user to a group
// function addUserToGroup(userId, groupId) {
//   if (users[userId] && groups[groupId]) {
//     users[userId].groups.push(groupId);
//     groups[groupId].members.push(userId);
//   }

//   // Update user and group data in local storage
//   localStorage.setItem(userId, JSON.stringify(users[userId]));
//   localStorage.setItem(groupId, JSON.stringify(groups[groupId]));
// }

// // Function to handle sign-in
// function signIn(email, password) {
//   // console.log(`signing in`)
//   for (var userId in users) {
//     var userData = JSON.parse(localStorage.getItem(userId));
//     if (userData.email === email && userData.password === password) {
//       // User is authenticated
//       var sessionToken = generateSessionToken();
//       userData.sessionToken = sessionToken;

//       // Store the session token and user data in local storage
//       localStorage.setItem("sessionToken", sessionToken);
//       localStorage.setItem(sessionToken, JSON.stringify(userData));

//       return userData;
//     }
//   }
//   return null; // Invalid credentials
// }

// // Function to generate a unique session token
// function generateSessionToken() {
//   return `session-${Math.random().toString(36).substr(2, 10)}`;
// }

// // Function to verify the session
// function verifySession() {
//   var sessionToken = localStorage.getItem("sessionToken");
//   if (sessionToken) {
//     var userData = JSON.parse(localStorage.getItem(sessionToken));
//     if (userData) {
//       return userData;
//     }
//   }
//   return null;
// }

// // Function to clear the session (log out)
// function clearSession() {
//   var sessionToken = localStorage.getItem("sessionToken");
//   if (sessionToken) {
//     localStorage.removeItem(sessionToken);
//     localStorage.removeItem("sessionToken");
//   }
//   else {
//     // console.log(`Not found`)
//   }
// }

// // Sign Up button click event
// function signUp() {
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
//   var number = document.getElementById("mobile").value;
//   // console.log(users);

//   if (name != "" && email != "" && password != "" && number != "" && number > 100000000) {
//     // console.log("adding user");
//     addUser(name, email, password, number);
//     // Optionally, you can automatically sign in the user after sign-up
//     var user = signIn(email, password);

//     if (user) {
//       // User is authenticated, you can redirect to the user's dashboard or perform other actions
//     }
//   }
//   else{

//   }
// }

// // Log Out button click event
// function logOut() {
//   // console.log(`logging out`)

//   clearSession();
//   // window.location.href = "index.html"
//   // Redirect to the sign-in page or perform other actions
// }

// // Initialize the application
// function initializeApp() {
//   // Check for an existing session
//   var user = verifySession();

//   if (user) {
//     // console.log(1)
//     window.location.href = `home.html`
//     // User is already signed in, you can redirect to the user's dashboard or perform other actions
//   } else {
//     var formOfSignUp = `<div class="connectHomeLoginPageinputContainer"><div class="signup-box signBox" style="opacity: 1; visibility: visible;"><p class="formHeader">Instant access. No credit card needed</p><div id="formBox" class="formBox"><form><div class="signupcontainer"><div class="signForm signNameContainer"><div class="wrapElem"><input class="" id="name" name="firstname" placeholder="Name *" type="text" required></div></div><div class="signEmailContainer signForm"><div class="wrapElem"><input class="" id="email" name="email" placeholder="Email address *"type="email" required ></div></div><div class="signNumberContainer signForm"><div class="signForm"><div class="wrapElem"><div class=""><input class="" id="mobile"name="phoneNumber" placeholder="Phone Number*" type="number" required></div></div></div><div class="signPasswordContainer signForm"><div class="wrapElem" style="position: relative;"><input class="" id="password" name="password" placeholder="Password *"type="password" required></div></div><div class="agreeTermsContainer"><div class="signTOSContainer"><label class="sign_agree"><input class="signTOS" id="tos" name="tos" onclick=""type="checkbox" value="false">I agree to the<a href="https://www.zoho.com/terms.html" target="_blank"rel="noopener"> Terms of Service </a>and<a class="" href="https://www.zoho.com/privacy.html" target="_blank"rel="noopener"> Privacy Policy</a>.</label></div><div class="sgnbtn"><input class="signupbtn" onclick="" id="signupbtn"type="submit" value="Sign Up for Free" style="opacity: 1;"></div></div></div></div></form></div></div></div>`    // User is not signed in, you can display the sign-in form or perform other actions
//     document.getElementById("connectHomeLoginPageBox").innerHTML += formOfSignUp;
//     document.getElementById("signupbtn").addEventListener("click", signUp);
//   }
// }

// // Attach event listeners
// // document.getElementById("logOutButton").addEventListener("click", logOut);

// // Call initializeApp when the page loads
// initializeApp();





// console.log(users[``])

// function forsignIn() {
//   console.log(`forsignIn`)
//   // var signInBtn = document.getElementById("signInBtn");
//   // signInBtn.addEventListener("click",() =>{
//   //   let email = document.getElementById("login_id").value;
//   //   let password = document.getElementById("password").value;
//   //   signIn(email,password);
//   // })
// }


////////////////////////////////////////////////////////////////////////////////////////////




// // User and Group Management Code

// // User details object

// var users = {};
// // Group details object
// var groups = {};
// console.log(`user-${Object.keys(users).length + 1}`)
// // Function to add a new user
// function addUser(name, email, password, number) {
//   var userId = `user-${Object.keys(users).length + 1}`;
//   users[userId] = {
//     userId: userId,
//     name: name,
//     email: email,
//     password: password,
//     number: number,
//     groups: [],
//     registered: true, // New users are marked as registered
//     // Add more user details as needed
//   };
//   console.log(`user-${Object.keys(users).length + 1}`)

//   // Store the user data in local storage
//   // console.log(userId, JSON.stringify(users[userId]))
//   localStorage.setItem(userId, JSON.stringify(users[userId]));
//   localStorage.setItem("users", JSON.stringify(users));

//   return userId;
// }

// // Function to add a new group
// function addGroup(name, description) {
//   var groupId = `group-${Object.keys(groups).length + 1}`;
//   groups[groupId] = {
//     groupId: groupId,
//     name: name,
//     description: description,
//     members: [],
//     // Add more group details as needed
//   };

//   // Store the group data in local storage
//   localStorage.setItem(groupId, JSON.stringify(groups[groupId]));

//   return groupId;
// }

// // Function to add a user to a group
// function addUserToGroup(userId, groupId) {
//   if (users[userId] && groups[groupId]) {
//     users[userId].groups.push(groupId);
//     groups[groupId].members.push(userId);
//   }

//   // Update user and group data in local storage
//   localStorage.setItem(userId, JSON.stringify(users[userId]));
//   localStorage.setItem(groupId, JSON.stringify(groups[groupId]));
// }

// // Function to handle sign-in
// function signIn(email, password) {
//   // console.log(`signing in`)
//   for (const userId in users) {
//     const userData = JSON.parse(localStorage.getItem(userId));
//     if (userData.email === email && userData.password === password) {
//       // User is authenticated
//       const sessionToken = generateSessionToken();
//       userData.sessionToken = sessionToken;

//       // Store the session token and user data in local storage
//       localStorage.setItem("sessionToken", sessionToken);
//       localStorage.setItem(sessionToken, JSON.stringify(userData));

//       return userData;
//     }
//   }
//   return null; // Invalid credentials
// }

// // Function to generate a unique session token
// function generateSessionToken() {
//   return `session-${Math.random().toString(36).substr(2, 10)}`;
// }

// // Function to verify the session
// function verifySession() {
//   var sessionToken = localStorage.getItem("sessionToken");
//   if (sessionToken) {
//     var userData = JSON.parse(localStorage.getItem(sessionToken));
//     if (userData) {
//       return userData;
//     }
//   }
//   return null;
// }

// // Function to clear the session (log out)
// function clearSession() {
//   var sessionToken = localStorage.getItem("sessionToken");
//   if (sessionToken) {
//     localStorage.removeItem(sessionToken);
//     localStorage.removeItem("sessionToken");
//   }
//   else {
//     // console.log(`Not found`)
//   }
// }

// // Sign Up button click event
// function signUp() {
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
//   var number = document.getElementById("mobile").value;
//   // console.log(users);

//   if (name != "" && email != "" && password != "" && number != "" && number > 100000000) {
//     // console.log("adding user");
//     addUser(name, email, password, number);
//     // Optionally, you can automatically sign in the user after sign-up
//     var user = signIn(email, password);

//     if (user) {
//       window.location.href = `home.html`
//       // User is authenticated, you can redirect to the user's dashboard or perform other actions
//     }
//   }
//   else {

//   }
// }

// // Log Out button click event
// function logOut() {
//   // console.log(`logging out`)

//   clearSession();
//   // window.location.href = "index.html"
//   // Redirect to the sign-in page or perform other actions
// }

// // Initialize the application
// function initializeApp() {
//   // Check for an existing session
//   var user = verifySession();

//   if (user) {
//     // console.log(1)
//     window.location.href = `home.html`
//     // User is already signed in, you can redirect to the user's dashboard or perform other actions
//   } else {
//     var formOfSignUp = `<div class="connectHomeLoginPageinputContainer"><div class="signup-box signBox" style="opacity: 1; visibility: visible;"><p class="formHeader">Instant access. No credit card needed</p><div id="formBox" class="formBox"><form><div class="signupcontainer"><div class="signForm signNameContainer"><div class="wrapElem"><input class="" id="name" name="firstname" placeholder="Name *" type="text" required></div></div><div class="signEmailContainer signForm"><div class="wrapElem"><input class="" id="email" name="email" placeholder="Email address *"type="email" required ></div></div><div class="signNumberContainer signForm"><div class="signForm"><div class="wrapElem"><div class=""><input class="" id="mobile"name="phoneNumber" placeholder="Phone Number*" type="number" required></div></div></div><div class="signPasswordContainer signForm"><div class="wrapElem" style="position: relative;"><input class="" id="password" name="password" placeholder="Password *"type="password" required></div></div><div class="agreeTermsContainer"><div class="signTOSContainer"><label class="sign_agree"><input class="signTOS" id="tos" name="tos" onclick=""type="checkbox" value="false">I agree to the<a href="https://www.zoho.com/terms.html" target="_blank"rel="noopener"> Terms of Service </a>and<a class="" href="https://www.zoho.com/privacy.html" target="_blank"rel="noopener"> Privacy Policy</a>.</label></div><div class="sgnbtn"><input class="signupbtn" onclick="" id="signupbtn"type="submit" value="Sign Up for Free" style="opacity: 1;"></div></div></div></div></form></div></div></div>`    // User is not signed in, you can display the sign-in form or perform other actions
//     document.getElementById("connectHomeLoginPageBox").innerHTML += formOfSignUp;
//     document.getElementById("signupbtn").addEventListener("click", signUp);
//   }
// }

// // Attach event listeners
// // document.getElementById("logOutButton").addEventListener("click", logOut);

// // Call initializeApp when the page loads
// initializeApp();





// console.log(users[``])

function forsignIn() {
  console.log(`forsignIn`)
  // var signInBtn = document.getElementById("signInBtn");
  // signInBtn.addEventListener("click",() =>{
  //   let email = document.getElementById("login_id").value;
  //   let password = document.getElementById("password").value;
  //   signIn(email,password);
  // })
}


//////////////////////////////////////////////////////////////////////////////////////




// var users = {};
// var groups = {};

// function addUser(name, email, password, number) {
//   var userId = `user-${Object.keys(users).length + 1}`;
//   users[email] = {
//     userId: userId,
//     name: name,
//     email: email,
//     password: password,
//     number: number,
//     groups: [],
//     registered: true,
//   };

//   // Store the user data in local storage
//   localStorage.setItem(email, JSON.stringify(users[email]));
//   localStorage.setItem("users", JSON.stringify(users));

//   return userId;
// }

// function addGroup(name, description) {
//   var groupId = `group-${Object.keys(groups).length + 1}`;
//   groups[groupId] = {
//     groupId: groupId,
//     name: name,
//     description: description,
//     members: [],
//   };

//   // Store the group data in local storage
//   localStorage.setItem(groupId, JSON.stringify(groups[groupId]));

//   return groupId;
// }

// function addUserToGroup(email, groupId) {
//   if (users[email] && groups[groupId]) {
//     users[email].groups.push(groupId);
//     groups[groupId].members.push(email);
//   }

//   // Update user and group data in local storage
//   localStorage.setItem(email, JSON.stringify(users[email]));
//   localStorage.setItem(groupId, JSON.stringify(groups[groupId]));
// }

// function signIn(email, password) {
//   console.log("Heo")
//   for (const emailKey in users) {
//     const userData = JSON.parse(localStorage.getItem(emailKey));
//     if (userData.email == email && userData.password == password) {
//       const sessionToken = generateSessionToken();
//       userData.sessionToken = sessionToken;

//       localStorage.setItem("sessionToken", sessionToken);
//       localStorage.setItem(sessionToken, JSON.stringify(userData));

//       return userData;
//     }
//   }
//   return null;
// }

// function generateSessionToken() {
//   return `session-${Math.random().toString(36).substr(2, 10)}`;
// }

// function verifySession() {
//   var sessionToken = localStorage.getItem("sessionToken");
//   if (sessionToken) {
//     var userData = JSON.parse(localStorage.getItem(sessionToken));
//     if (userData) {
//       return userData;
//     }
//   }
//   return null;
// }

// function clearSession() {
//   var sessionToken = localStorage.getItem("sessionToken");
//   if (sessionToken) {
//     localStorage.removeItem(sessionToken);
//     localStorage.removeItem("sessionToken");
//   }
// }

// function signUp() {
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
//   var number = document.getElementById("mobile").value;

//   if (name && email && password && number && number > 100000000) {
//     addUser(name, email, password, number);
//     var user = signIn(email, password);

//     if (user) {
//       window.location.href = `home.html`;
//     }
//     else {
//       console.log("no")
//     }
//   }
// }

// function logOut() {
//   clearSession();
//   window.location.href = "index.html";
// }

// function initializeApp() {
//   var user = verifySession();
//   // console.log(users)
//   if (user != null) {
//     // console.log(1)
//     window.location.href = `home.html`
//     // User is already signed in, you can redirect to the user's dashboard or perform other actions
//   } else {
//     var formOfSignUp = `<div class="connectHomeLoginPageinputContainer"><div class="signup-box signBox" style="opacity: 1; visibility: visible;"><p class="formHeader">Instant access. No credit card needed</p><div id="formBox" class="formBox"><form><div class="signupcontainer"><div class="signForm signNameContainer"><div class="wrapElem"><input class="" id="name" name="firstname" placeholder="Name *" type="text" required></div></div><div class="signEmailContainer signForm"><div class="wrapElem"><input class="" id="email" name="email" placeholder="Email address *"type="email" required ></div></div><div class="signNumberContainer signForm"><div class="signForm"><div class="wrapElem"><div class=""><input class="" id="mobile"name="phoneNumber" placeholder="Phone Number*" type="number" required></div></div></div><div class="signPasswordContainer signForm"><div class="wrapElem" style="position: relative;"><input class="" id="password" name="password" placeholder="Password *"type="password" required></div></div><div class="agreeTermsContainer"><div class="signTOSContainer"><label class="sign_agree"><input class="signTOS" id="tos" name="tos" onclick=""type="checkbox" value="false">I agree to the<a href="https://www.zoho.com/terms.html" target="_blank"rel="noopener"> Terms of Service </a>and<a class="" href="https://www.zoho.com/privacy.html" target="_blank"rel="noopener"> Privacy Policy</a>.</label></div><div class="sgnbtn"><input class="signupbtn" onclick="" id="signupbtn"type="submit" value="Sign Up for Free" style="opacity: 1;"></div></div></div></div></form></div></div></div>`    // User is not signed in, you can display the sign-in form or perform other actions
//     document.getElementById("connectHomeLoginPageBox").innerHTML += formOfSignUp;
//     document.getElementById("signupbtn").addEventListener("click", signUp);
//   }
// }

// initializeApp();
















/////////////////////////////////////////////////////////////////////////////////////////////////////








var users = {};
var userId = Number(localStorage.getItem("userId")) || 0;




function addUser(name, email, password, number) {
  // var userId = `user-${Object.keys(users).length + 1}`;
  users[email] = {
    userId: `${userId}`,
    name: name,
    email: email,
    password: password,
    number: number,
    groups: [],
    registered: true,
    isLoggedIn: true,
  };

  // Store the user data in local storage
  localStorage.setItem("userId", (userId+1).toString());
  localStorage.setItem(email, JSON.stringify(users[email]));
  if (localStorage.getItem("users")) {
    let temp = JSON.parse(localStorage.getItem("users"));
    for (const forLogged in temp) {
      temp[forLogged].isLoggedIn = false;
    }
    temp[email] = users[email];
    localStorage.setItem("users", JSON.stringify(temp));
  }
  else {
    let temp = {};
    temp[email] = users[email];
    localStorage.setItem("users", JSON.stringify(temp));
  }
  return userId;
}



function signIn(email, password) {
  for (const emailKey in users) {
    const userData = JSON.parse(localStorage.getItem(emailKey));
    if (userData.email == email && userData.password == password) {
      const sessionToken = generateSessionToken();
      userData.sessionToken = sessionToken;

      localStorage.setItem("sessionToken", sessionToken);
      localStorage.setItem(sessionToken, JSON.stringify(userData));

      return userData;
    }
  }
  return null;
}

function generateSessionToken() {
  return `session-${Math.random().toString(36).substr(2, 10)}`;
}

function verifySession() {
  var sessionToken = localStorage.getItem("sessionToken");
  if (sessionToken) {
    var userData = JSON.parse(localStorage.getItem(sessionToken));
    if (userData) {
      return userData;
    }
  }
  return null;
}

function clearSession() {
  var sessionToken = localStorage.getItem("sessionToken");
  if (sessionToken) {
    localStorage.removeItem(sessionToken);
    localStorage.removeItem("sessionToken");
  }
}

function signUp() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var number = document.getElementById("mobile").value;

  if (name && email && password && number && number > 100000000) {
    addUser(name, email, password, number);
    var user = signIn(email, password);

    if (user) {
      window.location.href = `home.html`;
    }
    else {
      console.log("no")
    }
  }
}

function logOut() {
  let temp = JSON.parse(localStorage.getItem("users"));
  for (const forLogged in temp) {
    temp[forLogged].isLoggedIn = false;
  }
  localStorage.setItem("users", JSON.stringify(temp));
  clearSession();

  window.location.href = "index.html";

}

function initializeApp() {
  var user = verifySession();
  // console.log(users)
  if (user != null) {
    window.location.href = `home.html`
    // User is already signed in
  }
  else{
    var formOfSignUp = `<div class="connectHomeLoginPageinputContainer"><div class="signup-box signBox" style="opacity: 1; visibility: visible;"><p class="formHeader">Instant access. No credit card needed</p><div id="formBox" class="formBox"><form><div class="signupcontainer"><div class="signForm signNameContainer"><div class="wrapElem"><input class="" id="name" name="firstname" placeholder="Name *" type="text" required></div></div><div class="signEmailContainer signForm"><div class="wrapElem"><input class="" id="email" name="email" placeholder="Email address *"type="email" required ></div></div><div class="signNumberContainer signForm"><div class="signForm"><div class="wrapElem"><div class=""><input class="" id="mobile"name="phoneNumber" placeholder="Phone Number*" type="number" required></div></div></div><div class="signPasswordContainer signForm"><div class="wrapElem" style="position: relative;"><input class="" id="password" name="password" placeholder="Password *"type="password" required></div></div><div class="agreeTermsContainer"><div class="signTOSContainer"><label class="sign_agree"><input class="signTOS" id="tos" name="tos" onclick=""type="checkbox" value="false">I agree to the<a href="https://www.zoho.com/terms.html" target="_blank"rel="noopener"> Terms of Service </a>and<a class="" href="https://www.zoho.com/privacy.html" target="_blank"rel="noopener"> Privacy Policy</a>.</label></div><div class="sgnbtn"><input class="signupbtn" onclick="" id="signupbtn"type="submit" value="Sign Up for Free" style="opacity: 1;"></div></div></div></div></form></div></div></div>`    // User is not signed in, you can display the sign-in form or perform other actions
    document.getElementById("connectHomeLoginPageBox").innerHTML += formOfSignUp;
    document.getElementById("signupbtn").addEventListener("click", signUp);
  }
}

initializeApp();
































