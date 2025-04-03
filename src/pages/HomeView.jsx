import { Link } from "react-router"
import BlurEffect from "../style/BlurEffect"

export default function HomeView() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center px-16 gap-8">
                <section className="flex justify-center items-center">
                    <img
                        className="w-[550px] object-contain rounded-[24%] hover:rounded-[14%] duration-150 hover:skew-x-3 hover:-skew-y-3 hover:backdrop-blur-3xl linear"
                        src="https://i.pinimg.com/736x/6f/a3/6a/6fa36aa2c367da06b2a4c8ae1cf9ee02.jpg"
                        alt="my-profile"
                    />
                </section>
                <section className="relative text-start text-3xl flex flex-col items-center justify-center rounded-3xl font-[700]">
                    Welcome! I am Kim Sokheng, a Year III Software Development student and aspiring Web FrontEnd Developer.
                    <Link to={`/project-section`} className="duration-200 mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        See My Projects
                    </Link>
                    <div className="absolute">
                        <BlurEffect />
                    </div>
                </section>

            </div>
        </>
    )
}

