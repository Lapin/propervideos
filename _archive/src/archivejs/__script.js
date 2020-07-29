// Temporarty Archive
let catalogue = (() => {
    
    function videoCatalogue(provider, id, category, title, descrtiption) {
        this.provider = provider;
        this.id = id;
        this.category = category;
        this.title = title;
        this.descrtiption = descrtiption;
        };

    let vid1 = new videoCatalogue('youtube', 'RYpqE0_VpWA', 'Music', 'Ratatat - Party With Children', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus, vel quos quas dolor soluta.');
    let vid2 = new videoCatalogue('youtube', '97KfDhJdOKI', 'Music', 'Ratatat - Neckbrace', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus, vel quos quas dolor soluta.');
    let vid3 = new videoCatalogue('vimeo', '121337049', 'Music', 'Electronic Boards', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus, vel quos quas dolor soluta.');
    let vid4 = new videoCatalogue('vimeo', '320480032', 'Music', 'Learning Cinema4d', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus, vel quos quas dolor soluta.');
    
    
    return allVideos = [vid1, vid2, vid3, vid4]

    
  })(); 

// Video Picker
let videoPicker = (() => {

    let upNext, currentlyPlaying;
    let previouslyPlayed = []

    return {
        random: function(init) {

            if (init === true) {
                console.log(`initial launch`)
            } else {
                previouslyPlayed.push = upNext;
            }

            upNext = catalogue[Math.floor(Math.random()*catalogue.length)];
            document.getElementById('videoTitle').innerHTML = upNext.title
            console.log(`new video loaded from ${upNext.provider} with the ID of ${upNext.id}`)
            currentlyPlaying = upNext;
          }
        
    }
    
})();

// video loader

let videoLoader = (() => {

    document.addEventListener('DOMContentLoaded', () => { 
        // == Plyr JS ==
        
        const player = new Plyr('#player', {
            autoplay: true,
        });
        // Expose
        window.player = player;
        
        document.getElementById('btn_shuffle').addEventListener('click', function(){
            randomiser()
            loadVideo()
        })
        
        
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
        
        });

})();

// global variables
// UI Controller