const projects = [
    {
      name: "babyrun",
      title: "Run baby run!",
      short_description: "Jeu vidéo inspiré de Temple Run <br>codé en c++,  openGL, SLD1, <br>SDL_TTF, ASSIMP",
      description: "<b>Run baby run !</b> a été réalisé lors de ma deuxième année à l’IMAC lors d'un projet de groupe. Il s’agit d’un jeu vidéo reprenant les codes de Temple Run, codé en <b>C++</b> et <b>OpenGL</b>, utilisant <b>ASSIMP</b> et <b>SDL</b>. Pour ce projet, j'ai principalement travaillé sur le moteur de rendu. <br><br>Le fonctionnement du jeu s’inspire de Temple Run, mais ici, vous incarnez bébé en pousette en pleine cavale,tentant d'échapper à ses parents qui le poursuivant en Twingo.<br><br>Il s’agissait de la première fois que nous avons utilisé la librairie ASSIMP, qui permet d’ajouter des modèles 3D au projet. Ainsi, certains des modèles ont été crées en Blender spécialement pour le projet.",
      minia: "IMAGES/babyrun/miniature.png",
      pictures : [
        {
            path:"IMAGES/babyrun/miniature.png",
            legend:"Extrait du jeu en caméra par défaut"
        },
        {
            path:"IMAGES/blender/blender.png",
            legend:"Extrait du jeu en caméra par défaut"
        },
        {
            path:"IMAGES/babyrun/miniature.png",
            legend:"Extrait du jeu en caméra par défaut"
        },
        {
            path:"IMAGES/babyrun/miniature.png",
            legend:"Extrait du jeu en caméra par défaut"
        }
      ]
    },
    {
        name: "shaderlab",
        title: "Run baby run!",
        short_description: "Jeu vidéo inspiré de Temple Run <br>codé en c++,  openGL, SLD1, <br>SDL_TTF, ASSIMP",
        description: "<b>Run baby run !</b> a été réalisé lors de ma deuxième année à l’IMAC lors d'un projet de groupe. Il s’agit d’un jeu vidéo reprenant les codes de Temple Run, codé en <b>C++</b> et <b>OpenGL</b>, utilisant <b>ASSIMP</b> et <b>SDL</b>. Pour ce projet, j'ai principalement travaillé sur le moteur de rendu. <br><br>Le fonctionnement du jeu s’inspire de Temple Run, mais ici, vous incarnez bébé en pousette en pleine cavale,tentant d'échapper à ses parents qui le poursuivant en Twingo.<br><br>Il s’agissait de la première fois que nous avons utilisé la librairie ASSIMP, qui permet d’ajouter des modèles 3D au projet. Ainsi, certains des modèles ont été crées en Blender spécialement pour le projet.",
        minia: "IMAGES/babyrun/miniature.png",
        pictures : [
          {
              path:"IMAGES/babyrun/miniature.png",
              legend:"Extrait du jeu en caméra par défaut"
          },
          {
              path:"IMAGES/babyrun/miniature.png",
              legend:"Extrait du jeu en caméra par défaut"
          },
          {
              path:"IMAGES/babyrun/miniature.png",
              legend:"Extrait du jeu en caméra par défaut"
          },
          {
              path:"IMAGES/babyrun/miniature.png",
              legend:"Extrait du jeu en caméra par défaut"
          }
        ]
      },
]

function refreshPage(){
    window.location.reload();
} 

function setProjects()
{
    let projectsSection = document.getElementById("projets");
    for(let i = 0; i<projects.length; i++)
    {
        var project = document.createElement("div");
        project.classList.add("projet");
        project.classList.add(projects[i]["name"]);

        // PRESENTATION

        var presentation = document.createElement("div");
        presentation.classList.add("presentation");

        presentation.addEventListener('click', () => {
            var clickedProject = document.querySelectorAll("."+projects[i]["name"])[0];
            clickedProject.classList.toggle("seeDescription");
        });
        
        var twitch = document.createElement("div");
        twitch.classList.add("twitch");
        var minia = document.createElement("img");
        minia.classList.add("image");
        minia.src = projects[i]["minia"];
        twitch.appendChild(minia);
        presentation.appendChild(twitch);

        var bubble = document.createElement("img");
        bubble.src = "IMAGES/petitebulle.png";
        bubble.classList.add("petite");
        bubble.classList.add("bulle");
        presentation.appendChild(bubble);

        var title = document.createElement("div");
        title.classList.add("titre");
        title.innerHTML = projects[i]["title"];
        presentation.appendChild(title);

        var shortDescription = document.createElement("div");
        shortDescription.classList.add("description_courte");
        shortDescription.innerHTML = projects[i]["short_description"];
        presentation.appendChild(shortDescription);

        project.appendChild(presentation);

        // DESCRIPTION
        var description = document.createElement("div");
        description.classList.add("description");

            // RETOUR
            var retour = document.createElement("div");
            retour.classList.add("retour");
            description.appendChild(retour);
    
            retour.addEventListener('click', () => {
                var clickedProject = document.querySelectorAll("."+projects[i]["name"])[0];
                clickedProject.classList.toggle("seeDescription");
            });

        var descriptionContent = document.createElement("div");
        descriptionContent.classList.add("descriptionContent");
        description.appendChild(descriptionContent);

        var imageSwiper = document.createElement("div");
        imageSwiper.classList.add("image");
        imageSwiper.classList.add("swiper");
        imageSwiper.classList.add("mySwiper");
        
        var swiperWrapper = document.createElement("div");
        swiperWrapper.classList.add("swiper-wrapper");

        var currentPictures = projects[i]["pictures"];
        for(let j = 0; j<currentPictures.length; j++)
        {
            var swiperSlide = document.createElement("div");
            swiperSlide.classList.add("swiper-slide");
            swiperWrapper.appendChild(swiperSlide);

            var projectImg = document.createElement("img");
            projectImg.src = currentPictures[j]["path"];
            projectImg.addEventListener("click", function() {
                if (this.requestFullscreen) {
                  this.requestFullscreen();
                } else if (this.msRequestFullscreen) {
                  this.msRequestFullscreen();
                } else if (this.mozRequestFullScreen) {
                  this.mozRequestFullScreen();
                } else if (this.webkitRequestFullscreen) {
                  this.webkitRequestFullscreen();
                }
              });
            swiperSlide.appendChild(projectImg);

            var legend = document.createElement("div");
            legend.classList.add("legende");
            console.log(currentPictures[j]["legend"])
            legend.innerHTML = currentPictures[j]["legend"];
            swiperSlide.appendChild(legend);
        }

        var swiperPagination = document.createElement("div");
        swiperPagination.classList.add("swiper-pagination");

        imageSwiper.appendChild(swiperWrapper);
        imageSwiper.appendChild(swiperPagination);
        descriptionContent.appendChild(imageSwiper);

        var text =  document.createElement("div");
        text.classList.add("text");

        var descriptionTitle =  document.createElement("div");
        descriptionTitle.classList.add("titre");
        descriptionTitle.innerHTML = projects[i]["title"];

        var descriptionText =  document.createElement("div");
        descriptionText.classList.add("description_longue");
        descriptionText.innerHTML = projects[i]["description"];

        text.appendChild(descriptionTitle);
        text.appendChild(descriptionText);

        descriptionContent.appendChild(text);

        project.appendChild(description);

        projectsSection.appendChild(project);
    }
}

  setProjects();

  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });