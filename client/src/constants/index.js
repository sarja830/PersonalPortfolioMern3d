import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    paytm,
    carrent,
    jobit,
    tripguide,
    journal,
    threejs,
    paytmmall,
} from "../assets";

export const navLinks = [ 
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "research",
        title: "Research",
    },
    {
        id: "testimonials",
        title: "Testimonials",
    },
    {
        id: "contact",
        title: "Contact",
    },

    {
        id: "resume",
        title: "Resume",
    },


];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Machine Learning Enthusiast",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];


    

const experiences = [
    {
        title: "University At Buffalo",
        company_name: "Master's in Computer Science & Engineer",
        icon: tesla,
        iconBg: "white",
        date: "August 2022 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
        link:"https://www.buffalo.edu/"
    },
    {
        title: "Paytm",
        company_name: "Software Development Engineer",
        icon: paytm,
        iconBg: "white",
        date: "June 2021 - Aug 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
        link:"https://paytm.com/"
    },
    {
        title: "Paytm Mall",
        company_name: "Software Developer intern",

        icon: paytmmall,
        iconBg: "white",
        date: "January 2021 - June 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
        link:"https://paytmmall.com/"
    },
    {
        title: "Ramaiah Institute of Technology, VTU",
        company_name: "Bachelor of Engineering in Information Science and Engineering",
        icon: starbucks,
        iconBg: "white",
        date: "June 2017 - July 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
        link:"https://www.msrit.edu/"
    }
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];
const name = {name: "Sarthak",
descriptionLine1: "hello I am there",
descriptionLine2: "in developing stage"

}
const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];
const journals =[{
    name: "Assessment and Prediction of PM2.5 in Delhi in View of Stubble Burn from Border States Using Collaborative Learning Model",
    description:
        "A thick layer of smog blankets can be seen in Delhi," +
        " India in November, the primary season of stubble burning. " +
        " In this paper, the author attempts to estimate the value of PM2.5 in Delhi," +
        " mainly due to stubble burning in neighboring states. " +
        "Various meteorological parameters are considered like wind speed, temperature, and relative humidity. The model used here is based on collaborative learning (stacking regression) which is trained using the out-of-folds predictions based on the complete training set, later the meta-regression is trained based on the outputs of the different regression methods in the group. The presented model is validated using different machine-learning methods, statistical measures, and the real-time stubble data of Delhi. ",
    tags: [
        {
            name: "Journal",
            color: "blue-text-gradient",
        },
        {
            name: "Springer",
            color: "orange-text-gradient",
        },
        {
            name: "Aerosol Science and Engineering",
            color: "green-text-gradient",
        }
    ],
    image: journal,
    source_code_link: "https://link.springer.com/article/10.1007/s41810-020-00083-1",
}]

export { name ,services, technologies, experiences, testimonials,journals, projects };