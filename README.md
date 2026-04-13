
# Marvel Movie Finder

## Authorship & Attribution
Created by Sean Clary

### Tools & Libraries Used
- Bootstrap 5 (layout and responsive design)
- Normalize.css (cross-browser consistency)
- Font Awesome (icons)

### Data Source
- Local JavaScript movie dataset (no external API)

---

## Tagline
"Find your favorite Marvel movies instantly."

---

## User Story
As a Marvel fan, I want to search and filter Marvel movies so that I can quickly explore the MCU timeline.

---

## Links
- GitHub Repository: https://github.com/sclary2001/Midterm-Project
- Live App (GitHub Pages): https://sclary2001.github.io/Midterm-Project/
- Tested on: Desktop + Mobile

---

## Design Inspiration
This project was inspired by Netflix’s interface design.

### Key UI inspiration:
- Dark theme styling
- Card-based movie grid layout
- Clean browsing interface

### Screenshot Evidence:
Located in GitHub:
`/docs/netflix-inspiration.png`

(Required for grading: must exist in repo under docs folder)

---

## Model / Inspiration Evidence
This project was modeled after Netflix-style browsing UI.

### What was inspired:
- Grid layout for movie display
- Dark UI theme
- Card-based content presentation

### Improvements made:
- Added search functionality
- Added category filtering
- Added sorting (A–Z)
- Simplified layout using Bootstrap grid system
- Improved user interaction and filtering logic

---

## Code Example (DOM → JS → DOM Flow)

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



