import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs, satisfly,
    nodejs,
    mongodb,
    git,
    docker,
    ramaiah,
    ub,
    paytm, researchFoundation,
    journal,
    paytmmall,
    spark,
    hadoop,
    kafka,
    intellij,
    vscode,
    c,
    java,
    php,
    python,
    jenkins,
    postgres,
    rabbitmq,
    springboot,
    theindiancraftstore,
    portfolio,
    mapreduce,
    corona,
    hollytics,
    mykindainsta,
    lifetreewny,
    gshop,
    aws,
    mysql,
    redis,
    nginx, billingmodule, comingsoon, neuralshift
} from "../assets";
import { faJenkins } from "@fortawesome/free-brands-svg-icons";

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
    //     id: "awards",
    //     title: "Awards",
    // },
    // {
    //     id: "testimonials",
    //     title: "Feedbacks",
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
        title: "Software Engineer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: mobile,
    },
    {
        title: "Frontend Developer",
        icon: backend,
    },
    {
        title: "Full Stack Developer",
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
    },
    {
        name: "PHP",
        icon: php,
    }

];

const others = [
    {
        name: "AWS Cloud",
        icon: aws
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
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "Redis",
        icon: redis
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
        name: "Docker",
        icon: docker,
    },
    {
        name: "Jenkins",
        icon: jenkins,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Heroku",
        icon: html,
    },


    {
        name: "Intellij",
        icon: intellij,
    },


    {
        name: "Nginx",
        icon: nginx
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
    }, {
        name: "Apache Hadoop",
        icon: hadoop,
    },


];

const githubLink = "https://github.com/sarja830";
const experiences = [
    {
        title: "Research Foundation, SUNY",
        company_name: "Software Engineer",
        icon: researchFoundation,
        iconBg: "white",
        date: "June 2022 - Present",
        points: [
            "Built a multi-tenant SaaS platform utilizing Node.js, React, Redux, PostgreSQL, and Redis cache featuring price negotiations helping service-based businesses easily transition their ventures online",
            "Integrated order tracking, proposal management, and efficient communication channels within individual instances",
            "Enforced authentication and role-based authorization to bolster platform security using JWT tokens",
            "Onboarded microservices on CI/CD pipeline using Github Actions, boosting efficiency by 84%",
            "Dockerized Applications to deploy using Kubernetes architecture",
            "Spearheaded the development of a centralized billing module for metering businesses and managing them on the platform bringing about a significant 80% decrease in manual workload",
        ],

        link: "https://www.rfsuny.org/",
        Project: "Anywhere-biz",
        Date: "June 05, 2023 - Present"
    },
    {
        title: "University at Buffalo, SUNY",
        company_name: "Master's in Computer Science & Engineering",
        // subexperience :[
        //     {
        //         title:"Research Foundation, SUNY",
        //         company_name: "Graduate Research Assistant",
        //         icon: paytm,
        //         iconBg: "white",
        //         date: "June 2022 - Present",
        //         points: [
        //             "Built a multi-tenant SaaS platform utilizing Node.js, React, Redux, PostgreSQL, and Redis cache featuring price negotiations helping service-based businesses easily transition their ventures online",
        //             "Integrated order tracking, proposal management, and efficient communication channels within individual instances",
        //             "Enforced authentication and role-based authorization to bolster platform security using JWT tokens",
        //             "Onboarded microservices on CI/CD pipeline using Github Actions, boosting efficiency by 84%"
        //         ],
        //
        //         link:"https://www.rfsuny.org/",
        //         Project : "Gshop",
        //         Date:"June 05, 2023 - Present"
        //     }
        // ],
        icon: ub,
        iconBg: "white",
        date: "August 2022 - Dec 2023",
        points: [
            `CGPA: 3.8/4.0`,
            `Winner of M&T Winter Coding Challenge 2024`,
            `2nd place winner in Innovate Our Ecosystem Hackathon2nd place winner in Innovate Our Ecosystem Hackathon
Issued by TechBuffalo and UB Blackstone Launchpad`
        ],
        viewTranscript: "https://drive.google.com/file/d/1A-b2aBjl7FKhF8nGudHTy2wOIq_Q7M90/view?usp=sharing",
        transcriptLink: "https://drive.google.com/uc?export=download&id=1A-b2aBjl7FKhF8nGudHTy2wOIq_Q7M90",
        link: "https://www.buffalo.edu/"
    },

    {
        title: "Paytm",
        company_name: "Software Engineer",
        icon: paytm,
        iconBg: "white",
        date: "Jan 2021 - Aug 2022",
        points: [
            "Engineered a multi-channel notifications engine for Paytm Creditmate employing Spring Boot and Kafka with multithreading, achieving a throughput of 1000 notifications per minute",
            "Built an end-to-end event-driven microservice architecture for file upload enabling sellers to bulk manage products reducing the processing time from 24+ hours to 5 minutes",
            "Designed and implemented an ONDC product ingestion flow using Spring Boot and Kafka, enabling seamless integration of over 50000 products daily and driving a $5M annual revenue increase for Paytm Mall",
            "Enhanced the performance of internal RESTful APIs for product and category catalog by implementing advanced caching and pagination strategies, achieving a 20% reduction in response time and fewer database calls",
            "Automated CI/CD pipelines to deploy Docker images in the Kubernetes cluster using Jenkins",
            "Led initiative to introduce a unified logging solution as a maven plugin in Java; reducing the debugging time by 33% as a part of a better engineering project resulting in the adoption by 70 repositories",
            "Tech Stack: Spring Boot, Node.js, AWS, Jenkins, Docker, Kafka, RabbitMQ, Elasticsearch Logstash Kibana, Redis"
        ],
        link: "https://paytm.com/"
    },
    // {
    //     title: "Paytm Mall",
    //     company_name: "Software Developer intern",
    //
    //     icon: paytmmall,
    //     iconBg: "white",
    //     date: "January 2021 - June 2021",
    //     points: [
    //         "Responsible for creating backend APIs for upcoming automated notification features in Paytm ecommerce mall"
    //     ],
    //     link:"https://paytmmall.com/"
    // },
    {
        title: "Ramaiah Institute of Technology, VTU",
        company_name: "Bachelor of Engineering in Information Science and Engineering",
        icon: ramaiah,
        iconBg: "white",
        date: "June 2017 - July 2021",
        points: [
            `CGPA: 8.7/10.0`,
            `Awarded an undergraduate academic merit-based scholarship by the Government of Madhya Pradesh, highlighting my exceptional academic achievements and dedication to pursuing higher education`
        ],
        viewTranscript: "https://drive.google.com/file/d/1xkT4siExyJVE5oMJVn7fCq_xq7EByu3T/view?usp=sharing",
        transcriptLink: "https://drive.google.com/uc?export=download&id=1xkT4siExyJVE5oMJVn7fCq_xq7EByu3T",
        link: "https://www.msrit.edu/"
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
    ["Avid Learner", "Curious", "Enthusiastic", "Hardworking"]
const projects = [
    {
        name: "Neural Shift",
        // upcoming: true,
        // inprogress: true,
        live: false,
        videoDemo: true,
        description: [
            "An innovative blogging platform: a secure, solution designed cater to bloggers of all interests and expertise levels.Engage in lively discussions with interactive comment threads, replies, and voting functionalities, fostering a dynamic blogging community.",
            "Versatile blog application supporting a wide range of categories",
            "Implemented Spring Security with OAuth 2 for secure authentication and authorization with scopes and roles",
            "Operates as a multi-tenant platform, facilitating blogging across various domains",
            "Features interactive discussions with comment, reply, and voting capabilities",
            "Utilizes ElasticSearch for fast and efficient search functionality",
            "Employs MongoDB for effective data storage and management, and PostgreSQL for user and blog management",
            "📺 Live site temporarily offline due to cloud credits - Watch the demo video to see the platform in action!"
        ],
        tags: [
            {
                name: "Spring Boot",
                color: "blue-text-gradient",
            },
            {
                name: "Spring Security",
                color: "blue-text-gradient",
            },
            {
                name: "React",
                color: "pink-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "pink-text-gradient",
            },
            {
                name: "MongoDb",
                color: "orange-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "orange-text-gradient",
            },
            {
                name: "AWS S3",
                color: "green-text-gradient",
            },
            {
                name: "Elastic Search",
                color: "green-text-gradient",
            },
        ],
        // image: n,
        image: neuralshift,

ub
        // source_code_link: "",
        view_link: "https://www.youtube.com/watch?v=zfBMWLddNDg"
    },
    {
        name: "Anywhere-biz - Billing Module",
        upcoming: true,
        inprogress: true,

        description: [
            `A comprehensive solution integrating automated billing, detailed business metrics visualization,serving as centralized control panel for managing businesses on the platform, and robust OAuth 2.0 security measures for seamless platform management.`,
            "Automated Cron Job: A scheduled task that retrieves metrics from the Redis server and updates them to the relational database daily.",
            "Material UI Dashboard: A user-friendly interface presenting comprehensive metrics for each business.",
            "Centralized Control Panel: An integrated platform for managing and halting business services.",
            "Enhanced Security: Implementation of OAuth 2.0 protocol to prevent unauthorized access to the platform."
        ],
        tags: [
            {
                name: "Node.Js",
                color: "blue-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "orange-text-gradient",
            },
            {
                name: "React",
                color: "pink-text-gradient",
            },
            {
                name: "Material UI",
                color: "pink-text-gradient",
            },
            {
                name: "Redis",
                color: "green-text-gradient",
            },
        ],
        image: billingmodule,
        // source_code_link: "",
        // view_link: "http://ec2-3-149-230-93.us-east-2.compute.amazonaws.com/"
    },
    {
        name: "Anywhere-biz - SaaS",
        upcoming: true,
        live: true,
        inprogress: true,
        description: [

            `A SaaS platform designed to empower both product-based and service-based enterprises to transition effectively to the online space. The platform offers a set of features designed specifically for service-based businesses to serve their specific requirements.`,

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
                name: "PostgreSQL",
                color: "orange-text-gradient",
            },
            {
                name: "React",
                color: "pink-text-gradient",
            },

            {
                name: "Redis",
                color: "green-text-gradient",
            },
            {
                name: "AWS",
                color: "green-text-gradient",
            },
            {
                name: "Github Actions",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "pink-text-gradient",
            },
        ],
        image: gshop,
        // source_code_link: "",
        view_link: "https://anywhere-biz.com/"
    },
    {
        name: "Lifetree WNY Services",

        live: true,

        description: [`Efficient Operations: Developed a web app to streamline daily business tasks and improve operational efficiency.`,
            ` Customer Management: Implemented a system to track proposals and manage potential customers, enhancing customer relationship management.`,
            `QuickBooks Integration: Enabled seamless invoicing by integrating with QuickBooks, optimizing financial management.`,
            `Geolocation for Crew: Integrated map coordinates to display job locations, boosting crew efficiency by enabling them to tackle nearby tasks effectively.`],
        tags: [
            {
                name: "Node.Js",
                color: "blue-text-gradient",
            },
            {
                name: "postgreSQL",
                color: "orange-text-gradient",
            },
            {
                name: "React",
                color: "pink-text-gradient",
            },
        ],
        image: lifetreewny,
        // source_code_link: "",
        view_link: "https://www.lifetreewny.com/"
    },
    {
        name: "Indian Craft Store",

        live: true,

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
                color: "pink-text-gradient",
            },
            {
                name: "Mongodb",
                color: "green-text-gradient",
            },
            {
                name: "Node.Js",
                color: "blue-text-gradient",
            },
        ],
        image: theindiancraftstore,
        source_code_link: "https://github.com/sarja830/CocoBerryStore",
        view_link: "https://theindiancraftstore.netlify.app/"
    },
    {
        name: "Personal Portfolio 3D",

        live: true,

        description:
            [`Tailored Showcase:

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
                name: "Node.Js",
                color: "blue-text-gradient",
            },
            {
                name: "React",
                color: "pink-text-gradient",
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
        // source_code_link: "https://github.com/",
        view_link: "https://sarthakjain.me/"
    },
    {
        name: "Scalable Word Counting ",
        archived: true,
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
        source_code_link: "https://github.com/sarja830/MapReduceWordCount",
        view_link: "https://github.com/sarja830/MapReduceWordCount"
    },
    {
        name: "Hollytics",
        archived: true,
        description:
            [
                `Hollywood Data Analysis Tool:

Developed to analyze Hollywood data and extract meaningful insights about current industry trends.`
                , `Web-Based Platform:

The project takes the form of a web-based platform for easy accessibility and interaction.`
                , `IMDb Dataset Integration:

Utilizes an automated Python script to load data from the IMDb dataset into a PostgreSQL database.`
                , `Sophisticated SQL Queries:

Leverages complex SQL queries to derive accurate and insightful information from the data.`


            ],

        tags: [
            {
                name: "PostgreSQL",
                color: "orange-text-gradient",
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
        source_code_link: "https://github.com/sarja830/Hollytics",
        view_link: "https://github.com/sarja830/Hollytics"
    },
    {
        name: "Satisfly",
        archived: true,
        description:
            [
                `As a part of a dynamic and collaborative team, I spearheaded the "Enhancing Airline Passenger Satisfaction" project, which aimed to leverage data and machine learning to elevate the passenger experience in the airline industry. This multifaceted project spanned three phases:`,

                `Phase 1 - Data Analysis and Model Training:
    - Conducted in-depth analysis of the US Airline Passenger Satisfaction Dataset to uncover insights.
- Trained a range of machine learning models, including Random Forest Classifier, Linear Support Vector Machine, Logistic Regression, Naive Bayes, and XGBoost.
- The goal was to pinpoint the services that most significantly impact passenger satisfaction.`,

                `Phase 2 - Interactive Web App Development:
    - Designed and developed an interactive web application that empowers both passengers and airlines.
- Passengers can enter their ratings for various airline services, enabling them to forecast areas needing improvement.
- Airlines can access actionable recommendations for enhancing customer satisfaction.`,

                `Phase 3 - Real-time Prediction:
    - Applied the machine learning models from Phase 1 to predict passenger satisfaction in real-time.
- Integrated Logistic Regression as the default model for real-world predictions, with the added flexibility for users to choose specific trained models.
- Utilized an optimized model loading process to reduce processing time.`,
            ],

        tags: [
            {
                name: "Machine Learning",
                color: "blue-text-gradient",
            },
            {
                name: "Python",
                color: "green-text-gradient",
            },
            {
                name: "Streamlit",
                color: "pink-text-gradient",
            },
            {
                name: "Git",
                color: "yellow-text-gradient",
            },
        ],
        image: satisfly,
        source_code_link: "https://github.com/sarja830/SatisFly-Analyzing-Air-Travel-Bliss",
        view_link: "https://github.com/sarja830/SatisFly-Analyzing-Air-Travel-Bliss",
    },
    {
        name: "COVID combat",
        archived: true,
        description:
            [
                `COVID-19 Reporting Platform:

Developed to aid in pandemic control by allowing users to report COVID-19 positive suspects in their vicinity`
                , `User-Generated Suspect Reports:
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
            {
                name: "Mysql",
                color: "orange-text-gradient",
            }, {
                name: "Java",
                color: "sky-text-gradient",
            },
        ],
        image: corona,
        source_code_link: "https://github.com/sarja830/COVID-combat",
        view_link: "https://github.com/sarja830/COVID-combat"
    },
    {
        name: "Mykindainsta",
        archived: true,
        description:
            [
                `MERN Stack Social Platform:

Developed using the MERN stack for a comprehensive social media experience.`
                , `Personalized Connection:

Offers users tailored connections and sharing based on individual interests.`
                , `Data Security with Encryption:

Prioritizes security by using SHA-256 encryption to protect sensitive user data, including passwords.`
                , `User-Friendly Interaction:

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
                color: "blue-text-gradient",
            },
            {
                name: "Mongodb",
                color: "orange-text-gradient",
            },
        ],
        image: mykindainsta,
        source_code_link: "https://github.com/sarja830/Mykindainsta/",
        view_link: "https://github.com/sarja830/Mykindainsta/"
    },
];
const awards = [

];
const journals = [{
    name: "Assessment and Prediction of PM2.5 in Delhi in View of Stubble Burn from Border States Using Collaborative Learning Model",
    description:
        ["A thick layer of smog blankets can be seen in Delhi," +
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
const leetcodeProfile = 'https://leetcode.com/sarja830/'
const contactViaEmail = 'mailto:sarth830@gmail.com'
const mediumBlog = "https://medium.com/@sarthjain830/different-views-of-a-binary-tree-left-view-and-right-view-of-a-binary-tree-with-breadth-first-de4b5675bd69"


export { name, services, awards, mediumBlog, githubLink, contactViaEmail, frameworks, leetcodeProfile, others, languages, experiences, testimonials, journals, qualities, projects, resumeIframeviewLink, resumeDownloadLink };