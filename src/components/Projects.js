import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
    const [listProjects] = useState([
        {
            name: 'AI chatbot',
            des: 'To use chatgpt api to create conversation or code generation with ai in this website.',
            language: 'HTML5, tailwind, React JS, shadcn, typescript, Nextjs...',
            link: "https://ai-saas-seven-sigma.vercel.app/",
            images: '/project4.PNG'
        },
        {
            name: 'Calendar',
            des: 'To save schedule personel',
            language: 'HTML5, tailwind, React JS,',
            link: "https://calendar-phi-plum.vercel.app/",
            images: '/project2.PNG'
        },
        {
            name: 'Note',
            des: 'to create page to save infomation you want.(notion clone)',
            language: 'HTML5, tailwind, Nextjs, convex...',
            link: "https://note-nine-ecru.vercel.app/",
            images: '/project3.PNG'
        },
        {
            name: 'duolingo clone',
            des: 'to create lessons or learn it.',
            language: 'HTML5, tailwind, Nextjs,',
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