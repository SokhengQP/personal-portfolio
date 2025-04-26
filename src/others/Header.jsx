import { Link } from "react-router";
import { useState } from "react";

export default function Header() {
    const [isBeingLoad, setIsBeingLoad] = useState(false);

    const links = [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'About',
            path: '/about-section',
        },

        {
            title: 'Resume',
            path: '/resume-section',
        },
        {
            title: 'Contact',
            path: '/contact-section',
        },
    ]

    return (
        <>
            <div className="flex p-4 justify-between gap-8 rounded-3xl bg-[#80808072] backdrop-blur-xl ">

                <Link to={`/`} className='rounded-md'>
                    <img
                        onLoad={() => setIsBeingLoad(true)}
                        src="https://i.pinimg.com/736x/15/96/e8/1596e8b0b72e1119589e2cf679cb8cdd.jpg"
                        className={` w-14 h-14 rounded-md object-contain ${!isBeingLoad ? 'blur-xl' : ''} backdrop-blur-2xl`}
                        alt="personal-portfolio"
                    />
                </Link>

                <div className="flex items-center justify-center gap-6 cursor-pointer z-10">
                    {
                        links.map((item, index) => {
                            const { title, path } = item;
                            return (
                                <Link to={path} key={index} className="text-sm sm:text-xl">
                                    <div className="text-nowrap underline-offset-8 relative group font-[400]">
                                        {title}
                                        <span className="absolute left-0 bottom-0 w-0 h-[4px] rounded-3xl bg-current transition-all duration-200 group-hover:w-full"></span>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>

                <div id='bg-effect' className='bg-[conic-gradient(from_90deg,#3b82f6,#8b5cf6,#ff9e00)] blur-3xl -z-10 absolute w-full left-0 top-0 h-full rounded-3xl'>
                </div>
            </div>
        </>
    )
}

