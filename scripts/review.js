document.getElementById("lastModified").textContent = document.lastModified;

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const postCounter = document.querySelector("#counterBox");

let numPosts = Number(window.localStorage.getItem("numPosts-ls")) || 0;

if (numPosts !==0) {
    postCounter.textContent = 'Posts: ' + numPosts;
}

else{
    postCounter.textContent = 'This is your first post!';
}

numPosts++;
localStorage.setItem("numPosts-ls", numPosts);