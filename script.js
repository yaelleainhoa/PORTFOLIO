const projects = [
    {
      name: "babyrun",
      title: "Run baby run!",
      short_description: "Jeu vidéo inspiré de Temple Run codé en c++,  openGL, SLD1, SDL_TTF, ASSIMP",
      description: "<b>Run baby run !</b> a été réalisé lors de ma deuxième année à l’IMAC lors d'un projet de groupe. Il s’agit d’un jeu vidéo reprenant les codes de Temple Run, codé en <b>C++</b> et <b>OpenGL</b>, utilisant <b>ASSIMP</b> et <b>SDL</b>. Pour ce projet, j'ai principalement travaillé sur le moteur de rendu. <br><br>Le fonctionnement du jeu s’inspire de Temple Run, mais ici, vous incarnez bébé en pousette en pleine cavale,tentant d'échapper à ses parents qui le poursuivant en Twingo.<br><br>Il s’agissait de la première fois que nous avons utilisé la librairie ASSIMP, qui permet d’ajouter des modèles 3D au projet. Ainsi, certains des modèles ont été crées en Blender spécialement pour le projet.",
      minia: "IMAGES/babyrun/miniature.png",
      pictures : [
        {
            path:"IMAGES/babyrun/miniature.png",
            legend:"Extrait du jeu en caméra par défaut"
        },
        {
            path:"IMAGES/babyrun/obstacle.png",
            legend:"Si vous touchez un obstacle non mortel, la voiture vous poursuit"
        },
        {
            path:"IMAGES/babyrun/voiture.png",
            legend:"La voiture vous poursuit encore, vous n'avez plus le droit à l'erreur !"
        },
        {
            path:"IMAGES/babyrun/POV.png",
            legend:"Changement de caméra, vous êtes dans les yeux du personnage"
        },
        {
          path:"IMAGES/babyrun/nom.png",
          legend:"Vous pouvez entrer votre nom de partie pour la sauvegarder par la suite"
      }
      ]
    },
    {
        name: "shaderlab",
        title: "Shaderlab",
        short_description: "Site web permettant de découvrir les modes  d’illumination par raymarching en manipulant des shaders, codé en THREE.js, HTML, JavaScript, SASS et GLSL",
        description: "<b>Shader Lab</b> a été crée lors d’un projet tuteuré pendant ma deuxième année à l'IMAC. La demande du client était de créer un site web pédagogique qui permette aux élèves de voir plusieurs modèles d’illuminations fonctionnant avec la technique du raymarching, et de coder lui même son modèle. <br><br>J'ai principalement travaillé sur le lien entre l'interface du site web et l'affichage de la scène, via les inputs par exemple.Les outils principaux sur lesquels j'ai travaillé sont donc <b>Javascript</b> et <b>THREE.js</b> pour tout ce qui concerne l'affichage de la scène, l'utilisation de la caméra, et l'utilisation des shaderscodés en GLSL.",
        minia: "IMAGES/shaderlab/miniature.png",
        pictures : [
          {
              path:"IMAGES/shaderlab/color_picker.png",
              legend:"Peu importe le modèle choisi, jouez avec le code, les inputs, changez de scène, de lumières..."
          },
          {
              path:"IMAGES/shaderlab/lambert.png",
              legend:"Exemple de modèle : Lambert"
          },
          {
              path:"IMAGES/shaderlab/code.png",
              legend:"Code compilable dynamiquement, avec une console de débug"
          },
          {
              path:"IMAGES/shaderlab/doc.png",
              legend:"Documentation avec des exemples de code"
          }
        ]
      },
      {
        name: "amaya",
        title: "Game Jam",
        short_description: "Jeu codé en binôme en 48h lors d'une Game Jam, utilisation de C++ et SDL2  Les sprites sont tirées du jeu Charumera.",
        description: "Ce jeu a été lors d'une <b></b>Game Jam</b> de 48h en binôme. Nous avons décidé de coder le jeu entièrement en C++ et SDL2. Il s'agit d'un jeu de foot se jouant à deux tour par tour. Le joueur doit sélectionner une joueur de son équipe, et pointer la flèche qui s'affiche vers là où il désire diriger son tir. La distance du clic au joueur détermine la puissance du mouvement.<br><br>Je me suis principalement occupée de tout le code qui correspond au mouvement du joueur, de la balle, et des collisions ou buts marqués.",
        minia: "IMAGES/amaya/accueil.png",
        pictures : [
          {
              path:"IMAGES/amaya/regles.png",
              legend:"Règles du jeu"
          },
          {
              path:"IMAGES/amaya/goal.png",
              legend:"Lorsqu'un joueur marque un goal, le score s'actualise et les joueurs sont redisposés au hasard"
          },
          {
              path:"IMAGES/amaya/loser.png",
              legend:"Selon le perdant, un différent message s'affiche"
          }
        ]
      },
      {
        name: "portfolio",
        title: "Portfolio",
        short_description: "Portfolio en ligne avec interface administrateur utilisant PHP, AJAX et Javascript",
        description: "Ce projet a été réalisé lors de ma première année à l’IMAC, dans le cadre d’un projet de groupe visant à nous faire travailler le back-end d’un site, et de manipuler et créer des bases de données. Nous avons utilisé <b>PHP</b>, <b>AJAX</b> et <b>Javascript</b>.<br><br> Le site est un portfolio divisé en deux parties : la partie <b>visiteur</b>, qui permet de voir une galerie de projets et la partie <b>administrateur</b> qui permet de changer la base de données du site en modifiant ou ajoutant des projets. Nous avons essayé de proposer une partie administrateur simple de prise en main pour que le site soit modifiable sans avoir besoin de savoir coder.",
        minia: "IMAGES/portfolio/portfolio.png",
        pictures : [
          {
              path:"IMAGES/portfolio/galerie.png",
              legend:"Visionnez la galerie des projets"
          },
          {
              path:"IMAGES/portfolio/projets.png",
              legend:">En mode administrateur, éditez les projets existants"
          },
          {
              path:"IMAGES/portfolio/image.png",
              legend:"Ajoutez un media"
          },
          {
              path:"IMAGES/portfolio/projet_creation.png",
              legend:"Ajoutez un projet"
          },
          {
            path:"IMAGES/portfolio/competences.png",
            legend:"Modifiez les compétences que vous souhaitez mettre en avant"
        }
        ]
      },
      {
        name: "blender",
        title: "Nature morte",
        short_description: "Projet de nature morte en Blender représentant la maison de mère grand dans Le Petit Chaperon Rouge",
        description: "Ce projet a été réalisé la deuxième année de l’IMAC. Le but était de créer une nature morte sur <b>Blender</b>, en modélisant nous même au moins 5 modèles. <br><br>Il s’agissait de ma première utilisation de Blender. J’ai décidé de représenter la maison de mère Grand dans Le Petit Chaperon Rouge. On peut deviner la scène grâce à la cape rouge sur la chaise, la galette, le panier du chaperon, sa bouteille de lait, le cadre photo.. et aussi l’ombre du chasseur sur le mur.",
        minia: "IMAGES/blender/blender.png",
        pictures : [
          {
              path:"IMAGES/blender/blender.png",
              legend:"Rendu (en cycle) de la nature morte"
          },
          {
              path:"IMAGES/blender/modeles.png",
              legend:"Close up sur les objets que j'ai modélisé"
          }
        ]
      },
      {
        name: "coquelicot",
        title: "Coquelicots",
        short_description: "Projet d’art génératif, 1000 images codées en p5.js",
        description: "Ce projet a été réalisé la deuxième année de l’IMAC. Le but était de créer une nature morte sur <b>Blender</b>, en modélisant nous même au moins 5 modèles. <br><br>Il s’agissait de ma première utilisation de Blender. J’ai décidé de représenter la maison de mère Grand dans Le Petit Chaperon Rouge. On peut deviner la scène grâce à la cape rouge sur la chaise, la galette, le panier du chaperon, sa bouteille de lait, le cadre photo.. et aussi l’ombre du chasseur sur le mur.",
        minia: "IMAGES/coquelicot/coquelicot.png",
        pictures : [
          {
              path:"IMAGES/coquelicot/coquelicot_0.png",
              legend:"Echantillons des 1000 images générées"
          },
          {
              path:"IMAGES/coquelicot/coquelicot_1.png",
              legend:"Echantillons des 1000 images générées"
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