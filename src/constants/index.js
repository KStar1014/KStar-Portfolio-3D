const author = {
  fullname: "Lucas Carvalho",
  firstname: "Lucas",
  devtitle: "Full-stack & AI Engineer"
}

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 7, suffix: "+", label: "Years of Experience" },
  { value: 90, suffix: "+", label: "Satisfied Clients" },
  { value: 28, suffix: "+", label: "Completed Projects" },
  { value: 98, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Three.js Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git Action",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: `${author.firstname} brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.`,
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo2.png",
    title: `Fullstack & AI Engineer | LaunchDarkly`,
    date: "Jan 2024 - Feb 2025",
    responsibilities: [
      " Increased system performance by 45% by refactoring legacy backend architecture and implementing optimized API strategies using Node.js and PostgreSQL.",
      " Deployed 12+ AI models to production, including NLP-based chatbots and recommendation engines, using TensorFlow, OpenAI, and PyTorch frameworks.",
      " Led a team of 4 developers to build a full-featured SaaS platform, reducing time-to market by 30% through agile development and CI/CD automation.",
    ],
  },
  {
    review: `${author.firstname}’s contributions to Frontend web applications have been outstanding. He approaches challenges with a problem-solving mindset.`,
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo1.png",
    title: "Fullstack Engineer | DeepPixel",
    date: "Feb 2022 - Dec 2023",
    responsibilities: [
      "Developed 10+ fullstack features across web and mobile platforms using React, Node.js, and MongoDB, contributing to a 20% increase in user retention.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      " Built and deployed 3 internal tools that automated reporting and reduced manual work by 30+ hours per month for the operations team.",
    ],
  },
  {
    review: `${author.firstname}’s contributions to Frontend web applications have been outstanding. He approaches challenges with a problem-solving mindset.`,
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo2.png",
    title: "Frontend Developer | Hiive",
    date: "Jun 2020 - Oct 2021",
    responsibilities: [
      "Built and launched 8+ responsive web pages using React and Tailwind CSS, improving mobile usability scores by 40% across key pages.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      " Collaborated with a team of 4 developers to redesign the company’s homepage, leading to a 25% increase in user engagement over two months.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      `I can’t say enough good things about ${author.firstname}. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.`,
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      `Working with ${author.firstname} was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.`,
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      `Collaborating with ${author.firstname} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${author.firstname}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${author.firstname} is the ideal partner.`,
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      `${author.firstname} was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.`,
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      `${author.firstname}’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!`,
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      `${author.firstname} was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.`,
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  author,
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
