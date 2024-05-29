const audio = new Audio("https://audio-edge-qse4n.yyz.g.radiomast.io/2ce0b08d-2fe6-42a1-b64a-9f0a682f5508");

function playSong(id) {
    var buttonID  = document.getElementById(id);
    var containerID = buttonID.parentElement;
    var selected = 0;
    switch(id) {
 //Walmart Radio
        case "song1":
            if (buttonID.getAttribute("data-playing") == "true") {
                console.log("Stopping audio...")
                audio.pause();
                audio.currentTime = 0;
                buttonID.setAttribute("data-playing", "false")
                containerID.setAttribute("selected", "false")
                return;
                
            }else if (buttonID.getAttribute("data-playing") == "false") {
                console.log("Playing audio...")
                audio.play()
                buttonID.setAttribute("data-playing", "true")
                containerID.setAttribute("selected", "true")
                return;
            }
//Lofi YT
        case "song2":
            if (buttonID.getAttribute("data-playing") == "false") {
                buttonID.setAttribute("data-playing", "true")
                containerID.setAttribute("selected", "true")
                document.getElementById("lofi").setAttribute("src", "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1")
                return;
                
            }else if (buttonID.getAttribute("data-playing") == "true") {
                buttonID.setAttribute("data-playing", "false")
                containerID.setAttribute("selected", "false")
                document.getElementById("lofi").setAttribute("src", "https://www.youtube.com/embed/jfKfPfyJRdk")
                return;
            }
//Wii Shop YT
        case "song3":
            if (buttonID.getAttribute("data-playing") == "false") {
                buttonID.setAttribute("data-playing", "true")
                containerID.setAttribute("selected", "true")
                document.getElementById("wii").setAttribute("src", "https://www.youtube.com/embed/bPkNXF9NJcs?autoplay=1")
                return;
                
            }else if (buttonID.getAttribute("data-playing") == "true") {
                buttonID.setAttribute("data-playing", "false")
                containerID.setAttribute("selected", "false")
                document.getElementById("wii").setAttribute("src", "https://www.youtube.com/embed/bPkNXF9NJcs")
                return;
            }
    }
}


