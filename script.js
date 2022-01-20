window.addEventListener("wheel", function() {
    let pageY = window.scrollY;
    document.querySelector(".nom").style.transform = `translateY(${pageY * 0.2}px)`;
    //document.querySelector(".bulle").style.transform = `translateY(${pageY * 0.1}px)`;
    document.querySelector(".statut").style.transform = `translateY(${pageY*0.3}px)`;
})