import { useEffect, useState } from "react";
import icon_design from './assets/icon-design.svg'
import icon_dev from './assets/icon-dev.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function About() {
    useEffect(() => {
        AOS.init();
    }, []);
    
    const [isLoad, setIsLoad] = useState(false);
    
    return (
        <>
            <div className="grid grid-cols-1 gap-8 justify-between p-8 lg:p-16 rounded-3xl bg-[#202022] ">
                <section className="flex flex-col">
                    <h2 className="text-start text-5xl font-semibold">About Me</h2>

                    <div className="text-base lg:text-xl font-[400] leading-7 flex rounded-3xl mt-4 ml-8 text-gray-300 relative
                    before:absolute
                    before:border-transparent
                    before:w-1
                    before:h-full
                    before:rounded-md
                    before:bg-gray-700
                    before:-left-8
                    before:bg-gradient-to-tr from-[#FFD16A] to-[purple]">
                        Hello, I am Kim Sokheng. I am currently in my third year studying Software Development, with a focus on Web FrontEnd Development.
                        <br />
                        <br />
                        I have been building my skills in creating user-friendly, responsive websites—working with tools like HTML, CSS, and JavaScript—and I am passionate about turning designs into functional, real-world solutions. Right now, I amm building my own portfolio website to showcase what I can do, and I am excited to bring that energy and curiosity to an internship where I can learn, contribute, and grow as a developer. Outside of coding, I enjoy personal interest gaming, exploring tech trends, which keeps me creative and motivated.
                    </div>
                </section>


                <div className="flex flex-col">
                    <h2 className="text-start text-3xl font-semibold">What I am doing</h2>
                    <div className="text-sm flex-col lg:flex-row leading-7 mt-4 flex items-center gap-8">
                        <section className=" shadow-[2px_2px_3px_rgba(128,128,128,0.4),-2px_-2px_3px_rgba(255,255,255,0.1)] rounded-xl p-6 flex items-center gap-8">
                            <img onLoad={() => setIsLoad(true)} className={`${!isLoad ? 'blur-xl' : ''}`} src={icon_design} alt="" />
                            <div>
                                <p className="text-xl font-semibold text-gray-300">Web Design</p>
                                <p className="text-md text-gray-400">The most modern and high-quality design made at a professional level.</p>
                            </div>
                        </section>
                        <section className="shadow-[2px_2px_3px_rgba(128,128,128,0.4),-2px_-2px_3px_rgba(255,255,255,0.1)] rounded-xl p-6 flex items-center gap-8">
                            <img src={icon_dev} alt="" />
                            <div>
                                <p className="text-xl font-semibold text-gray-300">Web Development</p>
                                <p className="text-md text-gray-400">The most modern and high-quality design made at a professional level.</p>
                            </div>
                        </section>
                    </div>
                </div>
                
            </div>
        </>
    )
}
