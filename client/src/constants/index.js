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
    spark,
    hadoop,
    kafka,
    intellij,
    vscode,
    c,
    java,
    python,
    jenkins, postgres, rabbitmq, springboot,
    theindiancraftstore

} from "../assets";
import {faJenkins} from "@fortawesome/free-brands-svg-icons";

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
        title: "Software Engineer",
        icon: creator,
    },
];

const languages = [
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Javascript",
        icon: javascript,
    },
    {
        name: "Typescript",
        icon: typescript,
    },
    {
        name: "Css",
        icon: css,
    },
    {
        name: "C",
        icon: c,
    },
    {
        name: "Bash",
        icon: html,
    }
];

const others = [

    {
        name: "Git",
        icon: git,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "PostgreSQL",
        icon: postgres,
    },
    {
        name: "Docker",
        icon: docker,
    },
    {
        name: "Heroku",
        icon: html,
    },
    {
        name: "Jenkins",
        icon: jenkins,
    },
    {
        name: "Kafka",
        icon: kafka,
    },
    {
        name: "RabbitMq",
        icon: rabbitmq,
    },
    {
        name: "Intellij",
        icon: intellij,
    },
    {
        name: "VS Code",
        icon: vscode,
    },


];

const frameworks = [
    {
        name: "React",
        icon: reactjs,
    },
    {
        name: "Node.js",
        icon: nodejs,
    },
    {
        name: "Spring Boot",
        icon: springboot,
    },
    {
        name: "Apache Spark",
        icon: spark,
    },{
        name: "Apache Hadoop",
        icon: hadoop,
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
            "Transcript  "
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
            " Rewriting the existing PHP code base in Spring Boot and Node.Js for making the system more robust and scalable for Paytm loan collection and automation platform",
            "Designed and developed asynchronous APIs for bulk managing of products by the sellers of Paytm ecommerce mall",
            "Automated CI/CD pipelines to deploy Docker Image to Kubernetes Cluster" ,
            "Implemented a logging framework for improved error handling and code debugging as part of code hygiene project"

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
            "Responsible for creating backend APIs for upcoming automated notification features in Paytm ecommerce mall"
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
            "Transcript"
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
        company: "Paytm",
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
const name = {
    name: ["Sarthak"],
    descriptionLine1: "",
    descriptionLine2: ""

}
const qualities =
    ["Avid Learner","Enthusiastic","Techie"]

const projects = [
    {
        name: "The Indian Craft Store",
        description:
            "\"The Indian Craft Store\" is an efficient and user-friendly platform that connects buyers and sellers of handmade art and craft products, promoting and supporting India's rich cultural heritage.",
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
                name: "React-bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: theindiancraftstore,
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

export { name ,services, frameworks,others,languages, experiences, testimonials,journals,qualities, projects };