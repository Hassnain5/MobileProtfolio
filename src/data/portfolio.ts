export const profile = {
  name: "Syed Noor Ul Hassnain",
  role: "AI / ML Engineer & Flutter Developer",
  location: "Lahore, Pakistan",
  email: "muhammadxhah372@gmail.com",
  phone: "+92-325-181-3944",
  linkedin: "https://www.linkedin.com/in/syed-noor-ul-hassnain-a2124b294/",
  github: "https://github.com/Hassnain5",
  summary:
    "Computer Science graduate working across two lanes: AI and machine learning, and cross-platform mobile development. I build and train models for real-world prediction tasks, work with NLP and RAG pipelines in Python, and ship production Flutter apps for Android and iOS backed by Firebase, REST APIs and third-party integrations like Stripe and Google Maps.",
};

export const marqueeWords = [
  "Machine Learning",
  "Flutter",
  "Deep Learning",
  "RAG",
  "NLP",
  "Firebase",
  "AI Agents",
  "Dart",
  "Python",
  "BLoC",
  "n8n",
  "Supabase",
];

export const stats = [
  { value: "12+", label: "Projects shipped" },
  { value: "9 mo", label: "Flutter internships" },
  { value: "85%+", label: "DNA model accuracy" },
  { value: "5", label: "Certifications" },
];

export const skillGroups = [
  {
    title: "AI & Machine Learning",
    items: [
      "AI Agents",
      "Machine Learning",
      "Deep Learning",
      "Artificial Neural Networks",
      "RAG",
      "NLP",
      "Supervised Learning",
      "Unsupervised Learning",
      "Model Training & Evaluation",
      "Feature Engineering",
    ],
  },
  {
    title: "Mobile Development",
    items: [
      "Flutter",
      "Dart",
      "Provider",
      "BLoC",
      "MVVM",
      "CI/CD Pipelines",
      "REST API Integration",
      "Android & iOS",
      "Kotlin / XML",
    ],
  },
  {
    title: "Libraries & Frameworks",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "NLTK",
      "Hugging Face Transformers",
      "Matplotlib",
    ],
  },
  {
    title: "Databases",
    items: [
      "Supabase",
      "Firebase Firestore",
      "Firebase Realtime Database",
      "Firebase Authentication",
      "Firebase Storage",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "n8n",
      "Jupyter Notebook",
      "Google Colab",
      "VS Code",
      "Android Studio",
      "Git & GitHub",
      "Postman",
      "Figma",
      "Power BI",
      "MS Excel",
      "Google Sheets",
    ],
  },
];

export const experience = [
  {
    company: "TecniForge",
    role: "Flutter Developer Intern",
    period: "Oct 2025 — Apr 2026",
    length: "6 months",
    points: [
      "Integrated Stripe Payment Gateway, Google Maps and LLM models into Flutter apps, using BLoC to manage API-driven app state.",
      "Connected apps to external services through RESTful APIs, handling request and response flows across features.",
    ],
  },
  {
    company: "Tech Step",
    role: "Flutter Developer Intern",
    period: "Aug 2025 — Oct 2025",
    length: "3 months",
    points: [
      "Implemented Firebase Authentication, Firestore and Storage across app features to support login, data storage and file management.",
      "Integrated RESTful APIs and handled request, response and error states to keep the mobile experience stable.",
    ],
  },
];

export const projects = [
  {
    title: "Restaurant WhatsApp AI Agent",
    tag: "AI Agent",
    stack: ["n8n", "Gemini LLM", "RAG", "Supabase", "Embeddings"],
    points: [
      "AI agent that replies to restaurant customers on WhatsApp for deal queries, food ordering and table reservations.",
      "Used RAG over a knowledge base so customer questions get grounded, accurate answers.",
    ],
  },
  {
    title: "DNA-Based Disease Prediction",
    tag: "Deep Learning",
    stack: ["Python", "ANN", "scikit-learn", "Pandas"],
    points: [
      "Trained an artificial neural network to classify DNA sequences as healthy or diseased, reaching over 85% test accuracy.",
      "Preprocessed raw DNA data, extracted features and handled class imbalance before training.",
      "Wrote a standalone real-time prediction script so new input could be tested without rerunning the pipeline.",
    ],
  },
  {
    title: "Child Condition Prediction from Parental DNA",
    tag: "Deep Learning",
    stack: ["Python", "Deep Learning", "Matplotlib"],
    points: [
      "Deep learning model estimating the likelihood of a genetic abnormality in a child from both parents' DNA profiles.",
      "Trained on labeled datasets and visualised prediction behaviour across input combinations.",
    ],
  },
  {
    title: "AI Bargaining Chat App",
    tag: "Flutter",
    stack: ["Flutter", "Firebase", "MVVM", "BLoC"],
    points: [
      "Real-time chat app where users find and message each other with a unique user ID.",
      "AI auto-reply reads a user's past messages, learns their writing style and responds to new chats in that voice.",
      "Structured with MVVM architecture and BLoC state management.",
    ],
  },
  {
    title: "Attendance Management App",
    tag: "Flutter",
    stack: ["Flutter", "Firebase", "Reports"],
    points: [
      "Student panel to log in, mark daily attendance, apply for leave and review attendance history.",
      "Admin panel to view stats, approve or reject leave, edit records and export reports.",
      "Grading module that auto-calculates monthly grades from attendance counts.",
    ],
  },
  {
    title: "Smart Job Application App",
    tag: "Android",
    stack: ["Kotlin", "XML", "Firebase", "AI Ranking"],
    points: [
      "Android app with a Q&A community where users post and answer tech questions.",
      "AI compares an applicant's Q&A activity against role requirements and ranks best-fit candidates automatically.",
      "Firebase Realtime DB, Auth and Storage for role-based access and file handling.",
    ],
  },
  {
    title: "Spotify Songs App",
    tag: "Flutter",
    stack: ["Flutter", "OAuth 2.0", "Spotify Web API"],
    points: [
      "Integrated Spotify OAuth 2.0 for authentication, token access and refresh.",
      "Real-time song search against the Spotify API with detailed track results.",
    ],
  },
  {
    title: "Google Maps Implementation",
    tag: "Flutter",
    stack: ["Flutter", "Google Maps SDK"],
    points: [
      "Live user location, custom markers and best-route drawing between two selected points.",
    ],
  },
  {
    title: "Stripe Payment Integration",
    tag: "Flutter",
    stack: ["Flutter", "Stripe", "Secure APIs"],
    points: [
      "Stripe payments wired through secure backend APIs with full transaction response handling.",
    ],
  },
];

export const certifications = [
  {
    title: "AI Engineer for Data Scientists Associate",
    issuer: "DataCamp",
    year: "2024",
    detail:
      "Building and evaluating AI models for data-driven tasks with a focus on practical deployment workflows and real-world datasets.",
  },
  {
    title: "Natural Language Processing in Python",
    issuer: "DataCamp",
    year: "2024",
    detail:
      "Text preprocessing, tokenization, sentiment analysis and Hugging Face transformers for classification and generation.",
  },
  {
    title: "Supervised Learning with scikit-learn",
    issuer: "DataCamp",
    year: "2024",
    detail: "Built and tuned classification and regression models across several dataset types.",
  },
  {
    title: "Unsupervised Learning in Python",
    issuer: "DataCamp",
    year: "2024",
    detail: "Clustering models and cluster-structure visualisation on unlabeled data.",
  },
  {
    title: "Certificate of Appreciation",
    issuer: "Google Developer Student Club",
    year: "2024",
    detail:
      "Recognised for technical contributions and for organising and running community tech events.",
  },
];

export const education = {
  degree: "BS Computer Science",
  school: "COMSATS University Islamabad",
  period: "Sept 2021 — June 2025",
  coursework: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Programming Fundamentals",
    "OOP using Java",
    "Database Systems",
    "Data Structures",
    "Software Engineering Concepts",
    "Web Technologies",
    "Mobile Application Development",
  ],
};
