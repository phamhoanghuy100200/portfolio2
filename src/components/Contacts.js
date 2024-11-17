import React, { useState, useRef } from 'react'
import CustomHook from './CustomHook';

function Contacts() {
    const [listContacts] = useState([
        {
            title: 'Phone Number',
            value: '+84392541360'
        }, {
            title: 'Email',
            value: 'huyhoangpham100200@gmail.com'
        }, {
            title: 'Github',
            value: 'https://github.com/phamhoanghuy100200'
        }
    ])
    const divs = useRef([]);
    const scrollTab = useRef();
    CustomHook(scrollTab, divs);

    return (
        <section className='contacts' ref={scrollTab}>
            <div className="title" ref={(el) => el && divs.current.push(el)}>
                This is my Contacts
            </div>
            <div className="des" ref={(el) => el && divs.current.push(el)}>
                {/* 20 */}
                aa
            </div>
            <div className="list" ref={(el) => el && divs.current.push(el)}>
                {
                    listContacts.map((value, key) => (
                        <div className='item' key={key}>
                            <h3>{value.title}</h3>
                            <div>{value.value}</div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Contacts