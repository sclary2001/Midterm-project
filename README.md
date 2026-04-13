# Midterm-Project
Marval-Movie-Finder 
# Marvel Movie Finder

A front-end web app that allows users to search, filter, and explore Marvel movies with a clean, responsive interface.

---

## Authorship & Attribution

Created by **Sean Clary**

Libraries & tools used:

* Bootstrap 5 (layout and components)
* Normalize.css (cross-browser consistency)
* Font Awesome (icons)

Data:

* Marvel movie data stored locally in JavaScript

Design inspiration:

* Netflix (dark theme, grid layout, movie cards)

---

## Tagline

"Find your favorite Marvel movies instantly."

---

## User Story

As a Marvel fan,
I want to search and filter movies,
so that I can quickly find movies I want to watch.

---

## Links

* Repository: https://github.com/sclary2001/marvel-movie-finder
* Live App: https://sclary2001.github.io/marvel-movie-finder

Tested on:

* Desktop ✅
* Mobile ✅

---

## Design Inspiration

See screenshot: `docs/netflix-inspiration.png`

This project was inspired by Netflix’s interface.

What I modeled:

* Dark theme UI
* Grid-based movie layout
* Card-style presentation

What I improved:

* Added search functionality
* Added category filtering
* Added sorting feature
* Simplified layout using Bootstrap

---

## Code Example

```js
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
}
```

---

## Explanation (DOM → Script → DOM)

The user interacts with the search input or filter dropdown (DOM).
JavaScript listens for these events using event listeners.
When triggered, the script filters and sorts the movie data array.
The updated data is then rendered back into the DOM using the `displayMovies()` function.

---

## Architecture / Infrastructure

* Front-end only web application
* Uses local JavaScript array as data source
* Uses sessionStorage to manage login state
* Organized into separate HTML, CSS, and JS files
* Responsive design using Bootstrap

---

## Verification

* Tested on desktop and mobile screen sizes
* Login and logout functionality works
* Session data persists during page session
* Search, filter, and sort work together correctly
* No major layout or functionality issues

---

## Grader

Barry Cumbie
CIS 376 – Front-End Web Development
Midterm Project – Spring 2026



