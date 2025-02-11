import project1 from "../src/assets/images/project1.png";
import project2 from "../src/assets/images/project2.png";
import project3 from "../src/assets/images/project3.png";
import project4 from "../src/assets/images/project4.png";

const logotext = "HILMI";
const meta = {
    title: "Hilmi Yahya",
    description: "I'm Hilmi Yahya, a Beginner Full-Stack Web Developer, currently studying at Sekolah Tinggi Teknologi Terpadu Nurul Fikri.",
};

const introdata = {
    title: "I'm Hilmi Yahya",
    animated: {
        first: "I build modern web applications",
        second: "I specialize in full-stack development",
        third: "I turn ideas into reality with code",
    },
    description: "A passionate Full-Stack Web Developer in the making, currently studying at Sekolah Tinggi Teknologi Terpadu Nurul Fikri. I enjoy building scalable web applications, exploring new technologies, and crafting seamless user experiences.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "A Bit About Myself",
    aboutme: "I'm Hilmi Yahya, a passionate beginner Full-Stack Web Developer currently studying at Sekolah Tinggi Teknologi Terpadu Nurul Fikri. I'm dedicated to learning modern web technologies, from front-end to back-end development. I enjoy building interactive and scalable web applications, exploring new frameworks, and improving my coding skills every day.",
};
const worktimeline = [
    {
        jobtitle: "Student",
        where: "Sekolah Tinggi Teknologi Terpadu Nurul Fikri",
        date: "2021 - Present",
    },
    {
        jobtitle: "Certified Web Development Independent Study MSIB Batch 5",
        where: "Infinite Learning",
        date: "August 14, 2023 - December 31, 2023",
    },
    {
        jobtitle: "Front-End Engineer With React JS MSIB Batch 6",
        where: "Alterra Academy",
        date: "February 16, 2024 - June 30, 2024",
    },
];

const skills = [{
        name: "Javascript",
        value: 60,
    },
    {
        name: "React",
        value: 70,
    },
    {
        name: "Node",
        value: 30,
    },
    {
        name: "Express",
        value: 20,
    },
    {
        name: "MongoDB",
        value: 20,
    },
];

const services = [
    {
        title: "Frontend Development",
        description: "I create visually appealing and interactive user interfaces using modern frameworks like React and Tailwind CSS. My focus is on delivering responsive, user-friendly designs.",
    },
    {
        title: "Backend Development",
        description: "I build scalable and secure server-side applications using Node.js, Express, and MongoDB. I focus on creating efficient APIs and databases that power dynamic web apps.",
    },
    {
        title: "Fullstack Development",
        description: "I combine my skills in both frontend and backend to develop complete web applications. From designing intuitive user interfaces to handling server-side logic, I create end-to-end solutions.",
    },
];

const dataportfolio = [{
        img: project1,
        description: "Movie information website built with React and integrated with the TMDb API to display categorized movie details.",
        link: "https://movie-database-hilmiyahya19.vercel.app/",
    },
    {
        img: project2,
        description: "COVID-19 monitoring website built with React to manage patient data in real-time.",
        link: "https://hilmiyahya19-covid-app.vercel.app/",
    },
    {
        img: project3,
        description: "Movie website built with React, featuring TMDb API integration, an interactive chatbot, and CRUD functionality using Supabase.",
        link: "https://sky-movie.vercel.app/",
    },
    {
        img: project4,
        description: "Donation website built with React, featuring a landing page, an admin dashboard, and data visualization.",
        link: "https://pedulipintar.vercel.app/",
    },
    {
        img: "https://picsum.photos/1920/1080?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/1920/1080?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/1920/1080?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/1920/1080?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/1920/1080?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/1920/1080?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/1920/1080?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/1920/1080?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "hilmiyahya@example.com", // Ganti dengan email aktif
    YOUR_FONE: "+62 812-3456-7890", // Ganti dengan nomor HP yang sesuai
    description: "Feel free to reach out! I’m always open to discussing web development, new projects, or collaboration opportunities.",
    // Create an emailjs.com account 
    // Check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "your_service_id", // Ganti dengan Service ID dari EmailJS
    YOUR_TEMPLATE_ID: "your_template_id", // Ganti dengan Template ID dari EmailJS
    YOUR_USER_ID: "your_user_id", // Ganti dengan User ID dari EmailJS
};

const socialprofils = {
    github: "https://github.com/hilmiyahya19",
    facebook: "https://www.facebook.com/share/1KtB6LQv5S/",
    linkedin: "https://www.linkedin.com/in/hyhlmyhy/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};