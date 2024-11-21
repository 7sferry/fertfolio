/************************
 * Made by [MR Ferry™]  *
 * on November 2024     *
 ************************/
import { FaBlog, FaEnvelope, FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

export const data = {
  siteConfig: {
    realName: "Ferry Suhandri",
    role: "Software Development Engineer III",
    tagline: "Crafting code, shaping solutions",
    description:
      "Online CV for Software Engineer made by Ferry Suhandri who experienced with Java, Spring Boot, Design Pattern, Programming Principle, and Clean Code Architecture",
    metaUrl: "https://ferry.netlify.app",
    repo: "7sferry/feresume2",
    copyright: `© ${new Date().getFullYear()} · Ferry Suhandri`,
  },
  lang: "id",
  about: {
    text: `I'm a Software Engineer who thrives on crafting elegant, efficient solutions. With expertise
          in Java, Spring Boot, Hibernate, SQL, and OOP, I transform complex code into clean,
          maintainable art. Unit testing? Absolutely, I believe in bulletproofing code to keep it
          reliable. I’m constantly learning and researching to stay ahead of the curve. My
          passion? Taking tangled codebases and refactoring them with design
          patterns and any principles that fits, ensuring they’re as readable as your favorite book and as
          maintainable as a fine-tuned machine. If it’s about making code better, I'm all in!`,
  },
  contacts: [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/7sferry",
      color: "#0a66c2",
    },
    // {
    //   name: "WhatsApp",
    //   icon: faWhatsapp,
    //   url: "https://wa.me/+6282212345678",
    //   color: "#25D366",
    // },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:7sferry@gmail.com",
      color: "#DB4437",
    },
    {
      name: "Blog",
      icon: FaBlog,
      url: "https://ferry.vercel.app",
      color: "#FF00BF",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/7sferry",
      color: "black",
    },
    {
      name: "StackOverFlow",
      icon: FaStackOverflow,
      url: "https://stackoverflow.com/users/14286378/ferry",
      color: "#ef8236",
    },
  ],
  impacts: [
    {
      title: "Refactoring Legacy Code to Clean Structure",
      text: `Faced with a legacy codebase that was challenging to develop and maintain, I took the
              initiative
              to refactor it into a clean, modular structure. By implementing centralized exception
              handling,
              request validation, programming to interfaces, and dependency injection, I transformed the
              code
              into a more maintainable and readable state. This resulted in enhanced development
              efficiency
              and improved code quality across the system.`,
    },
    {
      title: "Resolving Concurrency Issues",
      text: `Encountered data anomalies due to concurrency problems like Lost Updates and Write Skew. To
              address this, I introduced optimized solutions such as strategic locking mechanisms and
              improved
              transaction isolation levels. These efforts successfully eliminated the anomalies, ensuring
              data
              consistency and reliability throughout the system.`,
    },
    {
      title: "Customizable Client Behaviors with Design Patterns",
      text: `Faced with the challenge of diverse client behavior requirements, I implemented design
              patterns
              such as Strategy, Command, and Factory Method. This solution provided each client with the
              flexibility to choose and utilize their desired behavior seamlessly.`,
    },
    {
      title: "Optimizing Pagination for Faster Load Times",
      text: `To address slow load times with numeric pagination, I revamped the filtering strategy to
              focus on
              date-based filters and implemented a "load more" pagination approach. This significantly
              reduced
              page load times and improved the overall user experience.`,
    },
    {
      title: "Enhancing Transaction Management with Custom Annotation",
      text: `Legacy code lacked Spring Data JPA, making atomic transactions more complex than using the
              simple
              @Transactional annotation. I developed a custom transactional annotation using AOP, enabling
              centralized management of atomicity using ThreadLocal, isolation, and retryable transactions in the event of
              failures, replicating the behavior of Spring’s built-in transaction management.`,
    },
    {
      title: "Simplifying Unit Testing with Dependency Injection",
      text: `Some parts of the code were difficult to test due to hidden dependencies. I refactored the
              code
              to use dependency injection, making it easier to mock dependencies in unit tests and
              improving
              testability and maintainability.`,
    },
    {
      title: "Automating Query Logging for QA with AOP",
      text: `To streamline the testing process for the QA team, I developed an AOP-based solution that
              intercepts query generation outside of business logic and sends the query logs directly to
              their
              email. This approach enables QA to access the generated queries independently, without
              needing
              developer intervention.`,
    },
    {
      title: "Revolutionizing PDF Creation for Clarity and Ease",
      text: `Faced with a difficult-to-read PDF creator using OOP style, I migrated the system to an HTML-based
       solution. This transition simplified the process, allowing future PDF creation tasks to be handled easily by
        designing layouts with HTML and CSS, just like a webpage, ensuring clarity and flexibility in design.`,
    },
  ],
  personalities: [
    {
      title: `ISTJ (Myers-Briggs)`,
      text: `Methodical, detail-oriented, and precise, I approach problems with logical and structured solutions.`,
    },
    {
      title: `Type 5 (Enneagram)`,
      text: `A thinker and learner, I thrive on acquiring knowledge, diving deep into complex topics to understand and
              innovate.`,
    },
    {
      title: `Conscientious (DiSC)`,
      text: `Analytical and focused, I prioritize efficiency and clarity, delivering solutions that are effective and
              sustainable.`,
    },
    {
      title: `Big Five`,
      text: `Openness: 37%, Conscientiousness: 81%, Extraversion: 3%, Agreeableness: 3%, Neuroticism: 57%. A balance of
       thoughtfulness, diligence, and introspection.`,
    },
  ],
  projects: [
    {
      company: `PT. Advotics Teknologi Global`,
      name: `Delivery Platform`,
      from: `Jul 2023`,
      to: `present`,
      text: `Developed a robust Delivery Platform designed to optimize routing for multiple deliveries, effectively
       addressing complex challenges solving Traveling Salesman Problems in Fleet Management through the use of WebFlux. Enhanced the system with dynamic
        Route Management powered by AWS Lambda and streamlined Delivery Trip modules to ensure efficient logistics
         operations and scalability. The platform significantly improved delivery efficiency, reduced operational costs,
          and facilitated seamless fleet coordination.`,
    },
    {
      company: `PT. Advotics Teknologi Global`,
      name: `KPI Platform`,
      from: `Jun 2022`,
      to: `Jun 2023`,
      text: `Created a comprehensive KPI calculator module for Sales, designed to accurately track and evaluate
       performance metrics. Developed an accompanying library to simplify implementation and accelerate future
        development processes, ensuring consistent functionality and reducing development overhead. This solution
         enhanced data accuracy, streamlined reporting, and provided developers with reusable, modular tools for
          efficient integration into various projects.`,
    },
    {
      company: `PT. Advotics Teknologi Global`,
      name: `Business Transaction Platform`,
      from: `Sep 2019`,
      to: `Present`,
      text: `Developed the backbone of supply chain applications, including critical modules for Ordering, Invoice,
       Product Return, and Inventory management. Leveraged Spring Boot and Hibernate to build scalable and efficient
        systems, while implementing Clean Architecture principles to ensure maintainability, modularity, and clarity.
         These enhancements streamlined operations, improved data accuracy, and facilitated seamless integration across
          the supply chain ecosystem.`,
    },
    {
      company: `PT. Pradipta Jatis Indonesia`,
      name: `Permodalan Nasional Madani Investment Management`,
      from: `May 2019`,
      to: `Aug 2019`,
      text: `Faced with a tight deadline to develop a Mutual Funds app for Permodalan Nasional Madani Investasi Management,
       I collaborated with the team despite none of us having prior experience with Groovy or Grails. We embraced the
        challenge by learning Groovy and Grails on the go while actively developing the application. Despite the steep
         learning curve, we successfully launched the app, delivering it on time and meeting the project’s requirements.`,
    },
    {
      company: `PT. Pradipta Jatis Indonesia`,
      name: `Alfacart Back Office`,
      from: `Dec 2018`,
      to: `Apr 2019`,
      text: `Deployed to replace a colleague at Alfacart, I was tasked with improving their back office apps as a
       full-stack solution, utilizing Java for backend processes and vanilla JavaScript for the frontend interface.
        One challenge involved implementing a discount period feature that couldn’t overlap. Upon reviewing the
         database, I discovered PostgreSQL’s "overlap" keyword, which allowed me to simplify the logic significantly.
          By leveraging this feature, I eliminated the need for complex manual checks, resulting in a cleaner and more
           efficient query for handling overlapping discount periods.`,
    },
    {
      company: `PT. Pradipta Jatis Indonesia`,
      name: `Ultra Voucher`,
      from: `Oct 2018`,
      to: `Nov 2018`,
      text: `Assigned to assist Ultra Voucher, a newly formed startup, I worked with Java, Spring, and MyBatis to
       implement a feature that allowed customers to make multiple payments for a single product. This feature enabled
        customers to divide their payments across multiple payment accounts, offering greater flexibility and
         convenience. I successfully delivered the solution on time, enhancing the user experience and streamlining the
          payment process for the platform.`,
    },
    {
      company: `PT. Pradipta Jatis Indonesia`,
      name: `Novo Nordisk Indonesia`,
      from: `Jun 2018`,
      to: `Sep 2018`,
      text: `Designed and developed a web service API for Novo Nordisk's sales dashboard and analytics platform,
       enabling data visualization and insights. The API streamlined data processing, and enhanced reporting accuracy.
       Despite some significant adjustments on-the-go, we swiftly adapted by modifying the code and database, ensuring
        that the solution met the updated needs`,
    },
    {
      company: `PT. Pradipta Jatis Indonesia`,
      name: `Betterway`,
      from: `Jan 2018`,
      to: `May 2018`,
      text: `For our client Betterway from the Philippines, I collaborated with my team to develop a mobile e-commerce
       app within a 5-month timeline. Despite the challenges, we maintained a strong focus on quality and functionality
        throughout the development process. The project culminated in a successful product launch, with the app going
         live as planned.`,
    },
    {
      company: `PT. Indivara Sejahtera Sukses Makmur`,
      name: `Java Development Trainee`,
      from: `Aug 2017`,
      to: `Dec 2017`,
      text: `Completed intensive training in both soft and hard skills, with a focus on Java, its
              frameworks, basic JavaScript, and the latest technologies, ranging from basic to advanced levels. I also
              undertook on-the-job training as a graduate programmer. During this time, I deepened my
              understanding of Design Patterns and advanced my knowledge of various coding principles.`,
    },
  ],
  skills: [
    {
      emoji: `👨‍💻`,
      name: `Programming`,
      text: `I primarily work with Java in my projects, but I also have experience with
                JavaScript/TypeScript. To me, programming languages or frameworks are tools; I'm always
                open and eager to learn and master new ones as needed.`,
    },
    {
      emoji: `📚`,
      name: `Learning`,
      text: `Driven by curiosity and a passion for innovation, I constantly seek
                opportunities to expand my knowledge and apply cutting-edge solutions to improve
                software development. This proactive approach ensures I stay ahead of trends and
                contribute valuable insights to any team.`,
    },
    {
      emoji: `🧪`,
      name: `Unit Testing`,
      text: `Skilled in writing thorough unit tests using JUnit and Mockito, I prioritize ensuring
                code reliability and maintainability. My focus on testing drives higher quality, reduces
                bugs, and ensures that code performs as expected, ultimately contributing to more stable
                and efficient software.`,
    },
    {
      emoji: `🛠️`,
      name: `Design Patterns`,
      text: `With extensive experience in applying effective design patterns, I ensure that code
                remains clean, scalable, and easy to maintain. By leveraging proven architectural
                principles, I create solutions that stand the test of time and facilitate smooth,
                long-term project growth.`,
    },
    {
      emoji: `🌍`,
      name: `English`,
      text: `I have good business-level English proficiency, ensuring effective collaboration and
                clear, concise documentation. This ability helps bridge technical and non-technical
                discussions, promoting smooth workflows and successful project outcomes.`,
    },
    {
      emoji: `🔍`,
      name: `Detail-Oriented`,
      text: `My meticulous attention to detail ensures that every aspect of a project, from initial
                design to final testing, adheres to the highest quality standards. I consistently refine
                and optimize each element, ensuring flawless execution and delivering exceptional
                results that exceed expectations.`,
    },
  ],
  footer: {
    text: "Crafted with passion and precision",
  },
};
