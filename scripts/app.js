document.addEventListener("DOMContentLoaded", () => {
  loadSession();
});


// LOAD SESSION ON PAGE START
function loadSession() {
  if (sessionStorage.getItem("loggedIn") === "true") {
    const user = sessionStorage.getItem("username");

    document.getElementById("loginStatus").innerText =
      "Logged in as " + user;

    console.log("Session restored:", user);
  } else {
    document.getElementById("loginStatus").innerText =
      "Not logged in";
  }
}


// LOGIN FUNCTION
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log("Login attempt:", username);

  if (username === "sclary2001" && password === "SpiderM@n") {
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("username", username);

    document.getElementById("loginStatus").innerText =
      "Logged in as " + username;

    console.log("Login success");

    alert("Login successful!");
  } else {
    console.log("Login failed");
    alert("Incorrect username or password");
  }
}


// LOGOUT FUNCTION
function logout() {
  sessionStorage.clear();

  document.getElementById("loginStatus").innerText =
    "Not logged in";

  console.log("User logged out");

  alert("Logged out successfully");
}
