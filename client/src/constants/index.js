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
    nodejs,
    mongodb,
    git,
    docker,
    ramaiah,
    ub,
    paytm,
    journal,
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
    theindiancraftstore, portfolio, mapreduce, corona, hollytics, mykindainsta, lifetreewny, gshop
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
    // {
    //     id: "testimonials",
    //     title: "Testimonials",
    // },
    {
        id: "resume",
        title: "Resume",
    },
    {
        id: "contact",
        title: "Contact",
    },


];
const resumeDownloadLink = "https://drive.google.com/uc?export=download&id=1qte9396ENtaz2Lx_0T4CvE3bgBlXOX_c";

const resumeIframeviewLink = "https://drive.google.com/file/d/1qte9396ENtaz2Lx_0T4CvE3bgBlXOX_c/preview";

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



const githubLink ="https://github.com/sarja830";
const experiences = [
    {
        title: "University at Buffalo, SUNY",
        company_name: "Master's in Computer Science & Engineering",
        subexperience :[
            {
                title:"Research Foundation, SUNY",
                company_name: "Graduate Research Assistant",
                icon: paytm,
                iconBg: "white",
                date: "June 2022 - Present",
                points: [
                    ` Building a SaaS product which empowers traditional product-based businesses and nontraditional service-based enterprises to efficiently transition their ventures online. `,
 `It enables price negotiation, order management, and proposal tracking for customers and owners`,
 `Developed utilizing the multitenant architecture which adheres to the separation of concern design principle.`

                ],
                link:"https://www.rfsuny.org/",
                Project : "Gshop",
                Date:"June 05, 2023 - Present"
            }
        ],
        icon: ub,
        iconBg: "white",
        date: "August 2022 - Present",
        points: [
        ],
        viewTranscript:"https://drive.google.com/file/d/1A-b2aBjl7FKhF8nGudHTy2wOIq_Q7M90/view?usp=sharing",
        transcriptLink:"https://drive.google.com/uc?export=download&id=1A-b2aBjl7FKhF8nGudHTy2wOIq_Q7M90",
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
        icon: ramaiah,
        iconBg: "white",
        date: "June 2017 - July 2021",
        points: [

        ],
        viewTranscript:"https://drive.google.com/file/d/1xkT4siExyJVE5oMJVn7fCq_xq7EByu3T/view?usp=sharing",
        transcriptLink: "https://drive.google.com/uc?export=download&id=1xkT4siExyJVE5oMJVn7fCq_xq7EByu3T",
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
    descriptionLine1: "This website is a reflection of my passion for web development and my commitment to learn innovative and engaging technologies.\n",
    descriptionLine2: "Thank you for visiting, and I hope you enjoy exploring my work!"

}
const qualities =
    ["Avid Learner","Curious","Enthusiastic","Hardworking"]
const projects = [
    {
        name: "Gshop",
        description: [

            `Empowerment: Designed to empower both traditional product-based businesses and nontraditional service-based enterprises to transition effectively to the online space.`,

            `Price Negotiation: The platform provides tools for businesses to engage in virtual price negotiations with their customers or clients, facilitating agreement on product or service pricing.`,

            `Order Management: Seamless order management is a key focus, ensuring efficient processes for order placement, tracking, and fulfillment, benefiting both customers and business owners.`,

            `Proposal Tracking: For service-based businesses features to track proposals, facilitating efficient communication.`,

            `Multitenant Architecture: Allowing a single instance of the software to serve multiple customers.`,

        ],
        tags: [
            {
                name: "Node.Js",
                color: "blue-text-gradient",
            },
            {
                name: "postgreSQL",
                color: "green-text-gradient",
            },
            {
                name: "React",
                color: "pink-text-gradient",
            },
        ],
        image: gshop,
        source_code_link: "",
        view_link:"https://www.lifetreewny.com/"
    },
    {
        name: "Lifetree WNY Services",
        description: [`Efficient Operations: Developed a web app to streamline daily business tasks and improve operational efficiency.`,
            ` Customer Management: Implemented a system to track proposals and manage potential customers, enhancing customer relationship management.`,
            `QuickBooks Integration: Enabled seamless invoicing by integrating with QuickBooks, optimizing financial management.` ,
            `Geolocation for Crew: Integrated map coordinates to display job locations, boosting crew efficiency by enabling them to tackle nearby tasks effectively.`],
        tags: [
            {
                name: "Node.Js",
                color: "blue-text-gradient",
            },
            {
                name: "postgreSQL",
                color: "green-text-gradient",
            },
            {
                name: "React",
                color: "pink-text-gradient",
            },
        ],
        image: lifetreewny,
        source_code_link: "",
        view_link:"https://www.lifetreewny.com/"
    },

    {
        name: "The Indian Craft Store",
        description:
            [`Buyer-Seller Connection:
Connects buyers and sellers of handmade art and craft products in a single platform.`,
                `Security and Authentication:
Offers authentication, login, and password reset features for a secure trading environment.`,
                `Product Search and Filtering:
Provides customers with easy product search and filtering options to find desired items.`,
                `Multi-Tenant User Panel:
Offers customers a user panel to view and track their order status across multiple orders.`,
                `Seller Management Panel:
Includes an admin panel that empowers sellers to manage their product listings efficiently.`,
                `Email Notifications:
Keeps customers and sellers informed with email notifications triggered by significant events, like order confirmation, shipping, and delivery updates.`
                    ],
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Mongodb",
                color: "green-text-gradient",
            },
            {
                name: "Node.Js",
                color: "pink-text-gradient",
            },
        ],
        image: theindiancraftstore,
        source_code_link: "https://theindiancraftstore.netlify.app/",
        view_link:"https://theindiancraftstore.netlify.app/"
    },
    {
        name: "Personal Portfolio 3D",
        description:
            [   `Tailored Showcase:

Offers a curated selection of your finest work and accomplishments.`,
                `MERN Stack Foundation:

Built on the MERN stack (MongoDB, Express, React, Node.js) for a robust and dynamic web experience.`,
                `Visual Journey:

Presents a visual journey through your professional achievements, providing a comprehensive overview.`,
                `Interactive 3D Elements:

Utilizes Three.js to incorporate interactive 3D models and animations, enhancing project presentation.`,
                `Enhanced User Experience:

Creates a distinctive user experience by bringing projects to life with immersive visuals.`,
                `Diverse Appeal:

Appeals to a broad audience, whether interested in web development, 3D design, or emerging technologies.`
],
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Node.Js",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
            {
                name: "Mongodb",
                color: "orange-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/",
        view_link:"https://sarthakjain.works/"
    },
    {
        name: "Scalable Word Counting ",
        description:
            [
                `Hadoop-based Analysis:
Utilizes Hadoop to analyze extensive text datasets.`,
    `MapReduce Implementation:
    Applies the MapReduce programming model to distribute processing tasks across a Hadoop cluster.`,
    `Word Occurrence Count:
    Counts occurrences of words in a provided text corpus.`,
    `Noise Reduction Techniques:
    Enhances accuracy by eliminating stop words and punctuation marks from the analysis.`,
    `Improved Analysis Quality: leads to higher-quality analysis results.`],
        tags: [
            {
                name: "Hadoop",
                color: "blue-text-gradient",
            },
            {
                name: "Java",
                color: "green-text-gradient",
            },
            {
                name: "Map Reduce",
                color: "pink-text-gradient",
            },
        ],
        image: mapreduce,
        source_code_link: "https://github.com/",
        view_link:"https://sarthakjain.works/"
    },
    {
        name: "Hollytics",
        description:
            [
            ,`Hollywood Data Analysis Tool:

Developed to analyze Hollywood data and extract meaningful insights about current industry trends.`
,`Web-Based Platform:

The project takes the form of a web-based platform for easy accessibility and interaction.`
,`IMDb Dataset Integration:

Utilizes an automated Python script to load data from the IMDb dataset into a PostgreSQL database.`
,`Sophisticated SQL Queries:

Leverages complex SQL queries to derive accurate and insightful information from the data.`


            ],

                tags: [
    {
        name: "PostgreSQL",
        color: "blue-text-gradient",
    },
    {
        name: "Python",
        color: "green-text-gradient",
    },
    {
        name: "Bash",
        color: "pink-text-gradient",
    },
],
    image: hollytics,
    source_code_link: "https://github.com/",
    view_link:"https://sarthakjain.works/"
},
{
    name: "COVID combat",
        description:
    [
        `COVID-19 Reporting Platform:

Developed to aid in pandemic control by allowing users to report COVID-19 positive suspects in their vicinity`
        ,`User-Generated Suspect Reports:
Enables users to easily report potential COVID-19 cases, contributing to a collective effort for virus containment.`,
        `District-Wise Data Aggregation:

Organizes and presents reported cases on a district-wise basis, aiding local decision-making`,
        `Early Detection Emphasis:

Aims to identify potential COVID-19 cases promptly, supporting early detection strategies`
    ],
        tags: [
    {
        name: "HTML",
        color: "blue-text-gradient",
    },
    {
        name: "CSS",
        color: "green-text-gradient",
    },
    {
        name: "JSP",
        color: "pink-text-gradient",
    },
],
    image: corona,
    source_code_link: "https://github.com/sarja830/COVID-combat",
    view_link:"https://github.com/sarja830/COVID-combat"
},
{
    name: "Mykindainsta",
        description:
    [
        `MERN Stack Social Platform:

Developed using the MERN stack for a comprehensive social media experience.`
,`Personalized Connection:

Offers users tailored connections and sharing based on individual interests.`
,`Data Security with Encryption:

Prioritizes security by using SHA-256 encryption to protect sensitive user data, including passwords.`
,`User-Friendly Interaction:

Provides a friendly interface for easy profile creation, post sharing, and interaction with others.`
    ],
        tags: [
    {
        name: "React",
        color: "blue-text-gradient",
    },
    {
        name: "Material UI",
        color: "green-text-gradient",
    },
    {
        name: "Node.Js",
        color: "pink-text-gradient",
    },
    {   name: "Mongodb",
        color: "orange-text-gradient",
    },
],
    image: mykindainsta,
    source_code_link: "https://github.com/sarja830/Mykindainsta/",
    view_link:"https://github.com/sarja830/Mykindainsta/"
},
];
const journals =[{
    name: "Assessment and Prediction of PM2.5 in Delhi in View of Stubble Burn from Border States Using Collaborative Learning Model",
    description:
        [    "A thick layer of smog blankets can be seen in Delhi," +
        " India in November, the primary season of stubble burning. " +
        " In this paper, the author attempts to estimate the value of PM2.5 in Delhi," +
        " mainly due to stubble burning in neighboring states. " +
        "Various meteorological parameters are considered like wind speed, temperature, and relative humidity. The model used here is based on collaborative learning (stacking regression) which is trained using the out-of-folds predictions based on the complete training set, later the meta-regression is trained based on the outputs of the different regression methods in the group. The presented model is validated using different machine-learning methods, statistical measures, and the real-time stubble data of Delhi. "],
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
const leetcodeProfile ='https://leetcode.com/sarja830/'
const contactViaEmail= 'mailto:sjain34@vuffalo.edu'
const mediumBlog= "https://medium.com/@sarthjain830/different-views-of-a-binary-tree-left-view-and-right-view-of-a-binary-tree-with-breadth-first-de4b5675bd69"


export { name ,services, mediumBlog, githubLink, contactViaEmail, frameworks, leetcodeProfile, others,languages, experiences, testimonials,journals,qualities, projects, resumeIframeviewLink, resumeDownloadLink };