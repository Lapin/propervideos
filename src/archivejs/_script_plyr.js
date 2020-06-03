// Cranky Video Archive
function Catalogue(provider, videoId, category, submittedBy) {
  this.provider = provider;
  this.videoId = videoId;
  this.category = category;
  this.submittedBy = submittedBy;
}

let vid1 = new Catalogue('YT', 'xlcywgEMuGI', 'Music', 'ben');
let vid2 = new Catalogue('YT', 'BcoPKWzLjrE', 'Music', 'jack');
let vid3 = new Catalogue('VM', '58396623', 'Music', 'mark');
let vid4 = new Catalogue('VM', '393655756', 'Music', 'jane');
let archive = [vid1, vid2, vid3, vid4];

// random video picker
function picker() {
  currentPick = archive[Math.floor(Math.random() * archive.length)];
  // return [result.provider, result.videoId]
  if (currentPick.provider === 'YT') {
      // place yt player
      createYt(currentPick.videoId)
  } else if (currentPick.provider === 'VM') {
      // place vm player
      createVm(currentPick.videoId)
  }
}

picker()




// == Plyr ===

document.addEventListener('DOMContentLoaded', () => { 
  const player = new Plyr('#player');

  // Expose player so it can be used from the console
  window.player = player;

  // function on(selector, type, callback) {
  //   document.querySelector(selector).addEventListener(type, callback, false);
  // }
});

$(document).ready(() => {
  
  $('.next_btn').on('click', function () {
     
    //  src = $(this).data("src");
    //  type = 'video/' + $(this).data("type");
    //  poster = $(this).data("poster")||"";

     player.source = {
      type: 'video',
      sources: [
        {
          src: 'bTqVqk7FSmY',
          provider: 'youtube',
        },
      ],
    };
    
    player.play();
    
  });
})








// document.addEventListener('DOMContentLoaded', () => { 
//   // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
//   const player = new Plyr('#player');
  
//   // Expose
//   window.player = player;

  
//   // Bind event listener
//   function on(selector, type, callback) {
//     document.querySelector(selector).addEventListener(type, callback, false);
//   }


//   // Play
//   on('.js-play', 'click', () => { 
//     player.play();
//   });

//   // Pause
//   on('.js-pause', 'click', () => { 
//     player.pause();
//   });

//   // Rewind
//   on('.js-rewind', 'click', () => { 
//     player.rewind();
//   });

//   // Forward
//   on('.js-forward', 'click', () => { 
//     player.forward();
//   });
// });

// $(document).ready(() => {
  
//    $('.player-src').on('click', function () {
      
//       src = $(this).data("src");
//       type = 'video/' + $(this).data("type");
//       poster = $(this).data("poster")||"";
 
//       player.source = {
//         type: 'video',
//         title: 'Example title',
//         sources: [
//          {
//               src: src,
//               type: type,
//               size: 720
//           }
//         ],
//         poster: poster
//       };
     
//      player.play();
     
//    });
// })
