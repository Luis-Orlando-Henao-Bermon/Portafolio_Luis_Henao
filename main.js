document.getElementById("homeM").addEventListener("click", function() {
    document.getElementById("menuHambur").style.right="-10rem";
});
document.getElementById("proyectosM").addEventListener("click", function() {
    document.getElementById("menuHambur").style.right="-10rem";
});
document.getElementById("sobreMiM").addEventListener("click", function() {
    document.getElementById("menuHambur").style.right="-10rem";
});
document.getElementById("contactoL").addEventListener("click", function() {
    document.getElementById("menuHambur").style.right="-10rem";
});
document.getElementById("habilidadesAM").addEventListener("click", function() {
    document.getElementById("menuHambur").style.right="-10rem";
});
document.getElementById("menuH").addEventListener("click", function() {
    document.getElementById("menuHambur").style.right="-10rem";
});
document.getElementById("menu").addEventListener("click", function() {
    document.getElementById("menuHambur").style.right="0rem";
});
changeSpanish();

var cambioTema=0;
document.getElementById("tema").addEventListener("click", function() {
    
    if (cambioTema===0) {
        document.documentElement.style.setProperty('--color-text','#fff')
        document.documentElement.style.setProperty('--color-back','#000')
        document.documentElement.style.setProperty('--color-sombra','#303030')
        document.getElementById("FondoPrincipal").style.background=`url("/img/image.png") repeat 0 0`
        document.getElementById("FondoPrincipal").style.backgroundSize="50px"
        document.getElementById("tema").innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24"><path fill="var(--color-text)" d="M18 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0"/><path fill="var(--color-text)" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06m15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0M1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-2.102 6.148a.75.75 0 0 1 1.06 0l.393.393a.75.75 0 1 1-1.06 1.06l-.393-.393a.75.75 0 0 1 0-1.06m-12.296 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 1 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.061 0M12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>`
        cambioTema=1;
        
    } else {
        
        document.documentElement.style.setProperty('--color-text','#000')
        document.documentElement.style.setProperty('--color-back','#fff')
        document.documentElement.style.setProperty('--color-sombra','#eeeeee')
        document.getElementById("FondoPrincipal").style.background=`url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC") repeat 0 0`
        document.getElementById("FondoPrincipal").style.backgroundSize="auto"
        document.getElementById("tema").innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="var(--color-text)" d="M11.712 3.45a.75.75 0 0 0-.668-1.197c-5.414.494-8.436 4.752-8.764 9.105c-.328 4.361 2.037 8.975 7.451 10.166c5.686 1.25 11.472-2.837 12.016-8.646a.75.75 0 0 0-1.189-.676c-2.837 2.069-6.08 1.316-8.136-.724c-2.054-2.039-2.8-5.239-.71-8.028"/></svg>`
        cambioTema=0;
    }

});

function changeSpanish() {
    

    // Cambio de idioma
    document.querySelector(".espanol").innerHTML = "Español";
    document.querySelector(".ingles").innerHTML = "Inglés";
    document.querySelector(".Frances").innerHTML = "Frances";

    // Menú hamburguesa
    document.querySelector("#homeM").innerHTML = "Inicio";
    document.querySelector("#proyectosM").innerHTML = "Proyectos";
    document.querySelector("#sobreMiM").innerHTML = "Sobre mí";
    document.querySelector("#contactoL").innerHTML = "Contacto";
    document.querySelector("#habilidadesAM").innerHTML = "Habilidades";

    // Header
    document.querySelector(".home").innerHTML = "Inicio";
    document.querySelector(".proyectos").innerHTML = "Proyectos";
    document.querySelector(".sobreMi").innerHTML = "Sobre mí";
    document.querySelector(".contacto").innerHTML = "Contacto";
    document.querySelector("#habilidadesA").innerHTML = "Habilidades";


    // Principal
    document.querySelector(".saludo").innerHTML = "¡Hola a todos!, soy";

    // Proyectos
    document.querySelector(".proyectosText").innerHTML = "Proyectos";
    document.querySelector("#PokeAPI").innerHTML = "Es un programa que usa la PokeAPI y simula la Pokédex, mostrando los Pokémon con su número y nombre. Permite avanzar o retroceder de uno en uno o buscarlos por número.";

    document.querySelector("#Tibook").innerHTML = "Tibook es una plataforma diseñada para estudiantes que busca mejorar el acceso al aprendizaje a través de herramientas interactivas, contenido educativo y una comunidad colaborativa. Su objetivo es hacer que el estudio sea más dinámico y accesible para todos.";

    document.querySelector("#campus").innerHTML = "CampusLands ERP es una plataforma de simulación diseñada en Python para gestionar el proceso académico de los estudiantes en CampusLands. Permite registrar y hacer seguimiento a los estudiantes, asignarlos a rutas de aprendizaje, evaluar su desempeño y generar reportes de progreso de manera eficiente.";

    document.querySelector("#superHero").innerHTML = "Happy Feets es una aplicación diseñada para la gestión de veterinarias, facilitando el control de citas, historial clínico, inventario y adopciones. Permite a clientes, veterinarios y administradores acceder a herramientas interactivas para mejorar la organización y atención de las mascotas.";

    document.querySelector(".AcercaDeMiText").innerHTML = "Sobre mí";
    document.querySelector(".infoMe").innerHTML = `💻 Soy Luis Henao, desarrollador fullstack junior apasionado por la tecnología y el aprendizaje constante. <br><br>
    
    👨‍💻 Me destaco por mi organización, capacidad de resolución de problemas y trabajo en equipo. Disfruto aprender nuevas tecnologías y mantenerme actualizado con las tendencias del desarrollo.
    <br><br>
    🚀 Mi objetivo es seguir creciendo como programador, aportar valor en proyectos innovadores y colaborar en equipos dinámicos donde pueda mejorar mis habilidades y compartir mis conocimientos.`;

    //contacto

    document.getElementById("descargaCv").innerHTML="Descargar CV"
    document.getElementById("contactoH2").innerHTML = "Contacto";
    document.getElementById("nameLabel").innerHTML="Nombre"
    document.getElementById("name").placeholder="Nombre"
    document.getElementById("phoneLabel").innerHTML="Teléfono"
    document.getElementById("phone").placeholder="Teléfono"
    document.getElementById("emailLabel").innerHTML="Email"
    document.getElementById("email").placeholder="Email"
    document.getElementById("messageLabel").innerHTML="Mensaje"
    document.getElementById("message").placeholder="Mensaje"
    document.getElementById("btn").value="Enviar"

    document.querySelector(".HabilidadesText").innerHTML = "Habilidades";
    document.getElementById("problemText").value="Resolución de problemas"
    document.getElementById("teamText").value="Trabajo en equipo"
    document.getElementById("organizationText").value="Organización"
    document.getElementById("learningText").value="learningText"

    // Derechos de autor
    document.querySelector(".derechos").innerHTML = " &copy; 2025 Luis Henao Campuslands. Todos los derechos reservados.";
}


function changeEnglish() {
    //CAmbio de idioma
    document.querySelector(".espanol").innerHTML="Spanish"
    document.querySelector(".ingles").innerHTML="English"
    document.querySelector(".Frances").innerHTML="French"
    
    //Menu hamburguesa
    document.querySelector("#homeM").innerHTML="Home"
    document.querySelector("#proyectosM").innerHTML="Projects "
    document.querySelector("#sobreMiM").innerHTML="About me "
    document.querySelector("#contactoL").innerHTML="Contact"
    document.querySelector("#habilidadesAM").innerHTML = "Skills";

    
    //header
    document.querySelector(".home").innerHTML="Home"
    document.querySelector(".proyectos").innerHTML="Projects "
    document.querySelector(".sobreMi").innerHTML="About me"
    document.querySelector(".contacto").innerHTML="Contact"
    document.querySelector("#habilidadesA").innerHTML = "Skills";
    
    //principal
    document.querySelector(".saludo").innerHTML="Hello everyone!!!, I am"
    
    //proyectos
    document.querySelector(".proyectosText").innerHTML="Projects"
    document.querySelector("#PokeAPI").innerHTML="It is a program that uses the PokeAPI and simulates the Pokédex, displaying Pokémon with their number and name. It allows moving forward or backward one by one or searching for them by number"
    
    document.querySelector("#Tibook").innerHTML="Tibook is a platform designed for students that aims to enhance learning access through interactive tools, educational content, and a collaborative community. Its goal is to make studying more dynamic and accessible for everyone."
    
    document.querySelector("#campus").innerHTML="CampusLands ERP is a simulation platform designed in Python to manage the academic process of students at CampusLands. It allows for student registration and tracking, assignment to learning paths, performance evaluation, and efficient progress report generation."
    
    document.querySelector("#superHero").innerHTML="Happy Feets is an application designed for veterinary management, facilitating the control of appointments, medical records, inventory, and adoptions. It allows clients, veterinarians, and administrators to access interactive tools to improve organization and pet care."
    
    document.querySelector(".AcercaDeMiText").innerHTML="About me"
    document.querySelector(".infoMe").innerHTML=`💻 I’m Luis Henao, a junior full-stack developer passionate about technology and continuous learning. <br><br>
    
    👨‍💻 I stand out for my organization, problem-solving skills, and teamwork. I enjoy learning new technologies and staying up to date with development trends.
    <br><br>
    🚀 My goal is to keep growing as a developer, contribute to innovative projects, and collaborate with dynamic teams where I can improve my skills and share my knowledge.`

    //Contacto
    document.getElementById("descargaCv").innerHTML = "Download CV";
    document.getElementById("contactoH2").innerHTML = "Contact";
    document.getElementById("nameLabel").innerHTML = "Name";
    document.getElementById("name").placeholder = "Name";
    document.getElementById("phoneLabel").innerHTML = "Phone";
    document.getElementById("phone").placeholder = "Phone";
    document.getElementById("emailLabel").innerHTML = "Email";
    document.getElementById("email").placeholder = "Email";
    document.getElementById("messageLabel").innerHTML = "Message";
    document.getElementById("message").placeholder = "Message";
    document.getElementById("btn").value = "Send";

    document.querySelector(".HabilidadesText").innerHTML = "Skills";
    document.getElementById("problemText").innerHTML = "Problem Solving";
    document.getElementById("teamText").innerHTML = "Teamwork";
    document.getElementById("organizationText").innerHTML = "Organization";
    document.getElementById("learningText").innerHTML = "Continuous Learning";


    //derechos de autor
    document.querySelector(".derechos").innerHTML=" &copy; 2025 Luis Henao Campuslands. All rights reserved."

}

function changeFrench() {
  //CAmbio de idioma
    document.querySelector(".espanol").innerHTML = "Espagnol";
    document.querySelector(".ingles").innerHTML = "Anglais";
    document.querySelector(".Frances").innerHTML = "Français";

     //Menu hamburguesa
    document.querySelector("#homeM").innerHTML = "Accueil";
    document.querySelector("#proyectosM").innerHTML = "Projets";
    document.querySelector("#sobreMiM").innerHTML = "À propos de moi";
    document.querySelector("#contactoL").innerHTML = "Contact";
    document.querySelector("#habilidadesAM").innerHTML = "Compétences";
    
    
    //header
    document.querySelector(".home").innerHTML = "Accueil";
    document.querySelector(".proyectos").innerHTML = "Projets";
    document.querySelector(".sobreMi").innerHTML = "À propos de moi";
    document.querySelector(".contacto").innerHTML = "Contact";
    document.querySelector("#habilidadesA").innerHTML = "Compétences";

    //principal
    document.querySelector(".saludo").innerHTML = "Bonjour à tous !!!, je suis";

    //proyectos
    document.querySelector(".proyectosText").innerHTML = "Projets";
    document.querySelector("#PokeAPI").innerHTML = "C'est un programme qui utilise la PokeAPI et simule le Pokédex, affichant les Pokémon avec leur numéro et leur nom. Il permet d'avancer ou de reculer un par un ou de les rechercher par numéro.";

    document.querySelector("#Tibook").innerHTML = "Tibook est une plateforme conçue pour les étudiants qui vise à améliorer l'accès à l'apprentissage grâce à des outils interactifs, du contenu éducatif et une communauté collaborative. Son objectif est de rendre l'étude plus dynamique et accessible à tous.";

    document.querySelector("#campus").innerHTML = "CampusLands ERP est une plateforme de simulation conçue en Python pour gérer le processus académique des étudiants de CampusLands. Elle permet d'enregistrer et de suivre les étudiants, de les affecter à des parcours d'apprentissage, d'évaluer leurs performances et de générer des rapports de progression de manière efficace.";

    document.querySelector("#superHero").innerHTML = "Happy Feets est une application conçue pour la gestion des cliniques vétérinaires, facilitant le contrôle des rendez-vous, des dossiers médicaux, de l'inventaire et des adoptions. Elle permet aux clients, aux vétérinaires et aux administrateurs d'accéder à des outils interactifs pour améliorer l'organisation et les soins aux animaux.";

    document.querySelector(".AcercaDeMiText").innerHTML = "À propos de moi";
    document.querySelector(".infoMe").innerHTML = `💻 Je suis Luis Henao, un développeur fullstack junior passionné par la technologie et l'apprentissage continu. <br><br>
    
    👨‍💻 Je me distingue par mon organisation, ma capacité à résoudre des problèmes et mon travail en équipe. J'aime apprendre de nouvelles technologies et me tenir à jour avec les tendances du développement.
    <br><br>
    🚀 Mon objectif est de continuer à évoluer en tant que développeur, d'apporter de la valeur à des projets innovants et de collaborer avec des équipes dynamiques où je peux améliorer mes compétences et partager mes connaissances.`;

    //Contacto
    
    document.getElementById("descargaCv").innerHTML = "Télécharger le CV";
    document.getElementById("contactoH2").innerHTML = "Contact";
    document.getElementById("nameLabel").innerHTML = "Nom";
    document.getElementById("name").placeholder = "Nom";
    document.getElementById("phoneLabel").innerHTML = "Téléphone";
    document.getElementById("phone").placeholder = "Téléphone";
    document.getElementById("emailLabel").innerHTML = "Email";
    document.getElementById("email").placeholder = "Email";
    document.getElementById("messageLabel").innerHTML = "Message";
    document.getElementById("message").placeholder = "Message";
    document.getElementById("btn").value = "Envoyer";
    document.querySelector(".HabilidadesText").innerHTML = "Compétences";
    document.getElementById("problemText").innerHTML = "Résolution de problèmes";
    document.getElementById("teamText").innerHTML = "Travail d'équipe";
    document.getElementById("organizationText").innerHTML = "Organisation";
    document.getElementById("learningText").innerHTML = "Apprentissage continu";



    //derechos de autor
    document.querySelector(".derechos").innerHTML = " &copy; 2025 Luis Henao Campuslands. Tous droits réservés.";
}



document.querySelectorAll(".idiomasOculto p").forEach(element => {
    element.addEventListener("click", () => {
        document.querySelector(".idiomasOculto").open=false
    })
});


document.querySelector(".espanol").addEventListener("click", () => {

    changeSpanish()
});
document.querySelector(".ingles").addEventListener("click", () => {
    
    changeEnglish()
});
document.querySelector(".Frances").addEventListener("click", () => {
    
    changeFrench()
});
