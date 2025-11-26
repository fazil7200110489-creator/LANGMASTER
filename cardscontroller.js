export const getcards = (req,res)=>{
    try {
        const cards = [{ Title: "HTML", Description: "Learn HTML structure, elements, semantic tags, forms, and accessibility — the foundation of every website.", path: "/html" },
    { Title: "CSS", Description: "Master styling with selectors, box model, flexbox, grid, animations, and responsive design principles.", path: "/css" },
    { Title: "JavaScript", Description: "Core JavaScript concepts: variables, functions, DOM manipulation, ES6 features, and interview logic problems.", path: "/javascript" },
    { Title: "React JS", Description: "Front-end library for building UI: components, props, state, hooks, and routing with React Router.", path: "/react" },
    { Title: "TypeScript", Description: "Enhance JavaScript with static typing: types, interfaces, generics, and error prevention techniques.", path: "/typescript" },
    { Title: "Node JS", Description: "JavaScript backend runtime — modules, event loop, APIs, Express.js, and asynchronous programming.", path: "/nodejs" },
    { Title: "Express JS", Description: "Server framework for Node: routing, middleware, error handling, and RESTful API creation.", path: "/expressjs" },
    { Title: "MongoDB", Description: "Learn NoSQL database concepts: collections, documents, CRUD operations, and schema design.", path: "/mongodb" },
    { Title: "SQL", Description: "Understand relational databases: queries, joins, constraints, normalization, and interview-based SQL challenges.", path: "/sql" },
    { Title: "Git & GitHub", Description: "Version control essentials: commits, branches, merges, and collaboration workflows using GitHub.", path: "/git" },
    { Title: "Bootstrap", Description: "Build responsive UIs fast using grid system, components, utilities, and customization techniques.", path: "/bootstrap" },
    { Title: "Tailwind CSS", Description: "Utility-first CSS framework for rapid UI design with responsive and reusable classes.", path: "/tailwind" },
    { Title: "Next JS", Description: "React framework for production: server-side rendering (SSR), static generation, and optimized routing.", path: "/nextjs" },
    { Title: "Redux", Description: "State management in React — learn actions, reducers, store, and how to handle global app state.", path: "/redux" },
    { Title: "REST API", Description: "Understand API fundamentals — HTTP methods, CRUD, status codes, and connecting front-end with backend.", path: "/restapi" },
    { Title: "Data Structures & Algorithms", Description: "Sharpen problem-solving with arrays, linked lists, stacks, queues, trees, and sorting techniques.", path: "/dsa" },
    { Title: "Python", Description: "Beginner-friendly programming: syntax, loops, functions, OOP, and backend scripting basics.", path: "/python" },
  ];
  return res.status(200).json(cards);
    } catch (error) {
        console.log(error);
    res.status(500).json({ msg: "Server Error" });
    }
    

}