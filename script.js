// window.addEventListener("wheel", function() {
//     let pageY = window.scrollY;
//     document.querySelector(".nom").style.transform = `translateY(${pageY * 0.15}px)`;
//     document.querySelector(".statut").style.transform = `translateY(${pageY*0.2}px)`;
//     // document.querySelector(".infos").style.transform = `rotate(-90deg) translateY(${pageY*0.01}px)`;
//     document.querySelector(".nom").style.transform = `translateX(${-100})px)`;
//     document.querySelector(".nom").style.couleur = 'pink';
// })

let projets = ['babyrun', 'shaderlab', 'portfolio', 'blender', 'coquelicot'];

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
    let description = document.querySelector('.'+projets[proj]+' .description .text');

    let projet = document.querySelector('.'+projets[proj]);
    presentation.addEventListener('click', () => {
                                            projet.classList.toggle("focus");
                                            unfocus(projet);
                                        });

    description.addEventListener('click', () => {
        projet.classList.toggle("focus");
        unfocus(projet);
    });
}

// var swiper = new Swiper(".mySwiper", {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });