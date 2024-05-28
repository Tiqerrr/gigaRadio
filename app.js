const audio = new Audio("https://audio-edge-qse4n.yyz.g.radiomast.io/2ce0b08d-2fe6-42a1-b64a-9f0a682f5508");

function playSong(id) {

    switch(id) {
        case "song1":
            if (document.getElementById(id).getAttribute("data-playing") == "true") {
                console.log("Stopping audio...")
                audio.pause();
                audio.currentTime = 0;
                document.getElementById(id).setAttribute("data-playing", "false")
                return;
                
            }else if (document.getElementById(id).getAttribute("data-playing") == "false") {
                console.log("Playing audio...")
                audio.play()
                document.getElementById(id).setAttribute("data-playing", "true")
                return;
            }
        
        case "song2":
            if (document.getElementById(id).getAttribute("data-playing") == "false") {
                document.getElementById("lofi").setAttribute("src", "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1")
                document.getElementById(id).setAttribute("data-playing", "true")
                return;
                
            }else {
                document.getElementById("lofi").setAttribute("src", "https://www.youtube.com/embed/jfKfPfyJRdk")
                document.getElementById(id).setAttribute("data-playing", "false")
                return;
            }



            return;
    }
}


