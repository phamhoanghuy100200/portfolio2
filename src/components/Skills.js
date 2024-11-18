import React, { useRef, useState } from 'react'
import CustomHook from './CustomHook';
import { SpriteAnimator } from 'react-sprite-animator';

function Skills() {
    const divs = useRef([]);
    const scrollTab = useRef();
    CustomHook(scrollTab, divs);
    const [listSkills] = useState([
        {
            name: 'HTML',
            des: 'Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.',
            icon: 'html.png'
        },
        {
            name: 'CSS',
            icon: 'css.png'
        },
        {
            name: 'Javascript',
            des: 'Sunt nostrud nulla qui cillum mollit aute anim anim aliqua aute magna tempor. Do culpa culpa excepteur officia ut eu deserunt proident sint non ut do magna minim. Sunt et excepteur tempor culpa irure non exercitation. Amet nostrud ex aute incididunt incididunt ipsum.',
            icon: 'js.png'
        },
        {
            name: 'ReactJs',
            des: 'Voluptate qui adipisicing dolore pariatur laboris deserunt consectetur reprehenderit. Esse dolor elit ullamco duis quis aliquip fugiat ipsum nisi est et. Nisi ut deserunt excepteur irure aliquip proident ',
            icon: 'react.png'
        },
        // {
        //     name: 'VueJs',
        //     des: 'Laborum commodo reprehenderit anim sunt est. Aliquip ipsum nisi incididunt enim ex id et sit sint magna. Deserunt minim ullamco aute veniam. Do irure nulla ut quis.',
        //     icon: faVuejs
        // },
        // {
        //     name: 'Laravel',
        //     des: 'Ullamco incididunt adipisicing laboris ullamco ipsum quis nulla non. Non et irure amet in sint duis Lorem est eiusmod nisi. Aute dolor eiusmod esse et cupidatat ex minim do reprehenderit ut aute. In commodo do consectetur qui occaecat cupidatat sint ullamco dolor tempor ullamco elit.',
        //     icon: faLaravel
        // }

    ]);
    return (
        <section className='skills' ref={scrollTab}>

            <div className="title" ref={(el) => el && divs.current.push(el)}>
                <SpriteAnimator
                    sprite="/bocchifire.png"
                    width={100}
                    height={110}
                    frameCount={7}
                    direction={"horizontal"}
                    shouldAnimate={true}
                    fps={5}
                />
                <span>This is my Skills</span>
                <div className="des" ref={(el) => el && divs.current.push(el)}>
                    {/* 20 */}
                    <p> I often use Reactjs and Nextjs framework to build my projects with the support of tailwindcss, hook and shadcn/ui</p>

                </div>
            </div>


            <div className="list">
                <div className={'item '} ref={(el) => el && divs.current.push(el)}>
                    {

                        listSkills.map((value, key) => (
                            <div key={key}>
                                <img className='icons' src={value.icon} />
                                {/* <FontAwesomeIcon icon={value.icon} /> */}
                                <h3 className='nameicon'>{value.name}</h3>
                            </div>

                        ))


                    }
                </div>
            </div>
        </section>
    )
}

export default Skills