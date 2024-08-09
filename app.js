const noname = document.getElementById("memaybeo");
const audio = document.getElementById("audio");
const p = document.getElementById("button");

noname.addEventListener('click', function () {
    noname.classList.add('memaybeo');
    p.classList.add('memaybeo2');
    audio.play();
    audio.loop = true;

    setTimeout(function() {
        if (noname) {
            noname.parentNode.removeChild(noname);
        }
    }, 2100);
});
