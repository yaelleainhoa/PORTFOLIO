// window.addEventListener("wheel", function() {
//     let pageY = window.scrollY;
//     document.querySelector(".nom").style.transform = `translateY(${pageY * 3}px)`;
//     document.querySelector(".statut").style.transform = `translateY(${pageY*0.2}px)`;
//     // document.querySelector(".infos").style.transform = `rotate(-90deg) translateY(${pageY*0.01}px)`;
//     document.querySelector(".nom").style.transform = `translateX(${-100})px)`;
//     document.querySelector(".nom").style.couleur = 'pink';
// })

function refreshPage(){
    window.location.reload();
} 

let projets = ['babyrun', 'shaderlab', 'portfolio', 'blender', 'coquelicot'];

var isUnfocused;


function unfocus(projet){
    for(proj in projets){
        let projetEnCours = document.querySelector('.'+projets[proj]);
        if(projet!=projetEnCours && projetEnCours.classList.contains("focus")){
            projetEnCours.classList.remove("focus");
        }
    }


}

for(proj in projets){
    let presentation = document.querySelector('.'+projets[proj]+' .presentation');
    let description = document.querySelector('.'+projets[proj]+' .description .retour');

    let projet = document.querySelector('.'+projets[proj]);
    presentation.addEventListener('click', () => {
                                            projet.classList.toggle("focus");
                                            unfocus(projet);
                                            document.querySelector(".transition").classList.remove("appear");
                                        });

    description.addEventListener('click', () => {
        projet.classList.toggle("focus");
        window.clearTimeout( isUnfocused );

        isUnfocused = setTimeout(function() {
    
            // Run the callback
            document.querySelector(".transition").classList.add("appear");
    
        }, 1000);
        unfocus(projet);
    });
}


var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });