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
document.getElementById("menuH").addEventListener("click", function() {
    document.getElementById("menuHambur").style.right="-10rem";
});
document.getElementById("menu").addEventListener("click", function() {
    document.getElementById("menuHambur").style.right="0rem";
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

    // Header
    document.querySelector(".home").innerHTML = "Inicio";
    document.querySelector(".proyectos").innerHTML = "Proyectos";
    document.querySelector(".sobreMi").innerHTML = "Sobre mí";
    document.querySelector(".contacto").innerHTML = "Contacto";

    // Principal
    document.querySelector(".saludo").innerHTML = "¡Hola a todos!, soy";

    // Proyectos
    document.querySelector(".proyectosText").innerHTML = "Proyectos";
    document.querySelector("#PokeAPI").innerHTML = "Es un programa que usa la PokeAPI y simula la Pokédex, mostrando los Pokémon con su número y nombre. Permite avanzar o retroceder de uno en uno o buscarlos por número.";

    document.querySelector("#Tibook").innerHTML = "Tibook es una plataforma diseñada para estudiantes que busca mejorar el acceso al aprendizaje a través de herramientas interactivas, contenido educativo y una comunidad colaborativa. Su objetivo es hacer que el estudio sea más dinámico y accesible para todos.";

    document.querySelector("#campus").innerHTML = "CampusLands ERP es una plataforma de simulación diseñada en Python para gestionar el proceso académico de los estudiantes en CampusLands. Permite registrar y hacer seguimiento a los estudiantes, asignarlos a rutas de aprendizaje, evaluar su desempeño y generar reportes de progreso de manera eficiente.";

    document.querySelector("#superHero").innerHTML = "Esta aplicación web permite consultar información detallada de superhéroes utilizando la SuperHero API. Al ingresar el ID de un superhéroe (entre 1 y 732), la aplicación muestra en tablas organizadas los datos completos del personaje: nombre e imagen, estadísticas de poder (inteligencia, fuerza, velocidad, resistencia, poder y combate), biografía, apariencia física, ocupación, base de operaciones y conexiones con otros personajes. La interfaz presenta toda esta información de manera estructurada y visual para facilitar la consulta.";

    document.querySelector(".AcercaDeMiText").innerHTML = "Sobre mí";
    document.querySelector(".infoMe").innerHTML = `💻 Soy Luis Henao, desarrollador fullstack junior apasionado por la tecnología y el aprendizaje constante. <br><br>
    💡 Manejo lenguajes de programación como <b>JavaScript, Java, Python, HTML y CSS</b>. Para la gestión de bases de datos, trabajo con <b>MySQL y PostgreSQL</b>, y en frameworks utilizo <b>Spring Boot</b>.
    <br><br>
    👨‍💻 Me destaco por mi organización, capacidad de resolución de problemas y trabajo en equipo. Disfruto aprender nuevas tecnologías y mantenerme actualizado con las tendencias del desarrollo.
    <br><br>
    🚀 Mi objetivo es seguir creciendo como programador, aportar valor en proyectos innovadores y colaborar en equipos dinámicos donde pueda mejorar mis habilidades y compartir mis conocimientos.`;

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
    
    //header
    document.querySelector(".home").innerHTML="Home"
    document.querySelector(".proyectos").innerHTML="Projects "
    document.querySelector(".sobreMi").innerHTML="About me"
    document.querySelector(".contacto").innerHTML="Contact"
    
    //principal
    document.querySelector(".saludo").innerHTML="Hello everyone!!!, I am"
    
    //proyectos
    document.querySelector(".proyectosText").innerHTML="Projects"
    document.querySelector("#PokeAPI").innerHTML="It is a program that uses the PokeAPI and simulates the Pokédex, displaying Pokémon with their number and name. It allows moving forward or backward one by one or searching for them by number"
    
    document.querySelector("#Tibook").innerHTML="Tibook is a platform designed for students that aims to enhance learning access through interactive tools, educational content, and a collaborative community. Its goal is to make studying more dynamic and accessible for everyone."
    
    document.querySelector("#campus").innerHTML="CampusLands ERP is a simulation platform designed in Python to manage the academic process of students at CampusLands. It allows for student registration and tracking, assignment to learning paths, performance evaluation, and efficient progress report generation."
    
    document.querySelector("#superHero").innerHTML="CThis web application allows users to retrieve detailed information about superheroes using the SuperHero API. By entering a superhero ID (between 1 and 732), the application displays the character’s complete data in organized tables, including name and image, power statistics (intelligence, strength, speed, durability, power, and combat), biography, physical appearance, occupation, base of operations, and connections with other characters. The interface presents all this information in a structured and visual manner for easy reference."
    
    document.querySelector(".AcercaDeMiText").innerHTML="About me"
    document.querySelector(".infoMe").innerHTML=`💻 I’m Luis Henao, a junior full-stack developer passionate about technology and continuous learning. <br><br>
    💡 I work with programming languages such as <b>JavaScript, Java, Python, HTML, and CSS</b>. For database management, I use <b>MySQL and PostgreSQL</b>, and I work with frameworks like <b>Spring Boot</b>.
    <br><br>
    👨‍💻 I stand out for my organization, problem-solving skills, and teamwork. I enjoy learning new technologies and staying up to date with development trends.
    <br><br>
    🚀 My goal is to keep growing as a developer, contribute to innovative projects, and collaborate with dynamic teams where I can improve my skills and share my knowledge.`

    //derechos de autor
    document.querySelector(".derechos").innerHTML=" &copy; 2025 Luis Henao Campuslands. All rights reserved."

}

function changeFrench() {
    // Changement de langue
    document.querySelector(".espanol").innerHTML = "Espagnol";
    document.querySelector(".ingles").innerHTML = "Anglais";
    document.querySelector(".Frances").innerHTML = "Français";

    // Menu hamburger
    document.querySelector("#homeM").innerHTML = "Accueil";
    document.querySelector("#proyectosM").innerHTML = "Projets";
    document.querySelector("#sobreMiM").innerHTML = "À propos de moi";
    document.querySelector("#contactoL").innerHTML = "Contact";

    // En-tête
    document.querySelector(".home").innerHTML = "Accueil";
    document.querySelector(".proyectos").innerHTML = "Projets";
    document.querySelector(".sobreMi").innerHTML = "À propos de moi";
    document.querySelector(".contacto").innerHTML = "Contact";

    // Principal
    document.querySelector(".saludo").innerHTML = "Bonjour à tous !!!, je suis";

    // Projets
    document.querySelector(".proyectosText").innerHTML = "Projets";
    document.querySelector("#PokeAPI").innerHTML = "C'est un programme qui utilise la PokeAPI et simule le Pokédex, affichant les Pokémon avec leur numéro et leur nom. Il permet d'avancer ou de reculer un par un ou de les rechercher par numéro.";

    document.querySelector("#Tibook").innerHTML = "Tibook est une plateforme conçue pour les étudiants qui vise à améliorer l'accès à l'apprentissage grâce à des outils interactifs, du contenu éducatif et une communauté collaborative. Son objectif est de rendre l'étude plus dynamique et accessible à tous.";

    document.querySelector("#campus").innerHTML = "CampusLands ERP est une plateforme de simulation conçue en Python pour gérer le processus académique des étudiants de CampusLands. Elle permet d'enregistrer et de suivre les étudiants, de les affecter à des parcours d'apprentissage, d'évaluer leurs performances et de générer des rapports de progression de manière efficace.";

    document.querySelector("#superHero").innerHTML = "Cette application web permet de consulter des informations détaillées sur les super-héros en utilisant l'API SuperHero. En entrant l'ID d'un super-héros (entre 1 et 732), l'application affiche les données complètes du personnage dans des tableaux organisés, y compris le nom et l'image, les statistiques de pouvoir (intelligence, force, vitesse, endurance, pouvoir et combat), la biographie, l'apparence physique, la profession, la base d'opérations et les connexions avec d'autres personnages. L'interface présente toutes ces informations de manière structurée et visuelle pour faciliter la consultation.";

    document.querySelector(".AcercaDeMiText").innerHTML = "À propos de moi";
    document.querySelector(".infoMe").innerHTML = `💻 Je suis Luis Henao, un développeur fullstack junior passionné par la technologie et l'apprentissage continu. <br><br>
    💡 Je maîtrise des langages de programmation comme <b>JavaScript, Java, Python, HTML et CSS</b>. Pour la gestion des bases de données, j'utilise <b>MySQL et PostgreSQL</b>, et je travaille avec des frameworks comme <b>Spring Boot</b>.
    <br><br>
    👨‍💻 Je me distingue par mon organisation, ma capacité à résoudre des problèmes et mon travail en équipe. J'aime apprendre de nouvelles technologies et me tenir à jour avec les tendances du développement.
    <br><br>
    🚀 Mon objectif est de continuer à évoluer en tant que développeur, d'apporter de la valeur à des projets innovants et de collaborer avec des équipes dynamiques où je peux améliorer mes compétences et partager mes connaissances.`;

    // Droits d'auteur
    document.querySelector(".derechos").innerHTML = " &copy; 2025 Luis Henao Campuslands. Tous droits réservés.";
}

var menuIdioma=0;
document.querySelector(".iconIdiomaOculto").addEventListener("click", () => {
    
    if (menuIdioma===0) {
        document.querySelector(".idiomasOculto").className="idiomasVisto"
        document.querySelectorAll(".idiomasVisto p").forEach(element => {
            element.addEventListener("click", () => {
                document.querySelector(".idiomasVisto").className="idiomasOculto"
                menuIdioma=0;
            })
        });
        menuIdioma=1;
        
    } else {
        document.querySelector(".idiomasVisto").className="idiomasOculto"
        menuIdioma=0;
        
    }
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