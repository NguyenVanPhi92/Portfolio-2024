import project1 from '../assets/projects/project-1.jpg'
import project2 from '../assets/projects/project-2.jpg'
import project3 from '../assets/projects/project-3.jpg'
import project4 from '../assets/projects/project-4.jpg'

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`

export const EXPERIENCES = [
    {
        year: '2022',
        role: 'Intern Reactjs Developer',
        company: 'Biz4 Group.',
        description: `Experience the company's products (web, fintech applications). In case of checking sp at user location. Make a landing page for the company. Technologies used: HTML, SCSS, MUI, React Hook, React Hook Form, Yup, Resolvers, Axios, Typescript, Redux, Redux Toolkit,...`,
        technologies: ['Javascript', 'Typescript', 'React.js', 'MUI', 'SCSS/SASS']
    },
    {
        year: '2022 - 2023',
        role: 'Frontend Developer',
        company: 'Satavan',
        description: `Participate in e-commerce projects for various companies. Responsible for validating data forms, displaying product data on the UI, and performing functions such as adding and editing customer addresses. Technologies used: React, React Hook Form, Yup, Resolvers, Axios, Typescript, SWR,... Website: https://womart.vn `,
        technologies: ['HTML', 'CSS', 'SCSS', 'TailwindCSS', 'Typescript', 'React', 'Next', 'SWR']
    },
    {
        year: '2023 - 2024',
        role: 'Collaborator',
        company: 'Vietsing Global',
        description: `Design lessons for teachers using PowerPoint, ActivInspire, and other relevant tools. Support teachers in recording lectures. Write progress reports on work. Discuss, hand over, and report work to the team and team.
`,
        technologies: []
    }
]

export const PROJECTS = [
    {
        title: 'E-Commerce Website',
        image: project1,
        description:
            'A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.',
        technologies: ['HTML', 'CSS', 'React', 'Node.js', 'MongoDB']
    },
    {
        title: 'Task Management App',
        image: project2,
        description:
            'An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.',
        technologies: ['HTML', 'CSS', 'Angular', 'Firebase']
    },
    {
        title: 'Portfolio Website',
        image: project3,
        description:
            'A personal portfolio website showcasing projects, skills, and contact information.',
        technologies: ['HTML', 'CSS', 'React', 'Bootstrap']
    },
    {
        title: 'Blogging Platform',
        image: project4,
        description:
            'A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.',
        technologies: ['HTML', 'CSS', 'Vue.js', 'Express', 'mySQL']
    }
]

export const CONTACT = {
    address: 'District 12, Ho Chi Minh City',
    phoneNo: '0867876112',
    email: 'nguyenvanphi.fi@gmail.com'
}
