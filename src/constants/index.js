import portfolioImg from '../assets/pic/projects/portfolio-img.png'
import shopeeImg from '../assets/pic/projects/shopee.png'
import gamexstudio from '../assets/pic/projects/gamexstudio.png'
import hayday from '../assets/pic/projects/heyday.png'

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`

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
    // Nodejs Express
    // {
    //     title: 'Twitter API',
    //     link: 'https://shoppe-react-ts.vercel.app/',
    //     demo: 'https://youtube.com',
    //     pop_up: portfolioImg,
    //     featureUser: [],
    //     featureDev: [],
    //     system: 'https://drawsql.app/',
    //     figma: 'https://figma.com',
    //     description:
    //         'A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.',
    //     technologies: []
    // },
    // React/Next-js-ts
    {
        title: 'Shoppe Clone',
        link: 'https://shoppe-react-ts.vercel.app/',
        demo: 'https://youtube.com',
        git: 'https://github.com/NguyenVanPhi92/shoppe_react_ts',
        pop_up: shopeeImg,
        featureUser: [
            'Authentication with JWT',
            'Login (email and password, google, phone)',
            'Logout',
            'Register',
            'Multiple language options',
            'Show detailed information user and product',
            'Management product (pagination, sorting, filter, search)',
            'Management product cart(buy and update cart)',
            'Management user(info, avatar, password, view order status, update)',
            'Tối ưu performance với kỹ thuật lazy load vào page nào load page đó '
        ],
        featureDev: [
            'Management UI component',
            'Format code according to regulations',
            'Testing feature',
            'Document component for member',
            'Writing document',
            'ErrorBoundary: debug UI react when error component'
        ],
        system: 'https://drawsql.app/',
        figma: 'https://figma.com',
        description:
            'A demo website showcasing basic features of an e-commerce platform, allowing you to shop from anywhere with just an internet connection.',
        technologies: [
            'HeadlessUI',
            'TailwindCss',
            'TypeScript',
            'React 18',
            'React Hook Form',
            'React Router',
            'React Helmet',
            'Tanstack',
            'Axios',
            'i18next',
            'Firebase',
            'RestfullApi',
            'Storybook',
            'Unit Test',
            'eslint',
            'prettier',
            'vite'
        ]
    },
    {
        title: 'Portfolio Website',
        link: 'https://portfolio-2024-sepia-theta.vercel.app/',
        demo: 'https://youtube.com',
        git: 'https://github.com/NguyenVanPhi92/Portfolio-2024',
        pop_up: portfolioImg,
        featureUser: [
            'Multiple language options, ',
            'Show detailed information client, ',
            'Multiple display modes, ',
            'User-friendly UI.',
            'Single page application(One page)'
        ],
        featureDev: [
            'Management UI component',
            'Format code according to regulations',
            'Testing feature',
            'Writing document'
        ],
        system: 'https://drawsql.app/',
        figma: 'https://figma.com',
        description:
            'In the age of advancing technology, a personal website can help you stand out more to employers or clients.',
        technologies: [
            'React 18',
            'React motion',
            'Redux Toolkit',
            'React-scroll',
            'Tailwind 3',
            'Axios',
            'i18n',
            'Swiperjs',
            'eslint',
            'prettier',
            'vite'
        ]
    },
    {
        title: 'Games X Studio',
        link: 'https://portfolio-2024-sepia-theta.vercel.app/',
        demo: 'https://youtube.com',
        git: 'https://github.com/NguyenVanPhi92/Portfolio-2024',
        pop_up: gamexstudio,
        featureUser: [
            'Multiple language options, ',
            'Show detailed information client, ',
            'Multiple display modes, ',
            'User-friendly UI.',
            'Single page application(One page)'
        ],
        featureDev: [
            'Management UI component',
            'Format code according to regulations',
            'Testing feature',
            'Writing document'
        ],
        system: 'https://drawsql.app/',
        figma: 'https://www.figma.com/design/KrR3NfHoodhIwsWIgCGuMC/GameXStudio?node-id=0-1&node-type=canvas&t=zuj7mow2F9oQZzNk-0',
        description: 'Lading page web công ty',
        technologies: [
            'React 18',
            'Next.js 15',
            'React motion',
            'React-scroll',
            'Tailwind 3',
            'Swiperjs',
            'eslint',
            'prettier',
            'vite'
        ]
    },
    {
        title: 'Hayday Lading page',
        link: 'https://portfolio-2024-sepia-theta.vercel.app/',
        demo: 'https://youtube.com',
        git: 'https://github.com/NguyenVanPhi92/Portfolio-2024',
        pop_up: hayday,
        featureUser: [
            'Multiple language options, ',
            'Show detailed information client, ',
            'Multiple display modes, ',
            'User-friendly UI.',
            'Single page application(One page)'
        ],
        featureDev: [
            'Management UI component',
            'Format code according to regulations',
            'Testing feature',
            'Writing document'
        ],
        system: 'https://drawsql.app/',
        figma: 'https://www.figma.com/design/QxTgBlpcststqc7g4LhbCZ/Heyday-Landing-Page?node-id=284-1843',
        description: 'Lading page web công ty',
        technologies: [
            'React 18',
            'Next.js 15',
            'React motion',
            'React-scroll',
            'Tailwind 3',
            'Swiperjs',
            'eslint',
            'prettier',
            'vite'
        ]
    }
    // {
    //     title: 'Blogging Platform',
    //     link: 'https://shoppe-react-ts.vercel.app/',
    //     demo: 'https://youtube.com',
    //     pop_up: portfolioImg,
    //     featureUser: [
    //         'Authentication with JWT',
    //         'Login',
    //         'Logout',
    //         'Register',
    //         'Multiple language options',
    //         'Show detailed information blog',
    //         'Management blog (pagination, sorting, filter, search input, search date)',
    //         'Management post (create, edit, delete, update)'
    //     ],
    //     featureDev: [
    //         'Management UI component',
    //         'Format code according to regulations',
    //         'Testing feature',
    //         'Writing document'
    //     ],
    //     system: 'https://drawsql.app/',
    //     figma: 'https://figma.com',
    //     description:
    //         'A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.',
    //     technologies: [
    //         'MUI 5',
    //         'Next 11',
    //         'Typescript',
    //         'SWR',
    //         'React Hook Form',
    //         'Cookies',
    //         'Axios',
    //         'eslint',
    //         'prettier',
    //         'create next app'
    //     ]
    // }
    // {
    //     title: 'Restaurant Management',
    //     link: 'https://shoppe-react-ts.vercel.app/',
    //     demo: 'https://youtube.com',
    //     pop_up: portfolioImg,
    //     featureUser: [
    //         'Authentication with JWT',
    //         'Login',
    //         'Logout',
    //         'Register',
    //         'Multiple language options',
    //         'Show detailed information blog',
    //         'Management blog (pagination, sorting, filter, search input, search date)',
    //         'Management post (create, edit, delete, update)'
    //     ],
    //     featureDev: [
    //         'Management UI component',
    //         'Format code according to regulations',
    //         'Testing feature',
    //         'Writing document'
    //     ],
    //     system: 'https://drawsql.app/',
    //     figma: 'https://figma.com',
    //     description:
    //         'A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.',
    //     technologies: [
    //         'MUI 5',
    //         'Next 11',
    //         'Typescript',
    //         'SWR',
    //         'React Hook Form',
    //         'Cookies',
    //         'Axios',
    //         'eslint',
    //         'prettier',
    //         'create next app'
    //     ]
    // }

    // // Javascript vanilla
    // {
    //     title: 'Music app',
    //     link: 'https://nguyenvanphi92.github.io/music-app/',
    //     pop_up: portfolioImg,
    //     featureUser: [
    //         'Authentication with JWT',
    //         'Login (email and password, google, phone)',
    //         'Logout',
    //         'Register',
    //         'Multiple language options',
    //         'Show detailed information user and product',
    //         'Management product (pagination, sorting, filter, search)',
    //         'Management product cart(buy and update cart)',
    //         'Management user(info, avatar, password, view order status, update)'
    //     ],
    //     featureDev: [
    //         'Management UI component',
    //         'Format code according to regulations',
    //         'Testing feature',
    //         'Writing document'
    //     ],
    //     figma: 'https://figma.com',
    //     description:
    //         'A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.',
    //     technologies: ['HTML5/CSS3', 'Javascript vanilla']
    // },
    // {
    //     title: 'Pixel app',
    //     link: 'https://nguyenvanphi92.github.io/pixel-app/',
    //     pop_up: portfolioImg,
    //     featureUser: [
    //         'Authentication with JWT',
    //         'Login (email and password, google, phone)',
    //         'Logout',
    //         'Register',
    //         'Multiple language options',
    //         'Show detailed information user and product',
    //         'Management product (pagination, sorting, filter, search)',
    //         'Management product cart(buy and update cart)',
    //         'Management user(info, avatar, password, view order status, update)'
    //     ],
    //     featureDev: [
    //         'Management UI component',
    //         'Format code according to regulations',
    //         'Testing feature',
    //         'Writing document'
    //     ],
    //     figma: 'https://figma.com',
    //     description:
    //         'A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.',
    //     technologies: ['HTML5/CSS3', 'Javascript vanilla']
    // },
    // {
    //     title: 'Recipe app',
    //     link: 'https://nguyenvanphi92.github.io/recipe-app/',
    //     pop_up: portfolioImg,
    //     featureUser: [
    //         'Authentication with JWT',
    //         'Login (email and password, google, phone)',
    //         'Logout',
    //         'Register',
    //         'Multiple language options',
    //         'Show detailed information user and product',
    //         'Management product (pagination, sorting, filter, search)',
    //         'Management product cart(buy and update cart)',
    //         'Management user(info, avatar, password, view order status, update)'
    //     ],
    //     featureDev: [
    //         'Management UI component',
    //         'Format code according to regulations',
    //         'Testing feature',
    //         'Writing document'
    //     ],
    //     figma: 'https://figma.com',
    //     description:
    //         'A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.',
    //     technologies: ['HTML5/CSS3', 'Javascript vanilla']
    // },
    // {
    //     title: 'Weather app',
    //     link: 'https://nguyenvanphi92.github.io/weather-app/',
    //     pop_up: portfolioImg,
    //     featureUser: [
    //         'Authentication with JWT',
    //         'Login (email and password, google, phone)',
    //         'Logout',
    //         'Register',
    //         'Multiple language options',
    //         'Show detailed information user and product',
    //         'Management product (pagination, sorting, filter, search)',
    //         'Management product cart(buy and update cart)',
    //         'Management user(info, avatar, password, view order status, update)'
    //     ],
    //     featureDev: [
    //         'Management UI component',
    //         'Format code according to regulations',
    //         'Testing feature',
    //         'Writing document'
    //     ],
    //     figma: 'https://figma.com',
    //     description:
    //         'A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.',
    //     technologies: ['HTML5/CSS3', 'Javascript vanilla']
    // },
    // // HTML/CSS/SCSS Tailwind Bootstrap
    // {
    //     title: 'Coffee Page',
    //     link: 'https://nguyenvanphi92.github.io/e-commerce-html-css/',
    //     pop_up: portfolioImg,
    //     featureUser: [
    //         'Authentication with JWT',
    //         'Login (email and password, google, phone)',
    //         'Logout',
    //         'Register',
    //         'Multiple language options',
    //         'Show detailed information user and product',
    //         'Management product (pagination, sorting, filter, search)',
    //         'Management product cart(buy and update cart)',
    //         'Management user(info, avatar, password, view order status, update)'
    //     ],
    //     featureDev: [
    //         'Management UI component',
    //         'Format code according to regulations',
    //         'Testing feature',
    //         'Writing document'
    //     ],
    //     figma: 'https://figma.com',
    //     description:
    //         'A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.',
    //     technologies: ['HTML5/CSS3', 'TailwindCss3']
    // },
    // {
    //     title: 'E-commerce Page',
    //     link: 'https://nguyenvanphi92.github.io/e-commerce-html-css/',
    //     pop_up: portfolioImg,
    //     featureUser: [
    //         'Authentication with JWT',
    //         'Login (email and password, google, phone)',
    //         'Logout',
    //         'Register',
    //         'Multiple language options',
    //         'Show detailed information user and product',
    //         'Management product (pagination, sorting, filter, search)',
    //         'Management product cart(buy and update cart)',
    //         'Management user(info, avatar, password, view order status, update)'
    //     ],
    //     featureDev: [
    //         'Management UI component',
    //         'Format code according to regulations',
    //         'Testing feature',
    //         'Writing document'
    //     ],
    //     figma: 'https://figma.com',
    //     description:
    //         'A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.',
    //     technologies: ['HTML5/CSS3', 'Responsive']
    // },
    // {
    //     title: 'Shopee Page',
    //     link: 'https://nguyenvanphi92.github.io/shopee_page/',
    //     pop_up: portfolioImg,
    //     featureUser: [
    //         'Authentication with JWT',
    //         'Login (email and password, google, phone)',
    //         'Logout',
    //         'Register',
    //         'Multiple language options',
    //         'Show detailed information user and product',
    //         'Management product (pagination, sorting, filter, search)',
    //         'Management product cart(buy and update cart)',
    //         'Management user(info, avatar, password, view order status, update)'
    //     ],
    //     featureDev: [
    //         'Management UI component',
    //         'Format code according to regulations',
    //         'Testing feature',
    //         'Writing document'
    //     ],
    //     figma: 'https://figma.com',
    //     description:
    //         'A fully functional e-commerce website with features like product listing, shopping cart, and user authentication. A fully functional e-commerce website with features like product listing, shopping cart, and user authentication. A fully functional e-commerce website with features like product listing, shopping cart, and user authentication. A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.',
    //     technologies: ['HTML5/CSS3', 'Responsive']
    // }
]

export const CONTACT = {
    address: 'District 12, Ho Chi Minh City',
    phoneNo: '0867876112',
    email: 'nguyenvanphi.fi@gmail.com'
}

export const Action_REDUCER = {
    DARK_MODE: 'DARK_MODE',
    GET_TOKEN: 'GET_TOKEN',
    GET_USER: 'GET_USER'
}
