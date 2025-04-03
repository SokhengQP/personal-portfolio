import { Link } from "react-router"
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

export default function Personal_Info() {

    const [isBeingLoad, setIsBeingLoad] = useState(false);
    const [isDisplayed, setIsDisplayed] = useState(false);

    function displayed() {
        setIsDisplayed(prev => !prev);
    }

    return (
        <>
            <div className="relative rounded-3xl  flex flex-col gap-8 py-16 px-8 bg-[#202022]">

                <div className="flex flex-col gap-4 justify-center items-center ">
                    <img
                        onClick={displayed}
                        onLoad={() => setIsBeingLoad(true)}
                        src="https://i.pinimg.com/736x/c1/cb/99/c1cb994fe14cbfd13f182ea446945e02.jpg"
                        className={`cursor-pointer border-none object-cover shadow-[0_0_20px_4px_gray] ${!isBeingLoad ? 'blur-xl' : ''} duration-200 ease-in-out ${!isDisplayed ?  'w-10 h-10 rounded-lg' : 'w-24 h-24 rounded-xl'}`}
                        alt="personal-portfolio"
                    />
                    <div className={`${!isDisplayed ? 'hidden' : 'block'} text-center`}>
                        <p className="text-gray-200 text-xl font-semibold">Kim Sokheng</p>
                        <p className="text-nowrap rounded-md text-sm">A Web FrontEnd Developer</p>
                    </div>
                </div>

                <section className="flex items-center gap-4 px-4 cursor-pointer">
                    <aside className="shadow-[0_0_4px_white] rounded-lg h-10 w-10 flex justify-center items-center">
                        <MdOutlineMailOutline size={18} />
                    </aside>

                    <div className={` text-sm text-nowrap text-gray-400 ${!isDisplayed ? 'hidden' : 'block'} `}>
                        <p className="text-xs">Email</p>
                        <p className="text-white">March 01, 2002</p>
                    </div>

                </section >

                <section className="flex items-center gap-4 px-4">
                    <aside className="shadow-[0_0_4px_white] rounded-lg h-10 w-10 flex justify-center items-center">
                        <FaPhone size={18} />
                    </aside>
                    <div className={` text-sm text-nowrap text-gray-400 ${!isDisplayed ? 'hidden' : 'block'} `}>
                        <p className="text-xs">Phone</p>
                        <p className="text-white">086 419 494</p>
                    </div>
                </section>

                <section className="flex items-center gap-4 px-4">

                    <aside className="shadow-[0_0_4px_white] rounded-lg h-10 w-10  flex justify-center items-center ">
                        <LiaBirthdayCakeSolid size={18} className="" />
                    </aside>

                    <div className={`block text-sm text-nowrap text-gray-400 ${!isDisplayed ? 'hidden' : 'block'}`}>
                        <p className="text-xs">Birthday</p>
                        <p className="text-white">March 1st, 2002</p>
                    </div>

                </section>

                <section className="flex items-center gap-4 px-4">
                    <aside className="shadow-[0_0_4px_white] rounded-lg h-10 w-10 flex justify-center items-center ">
                        <FaLocationDot size={18} />
                    </aside>

                    <div className={`text-nowrap duration-150 text-gray-400 ${!isDisplayed ? 'hidden' : 'block'}`}>
                        <p className={`text-xs`}>Location</p>
                        <p className="text-white">Phnom Penh</p>
                    </div>
                </section>

            </div >


        </>
    )
}
