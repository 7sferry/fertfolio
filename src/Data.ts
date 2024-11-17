/************************
 * Made by [MR Ferry™]  *
 * on November 2024     *
 ************************/
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faBlog, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const data = {
  siteConfig: {
    realName: "Ferry Suhandri",
    role: "Software Engineer",
    tagline: "Crafting code, shaping solutions",
    description:
      "Online CV for Software Engineer made by Ferry Suhandri who experienced with Java, Spring Boot, Design Pattern, Programming Principle, and Clean Code Architecture",
    metaUrl: "https://ferry.netlify.app",
  },
  lang: "id",
  about: {
    text: `I'm a software engineer who thrives on crafting elegant, efficient solutions. With expertise
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
      icon: faLinkedin,
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
      icon: faEnvelope,
      url: "mailto:7sferry@gmail.com",
      color: "#DB4437",
    },
    {
      name: "Blog",
      icon: faBlog,
      url: "https://ferry.vercel.app",
      color: "#FF00BF",
    },
    {
      name: "GitHub",
      icon: faGithub,
      url: "https://github.com/7sferry",
      color: "black",
    },
    {
      name: "StackOverFlow",
      icon: faStackOverflow,
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
  ],
  projects: [
    {
      company: `PT. Advotics Teknologi Global`,
      name: `Delivery Platform`,
      from: `Jul 2023`,
      to: `present`,
      text: `Developed a Delivery Platform to optimize routing for multiple deliveries, addressing
              challenges in Fleet Management using WebFlux, Route Management with AWS Lambda, and
              streamlining Delivery Trip modules.`,
    },
    {
      company: `PT. Advotics Teknologi Global`,
      name: `KPI Platform`,
      from: `Jun 2022`,
      to: `Jun 2023`,
      text: `Created a KPI calculator module for Sales, along with their library to simplify and
              accelerate development.`,
    },
    {
      company: `PT. Advotics Teknologi Global`,
      name: `Business Transaction Platform`,
      from: `Sep 2019`,
      to: `Present`,
      text: `Developed the core of supply chain applications including Ordering, Invoice,
              Product Return, and Inventory modules using Spring Boot, Hibernate, Clean Architectures.`,
    },
    {
      company: `PT. Pradipta Jatis Indonesia`,
      name: `Permodalan Nasional Madani Investment Management`,
      from: `May 2019`,
      to: `Aug 2019`,
      text: `Developed an Investment Management System using Groovy and Grails.`,
    },
    {
      company: `PT. Pradipta Jatis Indonesia`,
      name: `Alfacart Back Office`,
      from: `Dec 2018`,
      to: `Apr 2019`,
      text: `Developed the Alfacart Back Office application as a full-stack using Java and vanilla
              JavaScript.`,
    },
    {
      company: `PT. Pradipta Jatis Indonesia`,
      name: `Ultra Voucher`,
      from: `Oct 2018`,
      to: `Nov 2018`,
      text: `Developed a Split Payments API for Ultra Voucher using Java, Spring, and MyBatis.`,
    },
    {
      company: `PT. Pradipta Jatis Indonesia`,
      name: `Novo Nordisk Indonesia`,
      from: `Jun 2018`,
      to: `Sep 2018`,
      text: `Developed a web service API for the sales dashboard and analytics for Novo Nordisk.`,
    },
    {
      company: `PT. Pradipta Jatis Indonesia`,
      name: `Betterway`,
      from: `Jan 2018`,
      to: `May 2018`,
      text: `Developed a web service API for a mobile e-commerce platform based in the Philippines.`,
    },
    {
      company: `PT. Indivara Sejahtera Sukses Makmur`,
      name: `On Job Trainee`,
      from: `Aug 2017`,
      to: `Dec 2017`,
      text: `Completed intensive training in both soft and hard skills, with a focus on Java, its
              frameworks, and the latest technologies, ranging from basic to advanced levels. I also
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
      name: `Attention to Detail`,
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
