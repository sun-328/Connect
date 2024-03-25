// Function to log out
function logOut() {
    let temp = JSON.parse(localStorage.getItem("users"));
    for (const forLogged in temp) {
        temp[forLogged].isLoggedIn = false;
    }
    localStorage.setItem("users", JSON.stringify(temp));
    // Clear the session and redirect to the sign-in page
    clearSession();

    window.location.href = "index.html";
}

// Function to clear the session data
function clearSession() {
    const sessionToken = localStorage.getItem("sessionToken");
    if (sessionToken) {
        // If a session token is found, remove it and the "sessionToken" key
        localStorage.removeItem(sessionToken);
        localStorage.removeItem("sessionToken");
    } else {
        // If the session token is not found
    }
}

// var posts = [];
// var postIdCounter = Number(localStorage.getItem("postIdCounter")) || 1;
// var groups = [];
// var groupIdCounter = Number(localStorage.getItem("groupIdCounter")) || 1;

function findUser() {
    let userIn = localStorage.getItem("sessionToken");
    userIn = JSON.parse(localStorage.getItem(`${userIn}`));
    return userIn.userId;
}

// Function to handle the "Create Post" button click
// function createPost(title, description, postedGrp) {
//     const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
//     let userIn = localStorage.getItem("sessionToken");
//     userIn = JSON.parse(localStorage.getItem(`${userIn}`));
//     userIn = userIn.userId;
//     const timestamp = new Date(); // Get the current timestamp
//     const newPost = {
//         id: postIdCounter++,
//         postBy: userIn,
//         title: title,
//         description: description,
//         likes: 0,
//         likedBy: [],
//         comments: [],
//         postedIn: postedGrp,
//         timestamp: timestamp.toISOString(), // Store the timestamp as an ISO string
//     };
//     storedPosts.unshift(newPost);
//     posts = storedPosts;
//     localStorage.setItem("postIdCounter", postIdCounter.toString());
//     localStorage.setItem("posts", JSON.stringify(storedPosts));

//     return newPost;
// }

// Function to delete a post
// function deletePost(postId) {
//     const postIndex = posts.findIndex(post => post.id === postId);
//     if (postIndex > -1) {
//         posts.splice(postIndex, 1);

//         // Remove the deleted post from likedPosts if it exists
//         const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];
//         const likedIndex = likedPosts.indexOf(postId);
//         if (likedIndex > -1) {
//             likedPosts.splice(likedIndex, 1);
//             localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
//         }

//         localStorage.setItem("posts", JSON.stringify(posts));
//         displayPosts();
//     }
// }


// function addComment(postId, comment) {
//     const post = posts.find(post => post.id === postId);
//     let userIn = findUser();
//     const timestamp = new Date();
//     if (post) {
//         const newComment = {
//             id: generateUniqueId(),
//             userId: userIn,
//             text: comment,
//             liked: false,
//             likes: 0,
//             replies: [],
//             timestamp: timestamp.toISOString(),
//             likedBy: [],
//         };
//         post.comments.push(newComment);
//         localStorage.setItem("posts", JSON.stringify(posts));
//         displayPosts();
//     }
// }


// function findCommentIndexById(postId, commentId) {
//     const post = posts.find(post => post.id === postId);
//     if (post) {
//         return post.comments.findIndex(comment => comment.id === commentId);
//     }
//     return -1; // Return -1 if the comment is not found
// }
// function findCommentById(postId, commentId) {
//     const post = posts.find(post => post.id === postId);
//     if (post) {
//         return post.comments.find(comment => comment.id === commentId);
//     }
//     return null; // Return null if the comment or post is not found
// }

// function addCommentToPost(postId) {
//     const commentInput = document.getElementById(`commentInput${postId}`);
//     const comment = commentInput.value;
//     if (comment) {
//         addComment(postId, comment);
//         commentInput.value = '';
//     } else {
//         // Handle empty comment field or show an error message
//     }
//     // commentInput.style.display = "none";
// }

// function toggleLikeComment(postId, commentId) {
//     const post = posts.find(post => post.id === postId);
//     if (post) {
//         const comment = post.comments.find(comment => comment.id === commentId);
//         if (comment) {
//             if (comment.likedBy.includes(findUser())) {
//                 // User has already liked the comment, so unlike it
//                 comment.likes--;
//                 // removeUserLikeComment(postId, commentId);
//                 comment.likedBy = comment.likedBy.filter(user => user !== findUser());
//             } else {
//                 // User has not liked the comment, so like it
//                 comment.likes++;
//                 // addUserLikeComment(postId, commentId);
//                 comment.likedBy.push(findUser());
//             }

//             // Update local storage
//             localStorage.setItem("posts", JSON.stringify(posts));

//             // Refresh the displayed posts
//             displayPosts();
//         }
//     }
// }


// function toggleLikeReply(postId, commentId, replyId) {
//     const post = posts.find(post => post.id === postId);
//     if (post) {
//         const comment = post.comments.find(comment => comment.id === commentId);
//         if (comment) {
//             const reply = comment.replies.find(reply => reply.id === replyId);
//             if (reply) {
//                 if (reply.likedBy.includes(findUser())) {
//                     // User has already liked the reply, so unlike it
//                     reply.likes--;
//                     // removeUserLikeReply(postId, commentId, replyId);
//                     reply.likedBy = reply.likedBy.filter(user => user !== findUser());
//                 } else {
//                     // User has not liked the reply, so like it
//                     reply.likes++;
//                     // addUserLikeReply(postId, commentId, replyId);
//                     reply.likedBy.push(findUser());
//                 }

//                 // Update local storage
//                 localStorage.setItem("posts", JSON.stringify(posts));

//                 // Refresh the displayed posts
//                 displayPosts();
//             }
//         }
//     }
// }


// Function to delete a comment by its ID within a specific post
// function deleteComment(postId, commentId) {
//     const post = posts.find(post => post.id === postId);
//     if (post) {
//         const commentIndex = post.comments.findIndex(comment => comment.id === commentId);
//         if (commentIndex > -1) {
//             post.comments.splice(commentIndex, 1);
//             localStorage.setItem("posts", JSON.stringify(posts));
//             displayPosts();
//         }
//     }
// }

// Function to delete a reply to a comment by its ID within a specific post and comment
// function deleteReply(postId, commentId, replyId) {
//     const post = posts.find(post => post.id === postId);
//     if (post) {
//         const comment = post.comments.find(comment => comment.id === commentId);
//         if (comment) {
//             const replyIndex = comment.replies.findIndex(reply => reply.id === replyId);
//             if (replyIndex > -1) {
//                 comment.replies.splice(replyIndex, 1);
//                 localStorage.setItem("posts", JSON.stringify(posts));
//                 displayPosts();
//             }
//         }
//     }
// }

// function addReplyToComment(postId, commentId, replyText) {
//     const post = posts.find(post => post.id === postId);
//     if (post && replyText) {
//         const comment = post.comments.find(comment => comment.id === commentId);
//         if (comment) {
//             let userIn = findUser();
//             const timestamp = new Date();
//             const replyId = generateUniqueId(); // You need to implement generateUniqueId
//             const newReply = {
//                 id: replyId,
//                 userId: userIn,
//                 text: replyText,
//                 liked: false,
//                 timestamp: timestamp.toISOString(),
//                 likes: 0,
//                 likedBy: [],
//             };
//             comment.replies.push(newReply);

//             // Update local storage
//             localStorage.setItem("posts", JSON.stringify(posts));

//             // Refresh the displayed posts
//             displayPosts();
//         }
//     }
// }




// function toggleLikePost(postId) {
//     var post = posts.find(post => post.id === postId);
//     var LikeIcon = document.getElementById("LikeIcon");
//     if (post) {
//         var likedByUser = hasUserLikedPost(postId);

//         if (post.likedBy.includes(findUser())) {
//             // User has already liked the post, so unlike it
//             post.likes--;
//             removeUserLike(postId);
//             post.likedBy = post.likedBy.filter(user => user !== findUser()); // Remove the user from likedBy array
//             // LikeIcon.style.color = "#33d17a";
//         } else {
//             // User has not liked the post, so like it
//             post.likes++;
//             addUserLike(postId);
//             post.likedBy.push(findUser()); // Add the user to likedBy array
//             // LikeIcon.style.color = "#33d17a";
//         }

//         localStorage.setItem("posts", JSON.stringify(posts));
//         displayPosts();
//     }
// }
//Liked class = fa-regular fa-thumbs-up




// Function to check if a post is liked by the user
// function hasUserLikedPost(postId) {
//     const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];
//     return likedPosts.includes(postId);
// }

// Function to add a like record for a post
// function addUserLike(postId) {
//     const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];
//     likedPosts.push(postId);
//     localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
// }

// Function to remove the user's like for a post
// function removeUserLike(postId) {
//     const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];
//     const index = likedPosts.indexOf(postId);
//     if (index !== -1) {
//         likedPosts.splice(index, 1);
//         localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
//     }
// }


function findUserNameById(userId) {
    let userObject = JSON.parse(localStorage.getItem("users"));
    for (let userIdKey in userObject) {
        if (userObject.hasOwnProperty(userIdKey)) {
            if (userObject[userIdKey].userId === userId) {
                return userObject[userIdKey].name;
            }
        }
    }
    return "404:Not Found"; // Return an empty string if the user is not found
}

function findGrpNameById(grpId) {
    let grpsObject = JSON.parse(localStorage.getItem("groups"));
    for (let grpIdKey in grpsObject) {
        if (grpsObject.hasOwnProperty(grpIdKey)) {
            // console.log(grpsObject[grpIdKey].id)
            if (grpsObject[grpIdKey].id == grpId) {
                return grpsObject[grpIdKey].name;
            }
        }
    }
    return "404:Not Found"; // Return an empty string if the user is not found
}

// function displayPosts() {
//     groupHTMLId = localStorage.getItem("groupHTMLId");
//     logoForNeworkWall = document.getElementById("logoForNeworkWall");
//     logoForNeworkWall.innerHTML = `${findGrpNameById(groupHTMLId).charAt(0).toUpperCase()}`
//     groupNameHTML = document.getElementById("groupNameHTML");
//     groupNameHTML.innerHTML = `${findGrpNameById(groupHTMLId)}`;

//     const postContainer = document.getElementById("postContainer");
//     postContainer.innerHTML = '';

//     const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
//     posts = storedPosts;


//     for (let i = 0; i < storedPosts.length; i++) {

//         const post = storedPosts[i];
//         let userId = post.postBy;
//         let userName = findUserNameById(userId);
//         // console.log(post.postedIn);
//         if (groupHTMLId == post.postedIn) {
//             // Assuming comment.timestamp is in ISO 8601 format


//             const timestampDateForPost = new Date(post.timestamp);

//             // Format the date and time in a user-friendly format
//             const optionsForPost = { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" };
//             const formattedTimestampForPost = timestampDateForPost.toLocaleDateString("en-IN", optionsForPost);

//             const postElement = document.createElement("div");

//             postElement.innerHTML = `
//             <div style="margin-bottom:25px;display: flex;justify-content:space-between">
//                 <div style ="display:flex;">
//                     <div class="profile-picture profile" id="userProfile" style ="background-color:${getColorForUser(userId)}">
//                         <div id="profile-letter" class="profile-letter">
//                             ${userName.charAt(0).toUpperCase()}
//                         </div>
//                     </div>
//                     <div>
//                         <span style ="color: #373737c4;font-size: 17px;"><span style ="font-weight :600;font-size:21px;color: #d83aa6;text-transform: capitalize;cursor:pointer" onclick = "userHTML(${userId})">${userName}</span> has started a conversation.</span></br>
//                         <span style ="font-size: 16px;color: gray;">${formattedTimestampForPost}</span>
//                     </div>
//                 </div>
                
//                 <div id="postDeleteBox${post.id}" class ="toggleForDeleteReal">
//                     <i class="fa-solid fa-ellipsis" onclick = "postDeleteButton(${post.id},postDeleteBox${post.id})"onblur = "postDeleteBtnBlur(${post.id},postDeleteBox${post.id})"></i>
//                     <button onclick="deletePost(${post.id})" id="deletePostBtn">Delete</button>
//                 </div>
                
//             </div>
//             <div style="margin-bottom:25px">
//                 <h3>${post.title}</h3>
//             </div>
//             <div style="margin-bottom:15px;font-size: 17px;font-weight: 100;color: #111;">
//                 <p style =" font-size: 18px;">${post.description}</p>
//             </div>
//             <div style ="margin-top: 40px;">
//                 <div style ="display:flex;gap:25px;">
    
//                     <span onclick="toggleLikePost(${post.id})" style="cursor:pointer;"><i class="fa-regular fa-thumbs-up " id ="LikeIcon${post.id}" style="color: ${post.likedBy.includes(findUser()) ? '#33d17a' : '#4e4e4e'}"></i> <span style = "font-size:17px">${post.likes}</span></span>
//                     <span id="Comment${post.id}" onclick = "goToComments(Comment${post.id},${post.id})" style="color:#505050;cursor:pointer;"><i class="fa-regular fa-comment" style="color: #77767b;"></i>Comments</span>
                    
//                 </div>
//                 <div style ="border-top: 1px solid #80808040;background-color: #f9f9f9;margin-top: 20px;">
//                     <ul>
//                         ${post.comments.map(comment => {
//                 const commentId = comment.id;
//                 const timestampDateForPost = new Date(comment.timestamp);
//                 // Format the date and time in a user-friendly format
//                 const optionsForPost = { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" };
//                 const formattedTimestampForPost = timestampDateForPost.toLocaleDateString("en-IN", optionsForPost);
//                 return `
//                             <li style="display:flex;border-bottom: solid 1px #80808075;margin: 10px 0px;">
//                                 <div style ="display:flex;">
                                    
//                                     <div class="profileForRepy">
//                                         <div class="profile-picture profileForRepy" id="userProfile" style ="background-color:${getColorForUser(comment.userId)}">
//                                             <div id="profile-letter" class="profile-letter">
//                                                 ${findUserNameById(comment.userId).charAt(0).toUpperCase()}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div style="width:100%;">
//                                     <div style="display: flex;justify-content: space-between;">
//                                         <span>
//                                             <span style ="font-weight :normal;font-size:21px;color: #d83aa6;text-transform: capitalize;cursor:pointer" onclick = "userHTML(${comment.userId})">
//                                                 ${findUserNameById(comment.userId)}
//                                             </span>
                                            
//                                         </span>
                                       
                                       
//                                         <div id="commentDeleteBox${post.id}${commentId}" class="toggleForDeleteReal">
//                                         ${comment.userId === findUser() ? `
//                                             <i class="fa-solid fa-ellipsis" onclick="postDeleteButton(${post.id}, commentDeleteBox${post.id}${commentId})"></i>
//                                             <button onclick="deleteComment(${post.id}, '${commentId}')" id="deletePostBtn">Delete</button>
//                                             ` : ''}
//                                             <!-- Check if the logged-in user is the author of the comment -->
                                            
//                                             <!-- Display the delete button only if the user is the author -->
//                                         </div>
    
//                                     </div>
//                                     <div style="font-size: 17px;">
//                                         ${comment.text}
//                                     </div>
                                    
//                                     <div style="margin-top: 18px;display: flex; align-items: center; gap: 5%;margin-bottom: 15px;padding-bottom: 20px;border-bottom: 1px solid #80808040;">
//                                         <span style ="font-size: 16px;color: gray;">${formattedTimestampForPost}</span>
//                                         <span onclick="toggleLikeComment(${post.id}, '${commentId}')" style="cursor:pointer;"><i class="fa-regular fa-thumbs-up " id ="LikeIcon${post.id}${commentId}" style="color: ${comment.likedBy.includes(findUser()) ? '#33d17a' : '#4e4e4e'}"></i> <span style = "font-size:17px">${comment.likes}</span></span>
//                                         <span style="color: #505050;cursor: pointer;font-size:17px" onclick="replytoCommentUIBox('replyInput${post.id}_${commentId}',${post.id}, '${commentId}')">
//                                             <i class="fa-regular fa-comment" style="color: #77767b;"></i><span>Reply</span>
//                                         </span>
//                                     </div>
//                                     <ul style="margin:0; background-color: #f2f2f2a1;"id="replyToCommentAppendBox${post.id}${commentId}">
//                                         ${comment.replies.map(reply => {
//                     const replyId = reply.id;
//                     const timestampDateForPost = new Date(reply.timestamp);

//                     // Format the date and time in a user-friendly format
//                     const optionsForPost = { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" };
//                     const formattedTimestampForPost = timestampDateForPost.toLocaleDateString("en-IN", optionsForPost);
//                     return `
//                                         <li style="display:flex;margin: 10px 0px;border-bottom: 1px solid #80808040;padding-bottom: 30px;">
//                                             <div style ="display:flex;">
//                                                 <div class="profileForRepy">
//                                                     <div class="profile-picture profileForRepy" id="userProfile" style ="background-color:${getColorForUser(reply.userId)}">
//                                                         <div id="profile-letter" class="profile-letter">
//                                                             ${findUserNameById(reply.userId).charAt(0).toUpperCase()}
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div style="width:100%">
//                                                 <div>
//                                                     <div style="display: flex;justify-content: space-between;">
//                                                         <span style="color: #373737c4;font-size: 17px;">
//                                                             <span style ="font-weight :normal;font-size:21px;color: #d83aa6;text-transform: capitalize;cursor:pointer"onclick = "userHTML(${comment.userId})">
//                                                                 ${findUserNameById(reply.userId)} 
//                                                             </span>   
//                                                             replied to <span onclick = "userHTML(${comment.userId})"style ="text-transform: capitalize;cursor:pointer">${findUserNameById(comment.userId)}</span>
//                                                         </span>
//                                                         <div id="replyDeleteBox${post.id}${commentId}${replyId}" class="toggleForDeleteReal">
//                                                             <!-- Check if the logged-in user is the author of the reply -->
//                                                             <!-- Display the delete button only if the user is the author -->
//                                                             ${reply.userId === findUser() ? `
//                                                             <i class="fa-solid fa-ellipsis" onclick="postDeleteButton(${post.id}, replyDeleteBox${post.id}${commentId}${replyId})"></i>
//                                                             <button onclick="deleteReply(${post.id}, '${commentId}', '${replyId}')" id="deletePostBtn">Delete</button>
//                                                         ` : ''}
//                                                         </div>
                                                        
//                                                     </div>
//                                                 </div>
//                                                 <div style="font-size: 17px;">
//                                                     ${reply.text}
//                                                 </div>
//                                                 <div style="display: flex; gap: 20px; align-items: last baseline;">
//                                                     <span style="font-size: 16px;color: gray;">${formattedTimestampForPost}</span>
//                                                     <span onclick="toggleLikeReply(${post.id}, '${commentId}', '${replyId}')" style="cursor:pointer;"><i class="fa-regular fa-thumbs-up " id ="LikeIcon${post.id}${commentId}${replyId}" style="color: ${reply.likedBy.includes(findUser()) ? '#33d17a' : '#4e4e4e'}"></i> <span style = "font-size:17px">${reply.likes}</span></span>
//                                                 </div>
//                                             </div>
//                                         </li>
//                                 `;
//                 }).join('')}
//                                     </ul>
//                                 </div>
//                             </li>
//                         `;
//             }).join('')}
//                     </ul>
    
//                 </div>
//                 <div style="display:flex;align-items: center;">
//                         <div class="profileForRepy"></div>
//                         <div style="width:85%">
//                             <textarea  class="commentTextArea" id="commentInput${post.id}" placeholder="Add a comment" oninput = "commentBoxResize(this)" ></textarea>
                            
//                         </div>
                        
//                     </div>
//                 <button onclick="addCommentToPost(${post.id})"id="addCommentBtn">Comment</button>
//             </div>  `;
//             postElement.id = `postContainerBox`;
//             postContainer.appendChild(postElement);

//             if (post.postBy != findUser()) {
//                 document.getElementById(`postDeleteBox${post.id}`).remove()
//             }
//             // document.getElementById(`commentBox${post.id}`)
//         }
//     }
// }

function userHTML(userID) {
    console.log("HELLO")
    localStorage.setItem("UserHTMLID", userID);
    window.location.href = `user.html`;
}

// var replyToCommentBox = document.createElement("div");
// function replytoCommentUIBox(replyTextArea, postID, commentId, ReplyValue) {
//     replyToCommentBox.style.margin = `40px 10px`
//     // <textarea class="replyTextArea" id="replyInput${postID}_${commentId}" placeholder="Add a reply"></textarea>
//     // <button onclick="addReplyToComment(${postID}, '${commentId}', document.getElementById('replyInput${postID}_${commentId}').value)">Reply</button>
//     replyToCommentBox.innerHTML = `
//     <div style="display:flex;align-items: center;">
//         <div class="profileForRepy"></div>
//         <div style="width:85%">
//             <textarea class="replyTextArea" id="replyInput${postID}_${commentId}" placeholder="Add a reply"></textarea>
//         </div>
//     </div>
//     <button onclick="addReplyToComment(${postID}, '${commentId}', document.getElementById('replyInput${postID}_${commentId}').value)" class="ReplyBtn">Reply</button>`
//     document.getElementById(`replyToCommentAppendBox${postID}${commentId}`).after(replyToCommentBox)
// }

function getColorForUser(userId) {
    const colors = [
        "#E57373", "#81C784", "#64B5F6", "#FFD54F", "#FFAB91",
        "#A1887F", "#FF8A65", "#90A4AE", "#C5E1A5", "#FFCE76"
    ];
    const index = userId % colors.length;
    return colors[index];
}

// Function to add a comment to a post

function generateUniqueId() {
    return Date.now() + Math.random().toString(36).substr(2, 9);
}
// var usernameProfile;
// Load and display posts when the page loads
window.addEventListener("load", () => {
    let userIn = localStorage.getItem("sessionToken");
    if (!userIn) {
        window.location.href = `index.html`
    }
    else {
        usernameProfile = JSON.parse(localStorage.getItem(userIn)).name.charAt(0).toUpperCase();
        // document.getElementById("profile-letter").textContent = usernameProfile;
        // document.getElementById("userProfile").style.backgroundColor = `${getColorForUser(JSON.parse(localStorage.getItem(userIn)).userId)}`;
        displayGroups();
        // displayPosts();

    }

});


// window.addEventListener("load",()=>{
//     var editGroupBox = document.getElementById("editGroupBox");
//     editGroupBox.addEventListener("click",()=>{
//         window.location.href = `editGroups.html`
//     })
// })





// var puttingPostBox = document.getElementById("CreatePostContainer");
// var postBox = document.getElementById("postBox");
// var WhatsOnMindText = document.getElementById("WhatsOnMindText");
// var cancelPostBtn = document.getElementById("cancelPostBtn");

// Create a copy of WhatsOnMindText
// var WhatsOnMindTextCopy = WhatsOnMindText.cloneNode(true);

// puttingPostBox.addEventListener("click", (event) => {
//     // Check if the click event target is not the cancel button
//     if (event.target !== cancelPostBtn) {
//         // Check if WhatsOnMindTextCopy is not null and remove it
//         if (WhatsOnMindTextCopy) {
//             WhatsOnMindTextCopy.remove();
//             WhatsOnMindTextCopy = null; // Reset the copy
//         }
//         // puttingPostBox.classList.remove("cancelClass")
//         // puttingPostBox.className = "puttingPostBoxClass";
//         puttingPostBox.style.minHeight = "30vh";
//         puttingPostBox.style.height = "auto";
//         postBox.style.marginTop = "-20px";
//         WhatsOnMindText.remove();
//     }
// });

// cancelPostBtn.addEventListener("click", (event) => {
//     // Prevent the click event from propagating to the parent puttingPostBox
//     event.stopPropagation();
//     puttingPostBox.style.minHeight = "0";
//     puttingPostBox.style.height = "55px";
//     postBox.style.marginTop = "0";
//     // Create a new copy of WhatsOnMindText and append it
//     WhatsOnMindTextCopy = WhatsOnMindText.cloneNode(true);
//     // Append the copy of WhatsOnMindText back
//     document.getElementById("CreatePostContainerPlaceHolder").appendChild(WhatsOnMindTextCopy);
// });


// document.getElementById("createPostBtn").addEventListener("click", () => {
//     event.stopPropagation();
//     const title = document.getElementById("postTitle").value;
//     const description = document.getElementById("postDescription").innerHTML;
//     const groupSelect = localStorage.getItem("groupHTMLId");

//     if (title && description && groupSelect) {
//         puttingPostBox.style.minHeight = "0";
//         puttingPostBox.style.height = "55px";
//         postBox.style.marginTop = "0";
//         WhatsOnMindTextCopy = WhatsOnMindText.cloneNode(true);
//         document.getElementById("CreatePostContainerPlaceHolder").appendChild(WhatsOnMindTextCopy);
//         const newPost = createPost(title, description, groupSelect);
//         displayPosts(); // Refresh the displayed posts
//         document.getElementById("postTitle").value = "";
//         document.getElementById("postDescription").innerHTML = "";


//     } else {
//         // Handle empty fields or show an error message
//     }
// });

function displayPostsByGroup(GroupId) {
    localStorage.setItem("groupHTMLId", GroupId);
    window.location.href = `groups.html`;
}


// var postDescription = document.getElementById('postDescription');

// postDescription.addEventListener('input', function () {
//     this.style.height = 'auto';
//     this.style.height = (this.scrollHeight) + 'px';
// });

// function commentBoxResize(theCommentBox) {
//     theCommentBox.style.height = "auto";
//     theCommentBox.style.height = (theCommentBox.scrollHeight) + 'px';
// }

// function goToComments(idGiven, idfor) {
//     const commentInput = document.getElementById(`commentInput${idfor}`);
//     commentInput.focus(); // Focus on the input element
//     commentInput.scrollIntoView({ behavior: "smooth", block: "center" });
// }

// function postDeleteButton(postId, DivId) {
//     DivId.classList.toggle("toggleForDeleteReal");
//     DivId.classList.toggle("toggleForDeleteChanged");
// }

// // Add an event listener to the select element
// document.getElementById("sortPosts").addEventListener("change", function () {
//     const selectedValue = this.value;
//     var postContainer = document.getElementById("postContainer");
//     // Implement your sorting logic here based on the selected value (newest or oldest)
//     if (selectedValue === "newest") {
//         postContainer.style.flexDirection = `column`
//     } else if (selectedValue === "oldest") {
//         postContainer.style.flexDirection = `column-reverse`
//     }

//     // Call the function to display posts (you may need to modify it)
//     displayPosts();
// });


users = JSON.parse(localStorage.getItem("users"));

function createGroup(groupName, description) {
    groups = JSON.parse(localStorage.getItem("groups")) || [];
    const newGroup = {
        id: groupIdCounter++,
        name: groupName,
        description: description,
        members: [findUser()], // Add the creator as the first member
        admin: [findUser()],
        posts: [],
    };

    groups.unshift(newGroup);
    localStorage.setItem("groupIdCounter", groupIdCounter.toString());
    localStorage.setItem("groups", JSON.stringify(groups));

    return newGroup;
}

function findGroupNameById(id) {
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    for (let i = 0; i < storedGroups.length; i++) {
        if (storedGroups[i].id == id) {
            return storedGroups[i].name;
        }
    }
    // Return null or an appropriate value when the group is not found
    return "Not Found";
}

function addUserToGroup(userId, groupId) {
    const groupsData = JSON.parse(localStorage.getItem("groups")) || {};
    const usersData = JSON.parse(localStorage.getItem("users")) || {};

    // Find group by id
    const group = groupsData.find(group => group.id == groupId);
    email = finduserMailById(userId);
    console.log(group)
    // Check if group and user exist
    if (group && userId) {
        // Check if user is not already a member of the group
        if (!group.members.includes(userId)) {
            group.members.push(userId.toString());
            usersData[email].groups.push(groupId);

            // Update user and group data in local storage
            localStorage.setItem("users", JSON.stringify(usersData));
            localStorage.setItem("groups", JSON.stringify(groupsData));
        } else {
            console.log("User is already a member of the group.");
        }
    } else {
        console.log("Invalid user or group ID.");
    }
}

function createGrp() {
    var PostCopy = document.getElementById("myFeedsContentContainer").cloneNode(true);
    document.getElementById("myFeedsContentContainer").remove();
    var creatingGrpHTML = `
<section id="signinPageContainer" style="height:100%;width:100%">
    <div id="signInPageBoxContainer" style="width:696px;">
        <div id="signInPageBox" style="width:100%">
            <div id="signInPageBoxHeader">
                <form name="login" id="login">
                    <div class="signin_head">
                        <span id="headtitle">Create Group</span>
                    </div>
                    <div>
                        <div id="login_id_container">
                            <div class="textbox_div" id="">
                                <input id="grpNameInput" placeholder="Group Name" type="text"
                                class="textbox" required onkeypress="" onkeyup="" autocomplete="off"
                                onkeydown="" style="resize: none;">
                            </div>
                        </div>
                        <div class="getpassword zeroheight" id="password_container">
                            <div class="textbox_div">
                                <textarea  id="grpDescriptionInput" placeholder="Description"type="text"
                                class="textbox postDescription2" required onkeypress=""autocapitalize="off"></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn blue" id="createGrpBtn">Create Group</button>
                </form>
            </div>
        </div>
    </div>
</section>`

    // onclick = "createGroup(${document.getElementById("grpNameInput")}.value,${document.getElementById("grpDescriptionInput")}.value)"
    document.getElementById("homeContentContainer").innerHTML = creatingGrpHTML
    document.getElementById("createGrpBtn").addEventListener("click", () => {
        createGroup(document.getElementById("grpNameInput").value, document.getElementById("grpDescriptionInput").value)
    })
    // document.getElementById("homeContentContainer").appendChild(PostCopy)
}



function displayGroups() {

    const leftGroupsMenuCont = document.getElementById("leftGroupsMenuCont");
    leftGroupsMenuCont.innerHTML = '';

    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    groups = storedGroups;
    for (let i = 0; i < storedGroups.length; i++) {
        const group = storedGroups[i];
        const groupId = group.id;


        const groupElement = document.createElement("li");
        groupElement.className = "groupNames";

        groupElement.innerHTML = `
            <a class="avatar zc-light group-colorBg4" style="font-size: 17px;cursor:pointer" onclick="displayPostsByGroup(${groupId})">
                <span>
                    ${group.name.charAt(0).toUpperCase()}
                </span>
            </a>
            <a onclick="displayPostsByGroup(${groupId})" style = "cursor:pointer">
                ${group.name}
            </a>
        `;

        leftGroupsMenuCont.appendChild(groupElement);
        if (localStorage.getItem("groupHTMLId") == groupId) {
            groupElement.style.borderRadius = `8px`;
            groupElement.style.backgroundColor = `rgba(255, 255, 255, 0.08)`;
        }
        //         border-radius: 8px;
        //   background-color: rgba(255, 255, 255, 0.08);
    }
}

function getRandomLightColor() {
    const min = 200; // Minimum RGB value for a light color
    const max = 255; // Maximum RGB value

    const r = Math.floor(Math.random() * (max - min + 1)) + min;
    const g = Math.floor(Math.random() * (max - min + 1)) + min;
    const b = Math.floor(Math.random() * (max - min + 1)) + min;

    return `rgb(${r}, ${g}, ${b})`;
}

// Example usage:
const randomLightColor = getRandomLightColor();
document.getElementById("logoForNeworkWall").style.backgroundColor = `${getRandomLightColor()}`




document.addEventListener("DOMContentLoaded", function () {
    var dropdownContainer = document.querySelector('.dropdown-container');
    var dropdownButton = dropdownContainer.querySelector('.dropdown-button');
    var dropdownList = dropdownContainer.querySelector('.dropdown-list');
    var dropdownSearch = dropdownContainer.querySelector('.dropdown-search');
    var stateList = dropdownList.querySelector('ul');
    var quantitySpan = dropdownContainer.querySelector('.quantity');

    // Function to toggle the dropdown list
    dropdownButton.addEventListener("click", function () {
        if (dropdownList.style.display === 'none' || dropdownList.style.display === '') {
            dropdownList.style.display = 'block';
            dropdownList.style.height = '100%';
        } else {
            dropdownList.style.display = 'none';
            dropdownList.style.height = '0';
        }
    });

    // Function to filter states based on search input
    dropdownSearch.addEventListener("input", function () {
        var search = dropdownSearch.value.trim().toLowerCase();
        var stateItems = stateList.querySelectorAll('li');

        if (!search) {
            stateItems.forEach(function (item) {
                item.style.display = 'block';
            });
            return;
        }

        stateItems.forEach(function (item) {
            var text = item.textContent.trim().toLowerCase();
            var match = text.indexOf(search) > -1;
            item.style.display = match ? 'block' : 'none';
           
        });
    });

    // Function to update the quantity label based on checkbox selections
    stateList.addEventListener("change", function () {
        var numChecked = stateList.querySelectorAll('[type="checkbox"]:checked').length;
        quantitySpan.textContent = numChecked || 'Any';
    });
    console.log(Object.keys(JSON.parse(localStorage.getItem("users"))))
    var usStates = [...(Object.keys(JSON.parse(localStorage.getItem("users"))))];

    // Populate list with states
    usStates.forEach(function (userFind) {
        // userFind = userFind.toLowerCase();
        var stateItem = document.createElement('li');
        stateItem.style.display = `flex`;
        stateItem.style.margin = `25px`;
        stateItem.style.fontSize = `17px`;
        stateItem.style.gap = `20px`
        stateItem.innerHTML = '<input type="checkbox">' +
            '<label>' + userFind + '</label>';
        stateList.appendChild(stateItem);
    });
    // Function to handle submit button click
    var submitButton = dropdownContainer.querySelector('#submit-button');
    submitButton.addEventListener("click", function () {
        var selectedValues = [];
        var stateCheckboxes = stateList.querySelectorAll('[type="checkbox"]:checked');

        stateCheckboxes.forEach(function (checkbox) {
            selectedValues.push(checkbox.nextElementSibling.textContent.trim());
        });

        // You now have the selected values in the `selectedValues` array
        console.log("Selected Values:", selectedValues);
    });
});


