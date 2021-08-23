// check for keypress if key pressed
let keys = ["a","s","d","f","g","h","j","e","w","t","y","u"];
let keys1 = ["e","w","t","y","u"];
document.addEventListener("keydown",function(event){
    if (keys.includes(event.key)) {
        let str = event.key.toUpperCase();
        let audio = document.createElement("AUDIO");
        audio.src = `music/${str}.mp3`;
        let m = document.querySelector(`#${event.key}`);
        m.style.background="grey";
        audio.play();
        document.addEventListener("keyup",function () {
            if (keys1.includes(event.key)) {
            m.style.background = "black";
        }
            else {
                m.style.background = "white";
            }
        })
        console.log(`The '${event.key}' key is pressed.`)
    }
    else {
        console.log(`Wrong keypress: '${event.key}'`)
    }
});
//-----------------------------------------------------------------------------