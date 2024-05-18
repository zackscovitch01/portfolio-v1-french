const projects = [
  {
    img: "./assets/projects-demos/portfolio-v1.png",
    title: "Personal Website v1",
    tags: ["Html", "Css", "Javascript"],
    website: "https://v1-moubarack-bagoudou.netlify.app/",
  },
];

const navBtn = document.querySelector(".nav-btn");
const menu = document.querySelector(".links");
const navBar = document.querySelector(".navbar");
const techImgs = document.querySelectorAll(".tech-img");
const hero = document.querySelector(".header-img");
const projectsContainer = document.querySelector(".projects-container");
const contactBtn = document.querySelector(".contact-btn");
const btnLink = document.querySelector(".btn-link");
const year = document.querySelector("#year");

navBtn.addEventListener("click", function () {
  if (menu.classList.contains("hide-navbar")) {
    menu.classList.remove("hide-navbar");
    menu.classList.add("show-navbar");
  } else if (menu.classList.contains("show-navbar")) {
    menu.classList.remove("show-navbar");
    menu.classList.add("hide-navbar");
  }
});

// Change nav color past a certain scroll position
document.addEventListener("scroll", function () {
  if (window.scrollY > hero.getBoundingClientRect().height - 50) {
    navBar.classList.add("sticking");
  } else if (window.scrollY <= 50) {
    navBar.classList.remove("sticking");
  }
});

window.addEventListener("DOMContentLoaded", function () {
  displayProjects(projects);
});

function displayProjects(projectItem) {
  let projectsHTML = projectItem.map(function (project) {
    return `<article class="project">
          <a href="${project.website}"><div class="main-project-container">
            <img class="img" src="${project.img}" alt="">
            <i class="fas fa-search-plus"></i>
            <p class="project-title">${project.title}</p>
          </div></a>
          <div class="tags">
            <button class="tag-btn">${project.tags[0]}</button>
            <button class="tag-btn">${project.tags[1]}</button>
            <button class="tag-btn">${project.tags[2]}</button>
          </div>
        </article>`;
  });
  projectsHTML = projectsHTML.join("");

  projectsContainer.innerHTML = projectsHTML;
}

// Contact Button
contactBtn.addEventListener("click", function () {
  btnLink.href =
    "mailto:bagoudoumoubarack@icloud.com?subject={Company%20Name}%20Job%20Interview&body=message%20goes%20here";
});

// Return current year
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

year.textContent = currentYear;

// close navbar on click
menu.addEventListener("click", function () {
  menu.classList.add("hide-navbar");
});
