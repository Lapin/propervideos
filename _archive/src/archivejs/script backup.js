// == Video Catalogue == 
function videoCatalogue(provider, id, category, title, descrtiption) {
  this.provider = provider;
  this.id = id;
  this.category = category;
  this.title = title;
  this.descrtiption = descrtiption;
};

let vid1 = new videoCatalogue('youtube', 'RYpqE0_VpWA', 'Music', 'Ratatat - Party With Children', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus, vel quos quas dolor soluta.');
let vid2 = new videoCatalogue('youtube', '97KfDhJdOKI', 'Music', 'Ratatat - Neckbrace', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus, vel quos quas dolor soluta.');
let vid3 = new videoCatalogue('vimeo', '420049165', 'Music', 'Boy I Never Knew', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus, vel quos quas dolor soluta.');
let vid4 = new videoCatalogue('vimeo', '320480032', 'Music', 'Learning Cinema4d', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus, vel quos quas dolor soluta.');

let allEntries = [vid1, vid2, vid3, vid4];

// Global Variables
var upNext

// getArchive = fetch('./js/archive.json').then(response => response.json()).then( data => {
//   archive = data;
// });

fetchArchive = fetch('./js/archive.json').then(response => response.json()).then(data => { fetchArchive = data; });

// == Randomiser ==
function randomiser() {
  picked = fetchArchive[Math.floor(Math.random()*fetchArchive.length)]
  return upNext = picked;
}

function setUpDOM() {
  document.getElementById('player').setAttribute('data-plyr-provider', upNext.provider)
  document.getElementById('player').setAttribute('data-plyr-embed-id', upNext.id)
  var titles = document.getElementsByClassName('videoTitle');
  Array.prototype.forEach.call(titles, function(element) {
    element.innerHTML = upNext.title;
  });
}

randomiser();
setUpDOM();

document.addEventListener('DOMContentLoaded', () => { 
  // == Plyr JS ==
  
  const player = new Plyr('#player', {
    muted: true,
    // autoplay: true,
    // debug: true
  }); 
  // Expose
  window.player = player;

  player.on('ended', event => {
    shuffler()
  });
  
});




function shuffler() {
  randomiser()
  loadVideo()
}

function loadVideo() {
  player.source = {
      type: 'video',
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
  document.getElementById("mySidenav").style.right = "0";
  document.getElementById("main").style.marginRight = "30%";
  document.getElementById('toggleDrawer').setAttribute('onClick', 'closeNav()')
}

function closeNav() {
  document.getElementById("mySidenav").style.right = "-30%";
  document.getElementById("main").style.marginRight= "0";
	document.getElementById('toggleDrawer').setAttribute('onClick', 'openNav()')

}


function patates() {
  document.getElementById('descriptionBox').classList.toggle("hidden")
  lelchange = document.getElementById('descriptionToggle').innerHTML
  if (lelchange === 'Description +'){
  document.getElementById('descriptionToggle').innerHTML = 'Description -'
  } else {
  document.getElementById('descriptionToggle').innerHTML = 'Description +'
  }
}

function turnOffLights() {
	document.getElementById('quickBar').classList.toggle('bg-gray-800')
  document.getElementById('quickBar').classList.toggle('border-l')
  document.getElementById('quickBar').classList.toggle('border-gray-700')
  document.getElementById('quickBar').classList.toggle('text-white')
}

