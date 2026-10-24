/************************
 * Made by [MR Ferry™]  *
 * on November 2024     *
 ************************/
import { FaBlog, FaEnvelope, FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

export const data = {
  siteConfig: {
    realName: "Ferry Suhandri",
    role: "Senior Associate Software Development Engineer",
    tagline: "Java backend · supply-chain & delivery routing · data consistency · performance",
    description:
      "Ferry Suhandri, Java backend engineer: supply-chain transaction systems, delivery route optimization with jsprit, concurrency fixes and performance work. Senior Associate Software Development Engineer at NTT DATA.",
    metaUrl: "https://ferry.netlify.app",
    repo: "7sferry/fertfolio",
  },
  lang: "en",
  about: {
    text: `Java backend engineer, currently Senior Associate Software Development Engineer at NTT DATA (since September
          2026). Before that I spent nearly seven years at Advotics building supply-chain systems (ordering, invoicing,
          returns, inventory) and, on my own, rewrote its delivery-routing engine using jsprit, AWS Lambda and Spring
          WebFlux. I also reviewed code and mentored 3–5 junior engineers there. My best work is making existing systems
          correct and fast: fixing lost-update and write-skew anomalies, cutting a 60s+ API to under 1s by removing N+1
          queries and blocking calls, and introducing a >90% unit-test coverage bar for new endpoints that became the
          team standard.`,
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
      name: "StackOverflow",
      icon: FaStackOverflow,
      url: "https://stackoverflow.com/users/14286378/ferry",
      color: "#ef8236",
    },
  ],
  impacts: [
    {
      title: "Rewrote Delivery Routing as a Standalone Engine",
      text: `Rewrote the delivery-plan routing out of the legacy delivery service, working alone. A planner picks 100–300
          orders, and the engine assigns them to vehicles and orders the stops using jsprit. One vehicle can pick up from
          several warehouses and deliver to several customers, within customer time windows and vehicle-skill
          constraints. The solver and distance-matrix building run on AWS Lambda when the planner clicks Generate,
          10–100 times a day.`,
    },
    {
      title: "Cut the Route-Planning Data API from 60s+ to Under 1s",
      text: `The API that loads data for route planning took over 60 seconds because of N+1 queries, slow SQL and
          sequential blocking calls. I removed the N+1 pattern, rewrote the slow queries and moved the remaining calls to
          non-blocking Spring WebFlux. Response time dropped to under 1 second.`,
    },
    {
      title: "Replaced AWS SQS with Redis Streams",
      text: `Moved our message queue from AWS SQS to Redis Streams on the Redis instance we already ran, then shut down SQS
          entirely, removing a pay-per-request service at no added infrastructure cost. Consumers use consumer groups and
          acknowledge only after successful processing. A scheduler retries failed messages, and those that keep failing
          go to a dead-letter stream.`,
    },
    {
      title: "Fixed Lost Updates and Write Skew",
      text: `Concurrent requests were causing lost updates and write skew, which led to inconsistent data. I made
          optimistic locking with version columns the default for lost updates. For the write-skew cases in the Delivery
          Platform, where conflicts were frequent, I used SERIALIZABLE isolation instead. The anomalies stopped.`,
    },
    {
      title: "Built a Custom Transaction Manager with Spring AOP",
      text: `The legacy code didn't use Spring Data JPA, so @Transactional wasn't available. I wrote a custom
          transactional annotation with AOP and ThreadLocal that handles atomicity, isolation and retry on failure,
          matching Spring's built-in behavior.`,
    },
    {
      title: "Introduced a >90% Coverage Standard for New Endpoints",
      text: `Services had 0–30% unit-test coverage, partly because hidden dependencies made them hard to mock. I refactored
          them to dependency injection, introduced a >90% JUnit/Mockito coverage bar for new endpoints, and it became the
          team standard.`,
    },
    {
      title: "Cut Sales-Dashboard Response from Over a Minute to Under 500 ms",
      text: `Rebuilt the sales-dashboard ETL to pre-aggregate data instead of querying raw transactions. Dashboards for our
          largest client, with 1M+ records per year, went from over a minute to under 500 ms.`,
    },
    {
      title: "Refactored Legacy Code to a Modular Structure",
      text: `Refactored hard-to-maintain legacy modules with centralized exception handling, request validation,
          programming to interfaces and dependency injection.`,
    },
    {
      title: "Per-Client Behavior with Design Patterns",
      text: `Clients needed different behavior for the same features. I used Strategy, Command and Factory Method so each
          client can be configured with its own behavior without branching the core code.`,
    },
  ],
  experiences: [
    {
      company: `NTT DATA`,
      title: `Senior Associate Software Development Engineer`,
      from: `Sep 2026`,
      to: `Present`,
      summary: ``,
      projects: [],
    },
    {
      company: `PT. Advotics Teknologi Global`,
      title: `Software Development Engineer`,
      from: `Sep 2019`,
      to: `Jun 2026`,
      summary: `Reviewed code and mentored 3–5 junior engineers. Introduced a >90% unit-test coverage bar for new endpoints
          that became the team standard.`,
      projects: [
        {
          name: `Delivery Platform`,
          from: `Jul 2023`,
          to: `Jun 2026`,
          text: `Rewrote the delivery-plan routing out of the legacy delivery service into a standalone engine, working
              alone. It uses jsprit on AWS Lambda for vehicle routing with multiple vehicles, warehouses, time windows and
              vehicle skills, and Spring WebFlux for the data-loading API, which I cut from 60s+ to under 1s. Also built
              the Delivery Trip module.`,
        },
        {
          name: `KPI Platform`,
          from: `Jun 2022`,
          to: `Jun 2023`,
          text: `Enhanced the KPI calculator module that tracks sales performance metrics, and built an accompanying
              library so later KPI features reuse the same calculation logic.`,
        },
        {
          name: `Business Transaction Platform`,
          from: `Sep 2019`,
          to: `Jun 2026`,
          text: `Backend for Advotics' supply-chain modules: Ordering, Invoice, Product Return and Inventory (Spring Boot,
              Hibernate, SQL), owned together by a team of 3–10 engineers over the years. My own contributions included
              fixing the concurrency anomalies, building the AOP transaction manager, and refactoring legacy parts for
              testability.`,
        },
      ],
    },
    {
      company: `PT. Pradipta Jatis Indonesia`,
      title: `Associate Business Technologist (software engineer, client projects)`,
      from: `Jan 2018`,
      to: `Aug 2019`,
      summary: ``,
      projects: [
        {
          name: `Permodalan Nasional Madani Investment Management`,
          from: `May 2019`,
          to: `Aug 2019`,
          text: `Built a mutual funds app on a tight deadline in Groovy and Grails, which nobody on the team had used
              before. We learned the stack while building and launched on time.`,
        },
        {
          name: `Alfacart Back Office`,
          from: `Dec 2018`,
          to: `Apr 2019`,
          text: `Full-stack work on back-office apps (Java backend, vanilla JavaScript frontend). Implemented discount
              periods that must not overlap using PostgreSQL's OVERLAPS operator, replacing complex manual checks with a
              single query.`,
        },
        {
          name: `Ultra Voucher`,
          from: `Oct 2018`,
          to: `Nov 2018`,
          text: `Implemented split payment with Java, Spring and MyBatis, letting customers pay for one product across
              multiple payment accounts. Delivered on time.`,
        },
        {
          name: `Novo Nordisk Indonesia`,
          from: `Jun 2018`,
          to: `Sep 2018`,
          text: `Designed and developed the web service API for a sales dashboard and analytics platform, adapting the
              code and database to significant requirement changes mid-project.`,
        },
        {
          name: `Betterway`,
          from: `Jan 2018`,
          to: `May 2018`,
          text: `Team member on a mobile e-commerce app for a client in the Philippines, built and launched within a
              5-month timeline.`,
        },
      ],
    },
    {
      company: `PT. Indivara Sejahtera Sukses Makmur`,
      title: `Java Development Trainee`,
      from: `Aug 2017`,
      to: `Dec 2017`,
      summary: `Intensive Java training covering frameworks, basic JavaScript, design patterns and coding principles,
          followed by on-the-job training as a graduate programmer.`,
      projects: [],
    },
  ],
  skills: [
    {
      emoji: `☕`,
      name: `Languages`,
      text: `Java (primary), SQL, TypeScript/JavaScript, Groovy.`,
    },
    {
      emoji: `🧩`,
      name: `Frameworks`,
      text: `Spring Boot, Spring WebFlux, Spring AOP, Hibernate, MyBatis, Grails.`,
    },
    {
      emoji: `🗄️`,
      name: `Data & Messaging`,
      text: `PostgreSQL, Redis Streams, AWS SQS, transaction isolation and locking, ETL pre-aggregation.`,
    },
    {
      emoji: `☁️`,
      name: `Cloud & Optimization`,
      text: `AWS Lambda, jsprit (vehicle routing with time windows and skills).`,
    },
    {
      emoji: `🧪`,
      name: `Testing`,
      text: `JUnit, Mockito, dependency injection for testability, >90% coverage on new endpoints.`,
    },
    {
      emoji: `🛠️`,
      name: `Design`,
      text: `Design patterns (Strategy, Command, Factory Method), clean architecture, refactoring legacy code.`,
    },
    {
      emoji: `🌍`,
      name: `English`,
      text: `Business-level English for documentation and day-to-day collaboration.`,
    },
  ],
  footer: {
    text: "Built with Gatsby",
  },
};
