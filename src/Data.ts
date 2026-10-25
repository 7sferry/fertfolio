/************************
 * Made by [MR Ferry™]  *
 * on November 2024     *
 ************************/
import { FaBlog, FaEnvelope, FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

export const data = {
  siteConfig: {
    realName: "Ferry Suhandri",
    role: "Senior Software Development Engineer",
    tagline: "Make it correct, then make it fast",
    description:
      "Ferry Suhandri, Java backend engineer: supply-chain transaction systems, delivery route optimization with jsprit, concurrency fixes and performance work. Senior Associate Software Development Engineer at NTT DATA.",
    metaUrl: "https://ferry.netlify.app",
    repo: "7sferry/fertfolio",
  },
  lang: "en",
  about: {
    text: `I'm a Software Engineer with 8+ years of experience, at my best on the hard parts of production systems:
          keeping data correct under concurrency, speeding up slow endpoints and safely changing legacy code. I fix
          root causes, from write-skew bugs unnoticed for years to a 60s+ API cut to under 1s. On my own, I rewrote a
          delivery-routing engine with jsprit, AWS Lambda and Spring WebFlux, and several tools I built became team
          standards. I keep my code above 90% test coverage and mentor juniors.`,
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
      color: "currentColor",
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
      context: "Advotics · Delivery Platform",
      text: `Rewrote the delivery-plan routing out of the legacy delivery service. A planner picks 100–300 orders, and the
          engine assigns them to vehicles and orders the stops using jsprit, with multiple warehouses, pickup and
          delivery time windows, vehicle material types and capacity limits. I extended it with custom jsprit
          constraints for client requirements the library doesn't support, such as scheduled driver breaks and keeping
          each customer with the same driver. When clients compared plans, the generated routes were more efficient
          than their manual ones, which often broke time-window or vehicle-material constraints. The solver and
          distance-matrix building run on AWS Lambda.`,
    },
    {
      title: "Cut Analytics Queries from Over a Minute to Under 500 ms",
      context: "Advotics · Analytics Platform",
      text: `Analytics ran on denormalized copies of transaction data in a separate MySQL OLAP database, and queries had
          slowed to over a minute: billions of rows across all clients, 1M+ per year for one of our largest clients. I
          rebuilt the ETL pipeline to keep daily and monthly aggregates instead, so an annual revenue query reads 365
          daily rows instead of scanning raw transactions. Responses dropped to under 500 ms.`,
    },
    {
      title: "Made Legacy Transactions Atomic, Retryable and Safe from Write Skew",
      context: "Advotics · Business Transaction & Delivery Platforms",
      text: `The legacy code had no atomic transactions: an order could be saved without its items. I built
          @LegacyTransactional, an AOP annotation that opens a session per method, keeps it in a ThreadLocal for a new
          repository layer, and commits or rolls back on exit. Over time I added read-only transactions routed to the
          MySQL read replica, retry with exponential backoff on lock and optimistic-lock failures, and per-method
          isolation with a lock timeout. Optimistic version locking handles lost updates, and SERIALIZABLE handles
          write skew. One case: a delivery assignment's status depends on its trips, and when two trips of the same
          assignment completed at the same time, each still saw the other as in progress, so the assignment was left
          with a stale status. The bug was intermittent and had gone unnoticed for years. Since the fix, assignment
          statuses have stayed 100% consistent. The annotation became the standard for new endpoints in that
          service.`,
    },
    {
      title: "Cut the Route-Planning Data API from 60s+ to Under 1s",
      context: "Advotics · Delivery Platform",
      text: `The API that loads data for route planning took over 60 seconds because of N+1 queries, slow SQL and
          sequential blocking calls. I removed the N+1 pattern, rewrote the slow queries and moved the remaining calls to
          non-blocking Spring WebFlux. Response time dropped to under 1 second.`,
    },
    {
      title: "Traced Nonsensical Sales Travel Distances to Three Root Causes",
      context: "Advotics · User Identity Platform",
      text: `Sales tracking for thousands of field sales representatives (reps) was intermittently reporting impossible
          travel distances between check-in points, a problem that had gone unnoticed for years and made sales reports
          unreliable. I traced the report to three separate causes. Reps checking in and out from two phones produced out-of-order records, so I
          enforced a check-out before any new check-in. The midnight scheduler that automatically checks out and logs
          out reps who forgot generated duplicate primary keys, silently dropping one of the records, so I fixed how
          those key values are generated. Fake-GPS check-ins were placing reps in Russia, which I traced to the mobile
          app and handed to the mobile team to fix.`,
    },
    {
      title: "Closed a User-Enumeration and Email-Exposure Hole in Password Reset",
      context: "Advotics · User Identity Platform",
      text: `The forgot-password endpoint told attackers which emails were registered ("email not found"), and for
          registered accounts it returned the full email address, masked only in the frontend. I moved the masking to
          the server and made the response look the same whether or not the account exists, returning a dummy masked
          email for unregistered addresses. To stop timing from giving it away, I measured the request with
          System.nanoTime() and padded the failure path to the typical success-path latency, plus 0–100 ms of random
          jitter.`,
    },
    {
      title: "Replaced a 6,000-Line Endpoint Router with Annotations",
      context: "Advotics · Business Transaction Platform",
      text: `A legacy module mapped every endpoint path to its handler through one custom switch statement that grew past
          6,000 lines, until the module stopped compiling. Moving to Spring controllers would have broken backward
          compatibility, so I built a @HandlerPath annotation placed directly on handler service classes, registered at
          startup through a Spring event listener, with HTTP-method checks and payload-validation annotations
          (@EnumPayload, @DatePayload, @JsonPayload). I also built Swagger-like API docs generated from the same
          annotations. It became the standard for new endpoints in that service.`,
    },
    {
      title: "Replaced AWS SQS with Redis Streams",
      context: "Advotics · Analytics Platform",
      text: `I was asked to migrate the queue from AWS SQS to Redis Pub/Sub. I proposed Redis Streams instead, because
          Pub/Sub is fire-and-forget and doesn't fit a queue. It runs on the Redis instance we already had, at no added
          infrastructure cost. Consumers use consumer groups and acknowledge only after success. A scheduler retries
          failures, and those that keep failing go to a dead-letter stream. Merged to production before I left, with
          SQS scheduled for shutdown.`,
    },
    {
      title: "Cut the Page with Pagination from 5s+ to Around 100 ms",
      context: "Advotics · Business Transaction Platform",
      text: `The Page with Pagination in production suddenly took 5 seconds or more to load. It used numeric pagination: a
          COUNT(*) over every matching order to show the page count, plus a LIMIT/OFFSET query that gets more expensive
          the deeper the page. I gave the product manager three options with their trade-offs: a date-range filter, a
          "load more" button that skips the count entirely, and cursor-based paging that filters by the last ID shown
          instead of using OFFSET. They chose the date-range filter because it needed the least development and no UI/UX
          change, and we capped the range at 31 days, so each request only counts and pages through one month of orders
          at most. Load time dropped to around 100 ms.`,
    },
    {
      title: "Cut PDF Feature Effort from 13 to 2–5 Story Points",
      context: "Advotics · Business Transaction Platform",
      text: `Each new PDF built with the iText API took about 13 story points, and complex invoices (merged cells, dashed
          borders, client logos, custom signature blocks) were close to impossible. I built an HTML-to-PDF module (data
          object → Thymeleaf → HTML → PDF), so layouts are designed in HTML and CSS. New PDF features dropped to 2–5
          story points, and the module became the team's standard for PDFs. The same templating module is also reused
          to build HTML emails.`,
    },
    {
      title: "Redesigned the Bulk-Upload Module to Be Testable",
      context: "Advotics · Business Transaction Platform",
      text: `The bulk-upload module (CSV/XLSX) had no tests: static methods, reuse by inheritance and hidden dependencies
          made it impossible to mock, and every feature added a case to a long switch. I redesigned it around
          dependency inversion and composition: processor strategies registered in a map and created through factories
          instead of the switch, adapters so new processors could reuse legacy logic, and a wrapper that validates
          input with Hibernate Validator and runs validation asynchronously instead of one item at a time. The
          processors can now be mocked, so the module is finally covered by unit tests.`,
    },
    {
      title: "Set a >90% Unit-Test Coverage Bar the Team Adopted",
      context: "Advotics",
      text: `When unit tests became mandatory across all platforms, services had 0–30% coverage. I held my new code
          above 90% (JUnit, Mockito, BDD style with AssertJ soft assertions). The team followed, and it became the
          standard.`,
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
      summary: `Backend engineer on a multi-tenant supply-chain SaaS serving thousands of client companies (thousands to
          tens of thousands of transactions per minute; p95 50–300 ms on some services). I took over the Delivery
          Platform in July 2023 and, after the teams merged in January 2024, the User Identity Platform and Analytics
          Platform modules as well. Several of my refactors became team standards: request binding instead of manual
          HttpServletRequest parsing, centralized exception handling with @ControllerAdvice, a builder-based HTTP
          client, the annotation-based endpoint router, the Thymeleaf templating module for PDFs and HTML emails, and
          @LegacyTransactional. I held my new code above 90% unit-test coverage (JUnit, Mockito, AssertJ), which the
          team followed as its standard. Also reviewed code and mentored junior engineers.`,
      projects: [
        {
          name: `Business Transaction Platform`,
          from: `Sep 2019`,
          to: `Jun 2026`,
          text: `Backend for Advotics' supply-chain modules: Ordering, Invoice, Product Return and Inventory (Spring Boot,
              Hibernate, SQL), owned together by a team of 3–10 engineers over the years. Maintained the ordering
              module's per-client behavior design and extended it with new client-specific strategies as clients needed
              them, without changing the core order flow. Built new APIs with the team's Clean Architecture
              (Command-pattern use cases, Façade gateways).`,
        },
        {
          name: `Delivery Platform`,
          from: `Jul 2023`,
          to: `Jun 2026`,
          text: `Rewrote the delivery-plan routing out of the legacy delivery service into a standalone engine. It uses
              jsprit with custom constraints on AWS Lambda for vehicle routing with multiple vehicles, warehouses, time
              windows and vehicle skills, and Spring WebFlux for the data-loading API, which I cut from 60s+ to under
              1s. Also built the Delivery Trip module.`,
        },
        {
          name: `User Identity Platform`,
          from: `Jan 2024`,
          to: `Jun 2026`,
          text: `Took over the module after the teams merged in January 2024. Owned sales check-in/check-out tracking,
              including fixing the bugs behind unreliable travel distances in sales reports, and closing a
              user-enumeration and email-exposure hole in password reset.`,
        },
        {
          name: `Analytics Platform`,
          from: `Jan 2024`,
          to: `Jun 2026`,
          text: `Took over the module after the teams merged. Rebuilt the analytics ETL around daily and monthly
              aggregates, cutting queries from over a minute to under 500 ms, and migrated the message queue from AWS SQS
              to Redis Streams.`,
        },
        {
          name: `KPI Platform`,
          from: `Jun 2022`,
          to: `Jun 2023`,
          text: `Enhanced the KPI calculator that tracks sales performance. We built a separate library that calculates
              KPIs from each client's own formula. I chose QueryDSL as its dynamic query builder, so queries are
              assembled in Java from each KPI's configuration, which kept the logic composable and readable. Teammates
              then adopted QueryDSL for their own queries.`,
        },
      ],
    },
    {
      company: `PT. Pradipta Jatis Indonesia`,
      title: `Associate Business Technologist`,
      from: `Jan 2018`,
      to: `Aug 2019`,
      summary: `Software engineer at an IT consultancy, assigned to five client projects in 20 months across mutual
          funds, retail e-commerce, digital vouchers and pharmaceutical analytics. Often joined at short notice:
          replaced a colleague on Alfacart's back office, supported Ultra Voucher as a newly formed startup, and
          learned Groovy and Grails on the job to ship a mutual funds app on time. Worked with Java, Spring, MyBatis,
          PostgreSQL, Groovy/Grails and vanilla JavaScript.`,
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
      text: `Spring Boot, Spring WebFlux, Hibernate, QueryDSL, Spring AOP, Hibernate Validator, Thymeleaf, MyBatis,
          Grails.`,
    },
    {
      emoji: `🗄️`,
      name: `Data & Messaging`,
      text: `PostgreSQL, MySQL, Redis Streams, AWS SQS, transaction isolation and locking, OLTP/OLAP ETL.`,
    },
    {
      emoji: `☁️`,
      name: `Cloud & Optimization`,
      text: `AWS Lambda, jsprit (vehicle routing with time windows and skills).`,
    },
    {
      emoji: `🧪`,
      name: `Testing & Code Quality`,
      text: `JUnit, Mockito, AssertJ (BDD, soft assertions), >90% coverage on new endpoints, design patterns (Strategy,
          Adapter, Builder, Factory Method, Command, Façade).`,
    },
    {
      emoji: `🌍`,
      name: `English`,
      text: `B2 Upper Intermediate (EF SET 55/100, September 2026). Used for documentation and day-to-day collaboration.`,
    },
  ],
  footer: {
    text: "Built with Gatsby",
  },
};
