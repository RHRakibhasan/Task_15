for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".my_button")[i].addEventListener("click", function() {

        var text = this.innerHTML;
        document.querySelector('#event_Listener').innerHTML = text + " is clicked";
    })
}

// Task: audio player

for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".audio_button")[i].addEventListener("click", function() {
        var text = this.innerHTML;
        document.querySelector('#audio_name').innerHTML = text + " is played";
        audioPlay(text);
    })
}

document.addEventListener("keypress", function() {
    var text = event.key;
    audioPlay(text);
})

function audioPlay(text) {
    switch (text) {
        case "1":
            var audio = new Audio("1.mp4")
            audio.play();
            break;
        case "2":
            var audio = new Audio("2.mp4")
            audio.play();
            break;
        case "3":
            var audio = new Audio("3.mp4")
            audio.play();
            break;
    }
}