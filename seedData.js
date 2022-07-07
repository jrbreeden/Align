const resume = {
      personal: {
        name: 'Jhimson Pamisa',
        email: 'jim@gmail.com',
        phone: '9179464033',
        link1: 'github.com/Jim',
        link2: 'linkedIn.com/Jim',
        linked: 'dev-portfolio.com',
      },
      statement: {
        header: 'Summary',
        body: 'Full-Stack Software Engineer with education in Information Technology degree. As a dedicated problem solver, I display an expert skill in JavaScript and supporting libraries/frameworks that solve real-world problems through code. Through my time at the General Assembly Immersive Bootcamp, I have gained further hands-on experience in industry-standard development, which I’m looking to apply to a growing business like big tech companies',
      },
      skills: [
        { skill: 'HTML', priority: 0 },
        { skill: 'JavaScript', priority: 1 },
        { skill: 'React', priority: 2 },
      ],
      projects: {
        cond: { priority: 2, items: 2 },
        header: 'Projects',
        subSections: [
          {
            cond: { priority: 1, items: 2 },
            subHeader: 'Time Travel Guide',
            dateStart: Date.now(),
            dateEnd: Date.now(),
            lineItems: [
              {
                priority: 2,
                body: 'Developed a front-end web app that allows users to see all food items based on the ingredients that the user searched for.',
                tags: ['front-end', 'developed'],
              },
              {
                priority: 1,
                body: `Designed a structured query based on the users' input to retrieve data from the API and display the results`,
                tags: ['structured', 'api'],
              },
            ],
          },
          {
            cond: { priority: 1, items: 2 },
            subHeader: 'Stock Investments Tracker',
            dateStart: Date.now(),
            dateEnd: Date.now(),
            lineItems: [
              {
                priority: 2,
                body: 'Developed a Full-Stack web app that allows users to keep track of their buy and sell transactions of stocks',
                tags: ['Full-Stack', 'web', 'transactions'],
              },
              {
                priority: 1,
                body: `Created reusable components using EJS partials and were incorporated into all the pages in the app.`,
                tags: ['reusable', 'components', 'ejs'],
              },
            ],
          },
        ],
      },
      //! Projects schema end!
      workHistory: {
        cond: { priority: 2, items: 2 },
        header: 'Work History',
        subSections: [
          {
            cond: { priority: 1, items: 2 },
            subHeader: 'Software Engineer Fellow',
            dateStart: Date.now(),
            dateEnd: Date.now(),
            lineItems: [
              {
                priority: 2,
                body: 'Developed fully functional applications utilizing a MERN stack with working knowledge in many other languages, frameworks, and development processes.',
                tags: ['frameworks', 'mern'],
              },
              {
                priority: 1,
                body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                tags: ['industry', 'eletronic'],
              },
            ],
          },
          {
            cond: { priority: 1, items: 2 },
            subHeader: 'Full-Stack Software Engineer',
            dateStart: Date.now(),
            dateEnd: Date.now(),
            lineItems: [
              {
                priority: 2,
                body: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
                tags: ['Full-Stack', 'web', 'transactions'],
              },
              {
                priority: 1,
                body: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
                tags: ['variations', 'alteration', 'humour'],
              },
            ],
          },
        ],
      },
      //   ! END OF workHistory Schema
      education: {
        cond: { priority: 2, items: 2 },
        header: 'Education',
        subSections: [
          {
            cond: { priority: 1, items: 2 },
            subHeader: 'Bachelors of Science in Trying Hard - Harvard',
            dateStart: Date.now(),
            dateEnd: Date.now(),
            lineItems: [
              {
                priority: 2,
                body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
                tags: ['frameworks', 'mern'],
              },
              {
                priority: 1,
                body: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
                tags: ['translation', 'interested'],
              },
            ],
          },
          {
            cond: { priority: 1, items: 2 },
            subHeader: 'Software Engineering Immersive - General Assembly',
            dateStart: Date.now(),
            dateEnd: Date.now(),
            lineItems: [
              {
                priority: 2,
                body: `All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
                tags: ['generators', 'necessary', 'internet'],
              },
              {
                priority: 1,
                body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                tags: ['Excepteur', 'ipsum', 'laborum'],
              },
            ],
          },
        ],
      },
    }
  
  const users = {
    name:'Jim',
    email:'jim',
    password:'123',
  }

  const appliedJobs = {
    appliedJobList:[
        {
            position:'Dish Washer',
            company:'Netflix',
            logoUrl:'https://remotive.com/job/1224255/logo',
            location:'The moon',
            jobType:'Full Half time',
            job_link: 'https://google.com',
            resume_link:'Not yet',
            job_date_posted:'Nov 1910',
            date_applied:'Jun 2020'
        },{
            position:'Fish Washer',
            company:'Netflox',
            logoUrl:'https://remotive.com/job/1224255/logo',
            location:'The mooon',
            jobType:'Full Half time',
            job_link: 'https://google.com',
            resume_link:'Not yet',
            job_date_posted:'Nov 1910',
            date_applied:'Jun 2020'
        },{
            position:'Wish Washer',
            company:'Netflax',
            logoUrl:'https://remotive.com/job/1224255/logo',
            location:'The moooon',
            jobType:'Full Half time',
            job_link: 'https://google.com',
            resume_link:'Not yet',
            job_date_posted:'Nov 1910',
            date_applied:'Jun 2020'
        }
    ]
  }

  module.exports = {users , resume , appliedJobs}