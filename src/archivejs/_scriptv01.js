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


// ===== YT Player =====
function createYt() {
    let ytPlayer;
    window.onYouTubeIframeAPIReady = function() {
    // function onYouTubePlayerAPIReady() {
        ytPlayer = new YT.Player('propPlayer', {
            videoId: currentPick.videoId,
            width: '100%',
        })
    }
}

// ===== VM Player ===== 
function createVm() {
    let vmOptions = {
        id: currentPick.videoId,
        responsive: true

    }
    
    let vmPlayer = new Vimeo.Player('propPlayer', vmOptions);
    vmPlayer.on('play');
}

function next() {
    nextPick = archive[Math.floor(Math.random() * archive.length)]; 
    if ( nextPick.provider === currentPick.provider && nextPick === 'YT') {
        function loadSameY()
        // yt load next picker.id
        console.log('1st if same')
        window.onYouTubeIframeAPIReady = function() {
            loadVideoById("bHQqvYy5KYo");
    }

    } }
//     else if ( nextPick.provider === currentPick.provider && nextPick === 'VM') {
//         // vm load next picker.id
//         console.log('2nd if same')
//     } else {
//         if ( currentProvider === 'YT' ) {
//             console.log('1st elseif if yt') 
//         // destroy it
//         // load vm player
//         // load picker.id
//         } else if ( currentProvider === 'VM' ) {
//             console.log('1st elseif if vm')
//         // destroy it
//         // load yt
//         // load picker.id
//         }
//     }
// }




// // ===== YT Player =====
// let ytPlayer;
// function onYouTubePlayerAPIReady() {
//     ytPlayer = new YT.Player('propPlayer', {
//         videoId: 'M7lc1UVf-VE',
//     })
// }



// // ===== VM Player ===== 
// let vmOptions = {
//     id: '405223705',
//     responsive: true
// }

// let vmPlayer = new Vimeo.Player('propPlayer', vmOptions);
// videoPlayer.on('play');
