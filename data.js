const data = {
    "about": "Hi, I'm Aditya. I’m a developer who thrives on solving problems and exploring possibilities. Whenever something doesn’t work, I don’t stop — I experiment, rethink, and find new angles until a solution fits. I believe every challenge has multiple routes, and I enjoy figuring out the most efficient and cost-effective one. I value practicality over perfection — building systems that are reliable, maintainable, and scalable with available resources. Whether it’s debugging a tricky backend issue or designing a new workflow, I focus on understanding how and why something works rather than just making it work. I approach development with persistence, curiosity, and a constant drive to learn. My goal is to keep growing through real-world projects, build smarter solutions, and never lose the habit of questioning 'what if this could be done better?'",
  "education": [
    {
      "title": "B.Tech / B.E. Computer Science",
      "institute": "Marathwada Mitra Mandal's Institute of Technology, Pune",
      "duration": "2019-2023 | Full Time | CGPA: 8.8/10",
      "description": "2019-2023 | Full Time | CGPA: 8.8/10"
    },
    {
      "title": "Class XII",
      "institute": "Maharashtra Board",
      "duration": "2019 | Percentage: 74.77%",
      "description": "2019 | Percentage: 74.77%"
    },
    {
      "title": "Class X",
      "institute": "Maharashtra Board",
      "duration": "2017 | Percentage: 86.60%",
      "description": "2017 | Percentage: 86.60%"
    }
  ],
  "experience": [
    {
      "title": "Graduate Engineer Trainee",
      "company": "Neilsoft Ltd.",
      "duration": "10/07/2023 – 15/07/2023 (1 year)",
      "description": ["During this period, I have developed significant expertise in the field of image processing, particularly through the utilization of the YOLOX library.",
      "Additionally, I have explored advanced technologies in point cloud segmentation, experimenting with cutting-edge tools such as Pointcept and Repsurf.",
      "This experience has honed my technical skills and deepened my understanding of state-of-the-art image analysis and 3D point cloud segmentation libraries."
      ]
    },
    {
      "title": "Career Break",
      "company": "",
      "duration": "Jul 2024 – Present · 1 yr 4 mos",
      "description": ["After leaving my job to explore a master’s in computer science, I realized I am more passionate about building and implementing projects than focusing solely on theoretical study.",
        "During this period, I developed a game and noticed that indie teams face excessive manual testing.",
        "I researched possible solutions and created an MVP for a platform to streamline testing efficiently and cost-effectively.",
        "This hands-on project strengthened my problem-solving and technical skills, and reinforced my focus on software engineering and building real-world applications."
      ]
      
    }
  ],
  "projects": [
  {
    "title": "PlaytestUrGame — Backend-focused Video Analytics MVP (Active development)",
    "duration": "09/25 – Present",
    "description": [
      "Created and deployed backend APIs with Node.js / Express.js to facilitate multi-game testing sessions and player feedback gathering.",
      "Working on a selective video recording system that intelligently records gameplay only when enough feedback data has been collected — preventing redundant recordings and minimizing storage overhead.",
      "Prioritized efficient architecture over over-engineering for scalable analytics without redundant computation.",
      "Employed Supabase / MinIO for secure, structured data and video storage, and Docker to ensure local environment consistency and testing.",
      "Prepared for deployment through serverless platforms (Vercel, Netlify) to realize cost-efficient scalability.",
      "Existing AI-based bug detection robust solutions require Gigabytes of storage to identify problems, but this solution gets the work done in MBs (~99% storage saved), saving computational costs."
    ],
    "links":{
      "text":"Demo & explaination",
      "url":"https://www.youtube.com/embed/RWnosZw35s0"
    }
  },
  {
    "title": "Verify WebGL Build – npm package",
    "duration": "10/25 – 10/25",
    "description": [
      "Developed a package to validate Unity WebGL builds, which handles both compressed and uncompressed builds.",
      "Tested locally with Jest, that covers missing or malformed files/folders to ensure reliability.",
      "Published it as open-source npm-package, which encourages community contributions and future extensions to other game engines.",
      "Will use this as dependency for PlaytestUrGame project."
    ],
    "links":[
      {
        "text":"View on npm",
        "url":"https://www.npmjs.com/package/@adityamore.gamedev/is-webgl-build"
      }
    ]
  },
],
  skills: {
    languages: [
      "C#", "JavaScript", "HTML", "CSS", "Python"
    ],
    frameworks: [
      "React.js", "React Hooks", "Express.js", "Node.js","Jest"
    ],
    tools: [
      "Git", "Docker", "Supabase", "npm", "minio","Unity"
    ],
    database:[
      "PostgreSQL"
    ],
    concepts: [
      "System Design", "Database Design", "DBMS", "Algorithms", "Data Structures",
      "User Authentication", "DNS Management", "Creative Problem Solving",
      "Cost Efficiency", "Planning", "REST APIs"
    ]
  }

};
