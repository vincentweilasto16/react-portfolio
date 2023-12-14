import {
    mobile,
    backend,
    creator,
    web,
    // html,
    // css,
    // javascript,
    nodejs,
    reactjs,
    angular,
    threejs,
    springboot,
    laravel,
    codeigniter,
    outsystems,
    mongodb,
    mysql,
    tailwind,
    bootstrap,
    ionic,
    git,
    bca,
    festivo,
    company,
    goto,
    kemnaker,
    workit,
    manasikmaya,
    jets,
    ngobatin,
    aniboys,
    project
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Fullstack Developer",
        icon: web,
    },
    {
        title: "Java Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Frontend Developer",
        icon: creator,
    },
];

const technologies = [
    // {
    //     name: "HTML",
    //     icon: html,
    // },
    // {
    //     name: "CSS",
    //     icon: css,
    // },
    // {
    //     name: "JavaScript",
    //     icon: javascript,
    // },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "SpringBoot",
        icon: springboot,
    },
    {
        name: "Laravel",
        icon: laravel,
    },
    {
        name: "CodeIgniter",
        icon: codeigniter,
    },
    {
        name: "Outsystems",
        icon: outsystems,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "Ionic",
        icon: ionic,
    },
    {
        name: "Git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Fullstack Developer",
        company_name: "Festivo",
        job_type: "Internship",
        icon: festivo,
        iconBg: "#E6DEDD",
        date: "February 2022 - July 2022",
        responsibilities: [
            "Develop new web based application.",
            "Using MySQL as database.",
            "Maintenance feature and communicate with user/clients.",
            "Create and develop other features needed.",
            "Build web apps using Laravel framework.",
            "Hosting web apps.",
            "Daily stand up with dev team and PM.",
            "Bug fixing.",
            "Create web apps from scratch.",
            "Create documentation.",
        ],
        tech: "PHP (Laravel Framework), HTML, CSS, JS, Three.js, MySQL, Bootstrap"
    },
    {
        title: "Frontend Web Developer",
        company_name: "PT. Ammana Fintek Syariah",
        job_type: "Freelance",
        icon: company,
        iconBg: "#383E56",
        date: "June 2022 - September 2022",
        responsibilities: [
            "Maintenance existing application.",
            "Develop application with Angular and Ionic Framework.",
            "Create and develop other features needed.",
            "Daily stand up with dev team and frontend lead.",
            "Bug fixing.",
            "Fix a review code to get an approve for pull request’s.",
        ],
        tech: "Angular, Ionic Framework"
    },
    {
        title: "Application Developer",
        company_name: "PT Bank Central Asia (BCA)",
        job_type: "Internship",
        icon: bca,
        iconBg: "#FFF",
        date: "September 2022 - February 2023",
        responsibilities: [
            "Developing web based application for internal usage.",
            "Create and develop other features needed.",
            "Integrating to data warehouse and with other application through API.",
            "Daily stand up with dev team and PM.",
            "Bug fixing.",
            "Ensure the quality of the application.",
            "Create documentation.",
        ],
        tech: "Outsystems"
    },
    {
        title: "GoTo Devcamp Class of 2023",
        company_name: "GoTo Group",
        job_type: "Devcamp",
        icon: goto,
        iconBg: "#FFF",
        date: "December 2023",
        responsibilities: [
            "Selected as one of 51 participants from 2700+ other applicants with 6-day intensive training.",
            "Joining backend curriculum and learn some knowledge such as Go Programming Language, Clean Architecture, Database & Server, Caching, Message Queue, Monitoring, and Testing.",
            "Participate in Hackathon consist of 3 member.",
        ],
        tech: "Go, PostgreSQL, GraphQL, Redis, NSQ, Java, Grafana"
    },
];

const projects = [
    {
        name: "Aniboys",
        description:
            "Web-based application for streaming anime website.",
        type: "Personal Project",
        date: "10/2023",
        people: "3",
        role: "Backend Developer, Frontend Developer",
        responsibilities: [
            "Develop new Rest API application using SpringBoot and MVC architecture.",
            "Using MySQL as database.",
            "Do Unit Testing using Mockito.",
            "Testing API on Postman.",
            "Create documentation for API using Confluence.",
            "Develop client-side using React.",
            "Fetch API from server-side to the client-side.",
            "Design the client-side.",
            "Create and develop other features needed.",
        ],
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "SpringBoot",
                color: "green-text-gradient",
            },
            {
                name: "MySQL",
                color: "pink-text-gradient",
            },
            {
                name: "Postman",
                color: "orange-text-gradient",
            },
        ],
        image: aniboys,
        source_code_link: "https://github.com/FernandoChai/aniboys",
    },
    {
        name: "Rest API",
        description:
            "Create API for user to login, register, logout, create product, update product, remove product, and view list of product.",
        type: "Personal Project",
        date: "09/2023",
        people: "1",
        role: "Backend Developer",
        responsibilities: [
            "Develop new Rest API application using Node JS and MVC architecture.",
            "Using MySQL as database.",
            "Handle API error.",
            "Build middleware for error and authentication.",
            "Do Unit Testing.",
            "Testing API on Postman.",
            "Create simple documentation for API.",
        ],
        tags: [
            {
                name: "Nodejs",
                color: "blue-text-gradient",
            },
            {
                name: "MySQL",
                color: "pink-text-gradient",
            },
            {
                name: "Postman",
                color: "orange-text-gradient",
            },
        ],
        image: project,
        source_code_link: "https://github.com/vincentweilasto16/express_restful_api",
    },
    {
        name: "Employee Manager Project",
        description:
            "Create an API for manage employee and fetch to the frontend.",
        type: "Personal Project",
        date: "08/2023",
        people: "1",
        role: "Backend Developer, Frontend Developer",
        responsibilities: [
            "Develop new Rest API (server-side) application using SpringBoot and MVC architecture.",
            "Using MySQL as database.",
            "Testing API on Postman.",
            "Develop client-side using Angular.",
            "Fetch API from server-side to the client-side.",
            "Design the client-side.",
            "Create and develop other features needed.",
        ],
        tags: [
            {
                name: "Angular",
                color: "blue-text-gradient",
            },
            {
                name: "SpringBoot",
                color: "green-text-gradient",
            },
            {
                name: "MySQL",
                color: "pink-text-gradient",
            },
            {
                name: "Postman",
                color: "orange-text-gradient",
            },
        ],
        image: project,
        source_code_link: "https://github.com/vincentweilasto16/employee-manager-app",
    },
    {
        name: "Rest API Project",
        description:
            "Create API for user to login, register, logout, and manage contact.",
        type: "Personal Project",
        date: "08/2023",
        people: "1",
        role: "Backend Developer",
        responsibilities: [
            "Develop new Rest API application using SpringBoot and MVC architecture.",
            "Using MySQL as database.",
            "Handle API error.",
            "Do Unit Testing.",
            "Testing API on Postman.",
            "Secure the application.",
            "Create simple documentation for API.",
        ],
        tags: [
            {
                name: "SpringBoot",
                color: "green-text-gradient",
            },
            {
                name: "MySQL",
                color: "pink-text-gradient",
            },
            {
                name: "Postman",
                color: "orange-text-gradient",
            },
        ],
        image: project,
        source_code_link: "https://github.com/vincentweilasto16/springboot_restful_api",
    },
    {
        name: "Tracking Management System",
        description:
            "Web based application for internal usage to monitor and track new employee onboarding progress.",
        type: "Internship Project",
        date: "09/2022",
        people: "5",
        role: "Application Developer",
        responsibilities: [
            "Developing web based application for internal usage.",
            "Create and develop other features needed.",
            "Integrating to data warehouse and with other application through API.",
            "Daily stand up with dev team and PM.",
            "Bug fixing.",
            "Do UAT Testing",
            "Ensure the quality of the application.",
            "Create documentation.",
        ],
        tags: [
            {
                name: "OutSystems",
                color: "blue-text-gradient",
            },
        ],
        image: jets,
        source_code_link: null,
    },
    {
        name: "NgobatIn",
        description:
            "Web based medicine marketplace application for selling and buying medicine.",
        type: "College Project",
        date: "08/2022",
        people: "3",
        role: "Fullstack Developer",
        responsibilities: [
            "Develop new web based application.",
            "Using MySQL as database.",
            "Integrating with Google Maps API.",
            "Create and develop other features needed.",
            "Build web apps using Laravel framework.",
            "Hosting web apps",
            "Bug fixing.",
            "Testing web apps.",
        ],
        tags: [
            {
                name: "Laravel",
                color: "blue-text-gradient",
            },
            {
                name: "MySQL",
                color: "green-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
            {
                name: "JQuery",
                color: "orange-text-gradient",
            },
        ],
        image: ngobatin,
        source_code_link: "https://github.com/FernandoChai/NgobatIn",
    },
    {
        name: "Kemnaker Project",
        description:
            "Web based application for Kementrian Ketenagakeerjaan Republic Indonesia (Kemnaker).",
        type: "Freelance Project",
        date: "06/2022",
        people: "> 10",
        role: "Frontend Web Developer",
        responsibilities: [
            "Maintenance existing application.",
            "Develop application with Angular and Ionic.",
            "Create and develop other features needed.",
            "Daily stand up with dev team and frontend lead.",
            "Bug fixing.",
            "Fix a review code to do a pull request’s",
        ],
        tags: [
            {
                name: "Angular",
                color: "blue-text-gradient",
            },
            {
                name: "Ionic",
                color: "green-text-gradient",
            },
        ],
        image: kemnaker,
        source_code_link: null,
    },
    {
        name: "Manasik Maya",
        description:
            "Web based application for ticketing system to buy and sell manasik learning course.",
        type: "Internship Project",
        date: "02/2022",
        people: "8",
        role: "Fullstack Developer",
        responsibilities: [
            "Develop new web based application.",
            "Using MySQL as database.",
            "Maintenance feature and communicate with user/clients.",
            "Daily stand up with dev team and frontend lead.",
            "Create and develop other features needed.",
            "Build web apps using Laravel framework.",
            "Hosting web apps.",
            "Daily stand up with dev team and PM",
            "Bug fixing",
            "Create web apps from scratch",
            "Create documentation"
        ],
        tags: [
            {
                name: "Laravel",
                color: "blue-text-gradient",
            },
            {
                name: "MySQL",
                color: "green-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
            {
                name: "Three.js",
                color: "orange-text-gradient",
            },
        ],
        image: manasikmaya,
        source_code_link: null,
    },
    {
        name: "WorkIt",
        description:
            "Web-Based Application (front-end, back-end) to brings together job seeker and job provider.",
        type: "College Project",
        date: "10/2021",
        people: "3",
        role: "Fullstack Developer",
        responsibilities: [
            "Develop new web based application.",
            "Using MySQL as database.",
            "Maintenance feature and communicate with user/clients.",
            "Daily stand up with dev team and frontend lead.",
            "Create and develop other features needed.",
            "Build web apps using Laravel framework.",
            "Hosting web apps.",
            "Daily stand up with dev team and PM",
            "Bug fixing",
            "Create web apps from scratch",
            "Create documentation"
        ],
        tags: [
            {
                name: "CodeIgniter",
                color: "blue-text-gradient",
            },
            {
                name: "MySQL",
                color: "green-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: workit,
        source_code_link: "https://github.com/vincentweilasto16/WorkIt",
    },
];

export { services, technologies, experiences, projects };