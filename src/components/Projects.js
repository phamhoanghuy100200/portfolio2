import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
    const [listProjects] = useState([
        {
            name: 'AI chatbot',
            des: 'Building User interface using HTML, tailwindcss and Nextjs to interact with user. To create conversation or code generation through Chatgpt API, Responsive across a variety of browsers and devices.',
            language: 'HTML, tailwind, typescript, Nextjs,...',
            link: "https://ai-saas-seven-sigma.vercel.app/",
            images: '/project4.PNG'
        },
        {
            name: 'Calendar',
            des: 'Building User interface using HTML, tailwindcss and Reactjs to interact with user. To use Dayjs library  to parse, validate, manipulate, and display dates and times. To save data of user on local storage',
            language: 'HTML, tailwind, React JS,...',
            link: "https://calendar-phi-plum.vercel.app/",
            images: '/project2.PNG'
        },
        {
            name: 'Note',
            des: 'Building User interface using HTML, tailwindcss, shadcn/ui, to interact with user. To use convex platform that replaces my backend and database, Log in and save data user with cleck and realtime with convex. ',
            language: 'HTML, tailwind, Nextjs, convex,...',
            link: "https://note-nine-ecru.vercel.app/",
            images: '/project3.PNG'
        },
        {
            name: 'duolingo clone',
            des: 'to create, delete, edit lessons on the admin page or to learn it on the client page. This project help me to practice and develop my skills about interface, I self-study on YouTube.',
            language: 'HTML, tailwind, Nextjs,...',
            link: "https://duolingo-huypham.vercel.app/",
            images: '/project1.PNG'
        },

    ]);
    const divs = useRef([]);
    const scrollTab = useRef();
    CustomHook(scrollTab, divs);
    return (
        <section className='projects' ref={scrollTab}>
            <div className="title" ref={(el) => el && divs.current.push(el)}>
                This is my Projects
            </div>
            <div className="des" ref={(el) => el && divs.current.push(el)}>
                {/* 20 */}
            </div>
            <div className="list">
                {
                    listProjects.map((value, key) => (
                        <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
                            <div className="images">
                                <a target="_blank" rel="noopener noreferrer" href={value.link}>
                                    <img src={value.images} alt="" />
                                </a>
                            </div>
                            <div className="content">
                                <h3>{value.name}</h3>
                                <div className="des">{value.des}</div>

                                <div className="mission">
                                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                                    <div>
                                        <h4>Languages</h4>
                                        <div className="des">{value.language}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Projects