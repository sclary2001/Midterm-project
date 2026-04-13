let movies = [];

/* =========================
   APP INIT
========================= */
document.addEventListener("DOMContentLoaded", () => {
  loadMovies();
  initEvents();
  loadSession();
});

/* =========================
   LOAD MOVIES (JSON)
========================= */
async function loadMovies() {
  try {
    const res = await fetch("./data/movies.json");
    movies = await res.json();

    console.log("Movies loaded:", movies.length);

    displayMovies(movies);
  } catch (err) {
    console.error("Error loading movies:", err);
  }
}

/* =========================
   EVENT LISTENERS
========================= */
function initEvents() {
  document.getElementById("searchInput").addEventListener("input", updateMovies);
  document.getElementById("filterSelect").addEventListener("change", updateMovies);
}

/* =========================
   SEARCH + FILTER + SORT
========================= */
function updateMovies() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("filterSelect").value;

  let result = [...movies];

  // SEARCH ALL MARVEL MOVIES
  if (search) {
    result = result.filter(movie =>
      movie.title.toLowerCase().includes(search)
    );
  }

  // CATEGORY FILTER
  if (category !== "all") {
    result = result.filter(movie => movie.category === category);
  }

  console.log("Results:", result.length);

  displayMovies(result);
}

/* =========================
   DISPLAY MOVIES (UI RENDER)
========================= */
function displayMovies(list) {
  const container = document.getElementById("movieContainer");

  container.innerHTML = "";

  list.forEach(movie => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="card p-2">
          <h5 class="card-title">${movie.title}</h5>
          <p>${movie.category}</p>
          <p>${movie.year}</p>
        </div>
      </div>
    `;
  });
}

/* =========================
   LOGIN
========================= */
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

/* =========================
   LOGOUT (RESET EVERYTHING)
========================= */
function logout() {
  sessionStorage.clear();

  document.getElementById("loginStatus").innerText = "Not logged in";

  // RESET INPUT FIELDS (IMPORTANT REQUIREMENT)
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("searchInput").value = "";
  document.getElementById("filterSelect").value = "all";

  console.log("User logged out + reset all fields");

  displayMovies(movies);

  alert("Logged out successfully");
}

/* =========================
   SESSION RESTORE
========================= */
function loadSession() {
  if (sessionStorage.getItem("loggedIn") === "true") {
    const user = sessionStorage.getItem("username");

    document.getElementById("loginStatus").innerText =
      "Logged in as " + user;

    console.log("Session restored:", user);
  }
}
