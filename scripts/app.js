document.addEventListener("DOMContentLoaded", () => {

console.log("App started");

let movies = [
{title:"Iron Man",category:"Avengers",year:2008},
{title:"Thor",category:"Avengers",year:2011},
{title:"Guardians of the Galaxy",category:"Guardians",year:2014},
{title:"Spider-Man: Homecoming",category:"Spider-Man",year:2017},
{title:"Black Panther",category:"Other",year:2018}
];

const container = document.getElementById("movieContainer");

function displayMovies(list) {
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p>No movies found</p>";
    return;
  }

  list.forEach(movie => {
    const div = document.createElement("div");
    div.className = "col-md-4";

    div.innerHTML = `
      <div class="card bg-dark text-white p-3">
        <h5>${movie.title}</h5>
        <p>${movie.category}</p>
        <p>${movie.year}</p>
      </div>
    `;

    container.appendChild(div);
  });
}

function updateMovies() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("filterSelect").value;

  let result = [...movies];

  if (search) {
    result = result.filter(m =>
      m.title.toLowerCase().includes(search)
    );
  }

  if (category !== "all") {
    result = result.filter(m => m.category === category);
  }

  result.sort((a, b) => a.title.localeCompare(b.title));

  displayMovies(result);

  console.log("Updated movies:", result);
}

function updateUI() {
  const user = sessionStorage.getItem("user");

  const loginSection = document.getElementById("loginSection");
  const logoutBtn = document.getElementById("logoutBtn");

  if (user) {
    loginSection.style.display = "none";
    logoutBtn.style.display = "inline-block";
    document.getElementById("sessionInfo").textContent = "Logged in as: " + user;
  } else {
    loginSection.style.display = "block";
    logoutBtn.style.display = "none";
    document.getElementById("sessionInfo").textContent = "";
  }
}

displayMovies(movies);
updateUI();

document.getElementById("searchInput").addEventListener("input", updateMovies);
document.getElementById("filterSelect").addEventListener("change", updateMovies);
document.getElementById("sortBtn").addEventListener("click", updateMovies);

document.getElementById("loginBtn").addEventListener("click", () => {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  console.log("Attempt login:", user);

  if (pass === "marvel123") {
    console.log("Login success");
    sessionStorage.setItem("user", user);
    alert("Login successful");
  } else {
    console.log("Login failed");
    alert("Wrong password");
  }

  updateUI();
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  sessionStorage.clear();
  console.log("Logged out");
  alert("Logged out");
  updateUI();
});

});
