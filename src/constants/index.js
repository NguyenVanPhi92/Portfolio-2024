import project1 from '../assets/projects/project-1.jpg'
import project2 from '../assets/projects/project-2.jpg'
import project3 from '../assets/projects/project-3.jpg'
import project4 from '../assets/projects/project-4.jpg'

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`

// export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`
export const ABOUT_TEXT = `I started learning programming in 2020 at a college in Ho Chi Minh City, where I gained a lot of valuable knowledge about computer programming and software architecture models such as MVC and MVVM. I also acquired expertise in databases (SQL, NoSQL), websites (frontend client-side rendering (CSR) and backend server-side rendering (SSR)). After graduation, I completed an internship at a company in the finance tech sector, followed by another at a company specializing in B2B software solutions. Throughout my time at both companies, I accumulated a wealth of useful knowledge and hands-on experience. With a solid foundation and a burning passion to create specialized software, I am eager to contribute my skills and efforts to your project.`

export const EXPERIENCES = [
    {
        year: '2022',
        role: 'Intern React Developer',
        company: 'Biz4 Group.',
        description: `Experience the company's products (web, fintech applications). In case of checking sp at user location. Make a landing page for the company. Technologies used: HTML, SCSS, MUI, React Hook, React Hook Form, Yup, Resolvers, Axios, Typescript, Redux, Redux Toolkit,...`,
        technologies: ['Javascript', 'Typescript', 'React.js', 'MUI', 'SCSS/SASS']
    },
    {
        year: '2022 - 2023',
        role: 'Frontend Developer (React/Next)',
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
        title: 'Shopee Page',
        link: 'https://nguyenvanphi92.github.io/shopee_page/',
        image: project1,
        description:
            'A fully functional e-commerce website with features like product listing, shopping cart, and user authentication. A fully functional e-commerce website with features like product listing, shopping cart, and user authentication. A fully functional e-commerce website with features like product listing, shopping cart, and user authentication. A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.',
        technologies: ['HTML', 'CSS', 'Responsive']
    },
    {
        title: 'Ecommerce Page',
        link: 'https://nguyenvanphi92.github.io/e-commerce-html-css/',
        image: project1,
        description:
            'A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.',
        technologies: ['HTML', 'CSS', 'Responsive']
    },
    {
        title: 'Shoppe Clone',
        link: 'https://shoppe-react-ts.vercel.app/',
        image: project2,
        description:
            'An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.',
        technologies: [
            'HTML',
            'CSS',
            'React',
            'TypeScript',
            'Tailwindcss',
            'MongoDb',
            'Tanstack',
            'React Hook Form',
            'Axios',
            'i18next',
            'Storybook',
            'eslint',
            'prettier',
            'vite'
        ]
    },
    {
        title: 'Portfolio Website',
        link: 'https://portfolio-2024-sepia-theta.vercel.app/',
        image: project3,
        description:
            'A personal portfolio website showcasing projects, skills, and contact information.',
        technologies: [
            'HTML',
            'CSS',
            'React',
            'React motion',
            'Tailwind',
            'vite',
            'Swiperjs',
            'React-scroll'
        ]
    },
    {
        title: 'Blogging Platform',
        image: project4,
        description:
            'A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.',
        technologies: ['HTML', 'CSS', 'Next', 'Typescript', 'mySQL']
    }
]

export const CONTACT = {
    address: 'District 12, Ho Chi Minh City',
    phoneNo: '0867876112',
    email: 'nguyenvanphi.fi@gmail.com'
}
