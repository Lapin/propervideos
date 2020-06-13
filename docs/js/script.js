let upNext, excludeFrom;
let archive = [];

function fetchReadMe() {
  fetch("https://raw.githubusercontent.com/Lapin/properVideos/master/README.md")
    .then((response) => response.text())
    .then((data) => {
      var converter = new showdown.Converter({strikethrough: true}),
        html = converter.makeHtml(data);
      document.querySelector(".fetchreadme").innerHTML = html;
    });
}

function fetchArchive() {
  fetch("./js/archive.json")
    .then((response) => response.json())
    .then((data) => {
      archive = data;
    })
    .then(randomiser)
    .then(setUpDOM)
    .then(createPlayer)
    .then(loadVideo);
}

fetchReadMe();

fetchArchive();
// == Randomiser ==

function randomiser() {
  upNext = archive[Math.floor(Math.random() * archive.length)];
}



// == DOM Setup ==


function setUpDOM() {
  document
    .getElementById("player")
    .setAttribute("data-plyr-provider", upNext.provider);
  document
    .getElementById("player")
    .setAttribute("data-plyr-embed-id", upNext.id);
  renameTitles();
}

function renameTitles() {
  let titles = document.getElementsByClassName("videoTitle");
  Array.prototype.forEach.call(titles, function (element) {
    element.innerHTML = upNext.title;
  });
}


function createPlayer() {
  // == Plyr JS ==
  const player = new Plyr("#player", {
    // muted: true,
    autoplay: true,
    debug: true
  });
  // Expose
  window.player = player;
  player.on("ended", (event) => {
    shuffler();
  });
}

function shuffler() {
  randomiser();
  renameTitles();
  loadVideo();
}

function loadVideo() {
  player.source = {
    type: "video",
    sources: [
      {
        src: upNext.id,
        provider: upNext.provider,
      },
    ],
  };

  player.play();
}

function openNav() {
  document.getElementById("sideBar").style.right = "0";
  document.getElementById("main").style.marginRight = "30%";
  document.getElementById("toggleDrawer").setAttribute("onClick", "closeNav()");
}

function closeNav() {
  document.getElementById("sideBar").style.right = "-30%";
  document.getElementById("main").style.marginRight = "0";
  document.getElementById("toggleDrawer").setAttribute("onClick", "openNav()");
}

// function patates() {
//   document.getElementById('descriptionBox').classList.toggle("hidden")
//   degistir = document.getElementById('descriptionToggle').innerHTML
//   if (degistir === 'Description +'){
//   document.getElementById('descriptionToggle').innerHTML = 'Description -'
//   } else {
//   document.getElementById('descriptionToggle').innerHTML = 'Description +'
//   }
// }

function turnOffLights() {
  document.getElementById("quickBar").classList.toggle("bg-gray-800");
  document.getElementById("quickBar").classList.toggle("border-gray-700");
  document.getElementById("quickBar").classList.toggle("text-gray-700");
}

var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
