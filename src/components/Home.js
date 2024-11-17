import React, { useRef } from 'react'
import CustomHook from './CustomHook';
function Home() {
    const scrollTab = useRef();
    CustomHook(scrollTab);

    return (
        <section ref={scrollTab} className='home'>
            <div className="content">
                <div className="name">

                    MY NAME IS <span>HUY PHAM</span>
                </div>
                <div className="des">
                    {/* 30 */}
                    I was a graduate student. I am looking for a job opportunity. My personality is hardworking, high sense of responsibility and honesty.
                    Even though I don't have much work experience, I try to develop myself so that I can work together with your company.
                </div>

                <a href="/democv.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                    Download My CV
                </a>
            </div>
            <div className="avatar">
                <div className="card">

                    <img src="/logo192.png" alt="" />
                    {/* <div className="info">
                        <div>Developer</div>
                        <div>VietNamese</div>
                        <div>03/12</div>
                        <div>Male</div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Home