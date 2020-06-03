// Video Archive (to be transferred to somewhereelse)
function videoCatalogue(provider, id, category) {
    this.provider = provider;
    this.id = id;
    this.category = category;
}

let vid1 = new videoCatalogue('youtube', 'RYpqE0_VpWA', 'Music');
let vid2 = new videoCatalogue('youtube', '97KfDhJdOKI', 'Music');
let vid3 = new videoCatalogue('vimeo', '121337049', 'Music');
let vid4 = new videoCatalogue('vimeo', '320480032', 'Music');


let allEntries = [vid1, vid2, vid3, vid4];

// == Global Access Variables ==
let upNext, playingNow;

// == Randomiser == 
function randomiser(init) {

    // 1. Get a randomised entry from video.catalogue (remove if else later)
    if ( init === true ){
        upNext = allEntries[Math.floor(Math.random()*allEntries.length)];
        console.log(`Initiated a randomization video (upNext) with ID ${upNext.id} from ${upNext.provider}. Something related with ${upNext.category}.`)
    } else {
        upNext = allEntries[Math.floor(Math.random()*allEntries.length)];
        console.log(`New randomization (upNext) with ID ${upNext.id} from ${upNext.provider}. Something related with ${upNext.category}.`)
    }

    // 2. Return it's provider and ID to upNext
    return upNext
}


// PLYR

// Change "{}" to your options:
// https://github.com/sampotts/plyr/#options
const player = new Plyr('#player', {
    debug: true,
    autoplay: true,
    
});

// Expose player so it can be used from the console
window.player = player;

function nextVideo() {
    player.destroy();
    randomiser();
    player.source = {
        type: 'video',
        sources: [
        {
            src: 'upNext.id',
            provider: 'upNext.provider',
        },
        ],
    };
}
// 


// UI Controller
{
    document.getElementById('btn_next').addEventListener('click', nextVideo)
    document.getElementById('btn_prev').addEventListener('click') 
}