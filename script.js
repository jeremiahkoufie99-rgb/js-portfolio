// 1. Personal Information

const personalInfo = {
    name: "Asad",
    role: "Aspiring Full-Stack Developer",

    about: "I am a passionate beginner software developer interested in building modern websites and applications. I enjoy learning new technologies and solving real-world problems."
};


// 2. My Skills

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "MongoDB"
];


// 3. My Projects

const projects = [
    {
        title: "Susu Management System",
        description: "A web application designed to manage Susu contributions and members."
    },

    {
        title: "Weather App",
        description: "A weather application that displays weather information."
    },

    {
        title: "Movie Hub",
        description: "A website where users can explore movies."
    }
];


// 4. Display About Information

document.getElementById("about-text").textContent =
    personalInfo.about;


// 5. Display Skills

const skillsContainer =
    document.getElementById("skills-container");

skills.forEach(function(skill) {

    const skillElement = document.createElement("span");

    skillElement.textContent = skill;

    skillElement.className =
        "bg-blue-600 px-6 py-3 rounded-lg";

    skillsContainer.appendChild(skillElement);

});


// 6. Display Projects

const projectsContainer =
    document.getElementById("projects-container");

projects.forEach(function(project) {

    const projectCard = document.createElement("div");

    projectCard.className =
        "bg-slate-900 p-6 rounded-xl";

    projectCard.innerHTML = `
        <h3 class="text-xl font-bold text-blue-400 mb-4">
            ${project.title}
        </h3>

        <p class="text-gray-400">
            ${project.description}
        </p>
    `;

    projectsContainer.appendChild(projectCard);
    console.log("my portfolio javascript is working");

});         