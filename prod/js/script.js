

let upNext
let archive = []



function fetchArchive() { 
  fetch('./prod/js/archive.json')
  .then(response => response.json())
  .then(data => { archive = data; })
  .then(randomiser).then(setUpDOM).then(createPlayer).then(loadVideo)
};



fetchArchive()
// == Randomiser ==

function randomiser() {
  upNext = archive[Math.floor(Math.random()*archive.length)] 
}


// == DOM Setup ==


function setUpDOM() {
  document.getElementById('player').setAttribute('data-plyr-provider', upNext.provider)
  document.getElementById('player').setAttribute('data-plyr-embed-id', upNext.id)
  let titles = document.getElementsByClassName('videoTitle');
  Array.prototype.forEach.call(titles, function(element) {
    element.innerHTML = upNext.title;
  });
}


function createPlayer() {

  // == Plyr JS ==
  const player = new Plyr('#player', {
    muted: true,
    // autoplay: true,
    debug: true
  }); 
  // Expose
  window.player = player;
  player.on('ended', event => {
    shuffler()
  });
}


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
  document.getElementById('sideBar').style.right = "0";
  document.getElementById("main").style.marginRight = "30%";
  document.getElementById('toggleDrawer').setAttribute('onClick', 'closeNav()')
}

function closeNav() {
  document.getElementById("sideBar").style.right = "-30%";
  document.getElementById("main").style.marginRight= "0";
	document.getElementById('toggleDrawer').setAttribute('onClick', 'openNav()')

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
	document.getElementById('quickBar').classList.toggle('bg-gray-800') 
  document.getElementById('quickBar').classList.toggle('border-gray-700')
  document.getElementById('quickBar').classList.toggle('text-gray-700')

}

// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// // btn.onclick = 
// function hepacik() {
//   modal.style.display = "block";
// }
// hepacik()
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }