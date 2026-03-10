document.addEventListener("DOMContentLoaded", () => {

console.log("App started")

let movies=[]

const movieContainer=document.getElementById("movieContainer")

fetch("data/movies.json")
.then(res=>res.json())
.then(data=>{
movies=data
displayMovies(movies)
})

function displayMovies(list){

movieContainer.innerHTML=""

list.forEach(movie=>{

const div=document.createElement("div")
div.className="col-md-4"

div.innerHTML=`
<div class="card bg-dark text-white p-3">
<h5>${movie.title}</h5>
<p>${movie.category}</p>
<p>${movie.year}</p>
</div>
`

movieContainer.appendChild(div)

})

}

document.getElementById("searchInput").addEventListener("input",e=>{

const value=e.target.value.toLowerCase()

console.log("Search:",value)

const filtered=movies.filter(m=>
m.title.toLowerCase().includes(value)
)

displayMovies(filtered)

})

document.getElementById("filterSelect").addEventListener("change",e=>{

const category=e.target.value

if(category==="all"){
displayMovies(movies)
return
}

const filtered=movies.filter(m=>m.category===category)

displayMovies(filtered)

})

document.getElementById("sortBtn").addEventListener("click",()=>{

const sorted=[...movies].sort((a,b)=>
a.title.localeCompare(b.title)
)

displayMovies(sorted)

})

document.getElementById("loginBtn").addEventListener("click",()=>{

const user=document.getElementById("username").value
const pass=document.getElementById("password").value

if(pass==="marvel123"){

console.log("Login success")

sessionStorage.setItem("user",user)

alert("Login successful")

}else{

console.log("Login failed")

alert("Wrong password")

}

})

document.getElementById("logoutBtn").addEventListener("click",()=>{

sessionStorage.clear()

console.log("Session cleared")

alert("Logged out")

})

})
