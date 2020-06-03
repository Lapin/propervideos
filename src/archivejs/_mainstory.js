// == Video Catalogue == 
// 1. Archive of the videos

// == Randomiser == 
// 1. Get a randomised entry from video.catalogue
// 2. Return it's provider and ID to upNext

// == Destroyer == 
// 1. get the current video's provider
// 2. destroy it
// 3. return a destroyed msg 

// == Auto play == 
// 1. listen video to end
// 2. execute destroyer
// 3. Get confirmation from destryer
// 4. Execute Randomiser
// 4. Then Execute Player creator

// == PlayerCreator ==
// 1. Get the upNext video provider
// 2. Load the matching provider api player loader
// 3. return the playerlistener to autoplay

// == Press Next ==
// 1. Execute randomiser
// 2. Execute playercreator

// == INIT == 
// 1. Execute Randomiser
// 2. Execute PlayerCreator


/* Old code

/* ikinci sicarsle mixer
function Catalogue2(provider, videoId, category, submittedBy) {
    this.provider = provider;
    this.videoId = videoId;
    this.category = category;
    this.submittedBy = submittedBy;
}

let vid1 = new Catalogue2('YT', 'xlcywgEMuGI', 'Music', 'ben');
let vid2 = new Catalogue2('YT', 'BcoPKWzLjrE', 'Music', 'jack');
let vid3 = new Catalogue2('VM', '280815263', 'Music', 'mark');
let vid4 = new Catalogue2('VM', '405223705', 'Music', 'jane');
let allVideos = [vid1, vid2, vid3, vid4];


let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('propWrap', {
    height: '100%',
    width: '100%',
    events: {
        'onReady': onPlayerReady,
        }
    });
}
function onPlayerReady(event) {
    event.target.loadVideoById(value);
  }


function randomiser(value) {
    // pick a random video
    let pickedVideo = allVideos[Math.floor(Math.random()*allVideos.length)];
    // console.log(pickedVideo.provider); // burda neden this. calismiyor?

    if (pickedVideo.provider = 'YT'){
        // enter youtube combo
        return pickedVideo.videoId;
    } else {
        // Enter vimeo combo
        return pickedVideo.videoId;
    }


}
*/

/* sicarsle mixer
function mixer() {
    let pickedVideo = allVideos[Math.floor(Math.random()*allVideos.length)];
    if (pickedVideo.provider = 'YT') {
        let player;
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('propWrap', {
                height: '100%',
                width: '100%',
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                    }
                });
            }     
        function onPlayerReady(event) {
        event.target.loadVideoById(pickedVideo.videoId);
            }
        function onPlayerStateChange(event) {
                if (event.data == YT.PlayerState.ENDED) {
                    player.destroy();
                    nextVideo();
                }
        }

    } else if (pickedVideo.provider  = 'VM') {
        player.destroy();
        var options = {
            id: pickedVideo.videoId,
            responsive: true,
          };
        
          var videoPlayer = new Vimeo.Player('propWrap', options);
        
          videoPlayer.on('play', function() {
            console.log('Played the video');
          });
    }
    console.log(pickedVideo)
}



=========Old manual method 

let catalogue = { 
    youTube: ['xlcywgEMuGI', 'BcoPKWzLjrE'],
    vimeo: ['280815263', '405223705']
};

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('propWrap', {
        height: '100%',
        width: '100%',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
            }
        });
    }
    
function onPlayerReady(event) {
  event.target.loadVideoById(catalogue.youTube[0]);
}

function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
            player.destroy();
            nextVideo();
        }
    }

function nextVideo() {
    player.destroy();
    var options = {
        url: "https://vimeo.com/280815263",
        responsive: true,
      };
    
      var videoPlayer = new Vimeo.Player('propWrap', options);
    
      videoPlayer.on('play', function() {
        console.log('Played the video');
      });

}

==========

// // ======= vimeo player ========

// var videoIDs = [
//   '280815263',
//   '405223705'
// ];

// var player, currentVideoId = 0;

// var options = {
//   id: videoIDs[currentVideoId],
//   maxwidth: document.getElementById("myVideo").offsetWidth
// };

// var videoPlayer = new Vimeo.Player('myVideo', options);


// videoPlayer.on('play', function() {
//   console.log('Played the video');
// });

// function nextVideo() {
//   currentVideoId++
//   videoPlayer.loadVideo(videoIDs[currentVideoId])
// }

// // ====== youtube player ========

// var videoIDs = [
//   'xlcywgEMuGI',
//   'BcoPKWzLjrE'
// ];

// var player, currentVideoId = 0;

// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//       height: '100%',
//       width: '100%',
//       events: {
//           'onReady': onPlayerReady,
//           'onStateChange': onPlayerStateChange
//       }
//   });
// }

// function onPlayerReady(event) {
//   event.target.loadVideoById(videoIDs[currentVideoId]);
// }

// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.ENDED) {
//       currentVideoId++;
//       if (currentVideoId < videoIDs.length) {
//           player.loadVideoById(videoIDs[currentVideoId]);
//       }
//   }
// }
//

*/