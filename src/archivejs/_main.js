// == Video Catalogue == 
// 1. Archive of the videos
let videoCatalogue = (function(){

    class catalogueEntry {
    constructor(provider, id, category) {
        this.provider = provider;
        this.id = id;
        this.category = category;
        }
    }

    let vid1 = new catalogueEntry('YT', 'RYpqE0_VpWA', 'Music');
    let vid2 = new catalogueEntry('YT', '97KfDhJdOKI', 'Music');
    let vid3 = new catalogueEntry('VM', '121337049', 'Music');
    let vid4 = new catalogueEntry('VM', '320480032', 'Music');

    return{
    allEntries: [vid1, vid2, vid3, vid4],
    // UpComing Video
    }

})();

// Current video and upcoming Video
let playingNow, upNext, previouslyPlayed,vimPlayer, ytPlayer;
let test = [];

function onYouTubeIframeAPIReady(){};


// == Randomiser == 
function randomiser(init) {

    // 1. Get a randomised entry from video.catalogue
    if ( init === true ){
        upNext = videoCatalogue.allEntries[Math.floor(Math.random()*videoCatalogue.allEntries.length)];
        console.log(`Initiated a randomization video (upNext) with ID ${upNext.id} from ${upNext.provider}. Something related with ${upNext.category}.`)
    } else {
        upNext = videoCatalogue.allEntries[Math.floor(Math.random()*videoCatalogue.allEntries.length)];
        console.log(`New randomization (upNext) with ID ${upNext.id} from ${upNext.provider}. Something related with ${upNext.category}.`)
    }

    // 2. Return it's provider and ID to upNext
    return upNext
}

// == Destroyer == 
function destroyer() {
    if (playingNow.provider === 'YT' ) {
        // destroy YT
        ytPlayer.destroy();
      
    } else if (playingNow.provider === 'VM') {
        vimPlayer.destroy().then(function() {
            // the player was destroyed
        }).catch(function(error) {
            // an error occurred
            });
        }
}
 

// == Auto play == 
function autoPlay() {
    destroyer();
    randomiser();
    playerCreator(upNext.provider, upNext.id, upNext.category)
}
// 1. listen video to end
// 2. execute destroyer
// 3. Get confirmation from destryer
// 4. Execute Randomiser
// 4. Then Execute Player creator

// == PlayerCreator ==
function playerCreator(provider, id, genre) {
    
    // 2. Load the matching provider api player loader

    if (provider === 'YT') {

            ytPlayer = new YT.Player('propPlay', {
              videoId: id,
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
              }
            });

            function onPlayerReady(event) {
                event.target.playVideo();
            }

            function onPlayerStateChange(event) {        
                if(event.data === 0) {          
                    autoPlay();
                }
            }

        previouslyPlayed = playingNow;
        playingNow = upNext;
        return console.log(`loaded ${id} for ${provider} have some ${genre}`)

    } else if ( provider === 'VM' ) {

        // Create VM Player
        let options = {
            id: id,
            responsive: true,
            }
        vimPlayer = new Vimeo.Player('propPlay', options);

        previouslyPlayed = playingNow;
        playingNow = upNext;
        return console.log(`loaded ${id} for ${provider} have some ${genre}`)

    } else {
        console.log(`sicarsin spastik`)
    }

    // 3. return the playerlistener to autoplay ???
};


// // == Prev Next Controllers ==

// document.getElementById('btn_next').addEventListener('click', nextVideo);
// document.getElementById('btn_prev').addEventListener('click', prevVideo);


// function nextVideo() {
//     // 1. Destroy the current video
//     destroyer();
//     // 2. Execute randomiser
//     randomiser();
//     // 3. Execute playercreator
//     return playerCreator(upNext.provider, upNext.id, upNext.category)
// }

// function prevVideo() {
//     if (previouslyPlayed === undefined) {
//         document.getElementById('btn_prev').disabled = true;
//     } else {
//         destroyer();
//         return playerCreator(previouslyPlayed.provider, previouslyPlayed.id, previouslyPlayed.category)   
//     }
// }



// == INIT == 
// 1. Execute Randomiser

randomiser(true);
// 2. Execute PlayerCreator 
playerCreator(upNext.provider, upNext.id, upNext.category)
// 3. Set the event Listener




