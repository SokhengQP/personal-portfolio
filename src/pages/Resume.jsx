import { FaReact, FaNode } from "react-icons/fa6";
import { TiHtml5 } from "react-icons/ti";
import { BiSolidFileCss } from "react-icons/bi";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import auth from '../pages/assets/auth.png'
import movie from '../pages/assets/movie.png'
import todo from '../pages/assets/todo.png'


export default function Resume() {

    const profiles = {

        results: [
            {
                school: 'Norton University',
                skills: 'Software Development',
                start_date: '2021',
                end_date: '',
                continues: 'continue',
            },

            {
                school: 'Beltei International School',
                skills: 'Khmer General Knowledge',
                start_date: '2015',
                end_date: '2021',
            },

            {
                school: 'Beltei Internetional School',
                skills: 'English Class',
                start_date: '2018',
                end_date: '2020',
            },

            {
                school: 'Self-learning',
                skills: 'English Class',
                timespending: '2 years'
            },
        ],

        experiences: [
            {
                name_place: 'Mobile Coffee',
                type: 'Barista',
                time: '1 year',
                description: "My experience as a barista has sharpened my communication, teamwork, and problem solving abilities, which I am excited to apply in a development setting.I am actively seeking an internship where I can continue learning, enhance my technical skills, and contribute to the success of the team."
            },
        ],

        skills: [
            {
                html: {
                    icons: <TiHtml5 size={40} />,
                    scripts: 'to build Website Structure',
                },
                css: {
                    icons: <BiSolidFileCss size={40} />,
                    scripts: 'to apply style for website structure',
                },
                tailwind: {
                    icons: <RiTailwindCssFill size={40} />,
                    scripts: 'A utility-first Framework'
                },
                js: {
                    icons: <RiJavascriptFill size={40} />,
                    scripts: 'to build website interactive and dynamic',
                },
                react: {
                    icons: <FaReact size={40} />,
                    scripts: 'A powerful library to build user interfaces-especially for web applications',
                },
                node: {
                    icons: <FaNode size={40} />,
                    scripts: "JavaScript's runtime environment"
                },
            }
        ],

        tools: [{
            git:
            {
                icons: <FaGitSquare size={40} />,
                scripts: 'Track code changing',

            },
            github: {
                icons: <FaGithub size={40} />,
                scripts: 'A version control system',
            }
        }]

    }


    return (
        <>
            <div className="grid grid-cols-1 gap-8">

                <aside className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <main className="bg-[#202022] p-8 rounded-3xl">
                        <h1 className="text-lg lg:text-5xl font-bold ">Education</h1>
                        <div className="flex flex-col  gap-8 ml-8
                    
                        ">
                            {profiles.results.map((item, index) => {
                                const { school, timespending, skills, start_date, end_date, continues } =
                                    item;
                                return (
                                    <div key={index} className="text-sm lg:text-xl flex flex-col rounded-3xl relative before:absolute before:-left-8 before:rounded-md before:bg-[yellow] before:w-1 before:h-full before:top-2 before:bg-gradient-to-tr from-[#FFD16A] to-[purple]">
                                        <p className="text-gray-400">{school}</p>
                                        <p className="text-gray-400">{skills}</p>
                                        <p className="text-[#FFD16A] ">{timespending}</p>
                                        <p className="text-[#FFD16A]">{start_date} {end_date || continues}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </main>

                    <main className="bg-[#202022] p-8 lg:p-16 rounded-3xl">
                        <h2 className="text-lg lg:text-5xl font-bold">Experience</h2>
                        <div className="flex flex-col relative ml-8 
                        before:absolute
                        before:border-transparent
                        before:w-1
                        before:h-full
                        before:rounded-md
                        before:bg-gray-700
                        before:-left-8
                        before:bg-gradient-to-tr from-[#FFD16A] to-[purple]
                           ">
                            {
                                profiles.experiences.map((exper, index) => {
                                    const { name_place, type, time, description } = exper;
                                    return (
                                        <div key={index} >
                                            <h2 className="text-lg lg:text-2xl">At {name_place} <span className="text-[#FFD16A]">as a {type}</span></h2>
                                            <section className="text-sm lg:text-xl ">
                                                <p className="text-[#FFD16A] ">{time}+</p>
                                                <p className="text-gray-400 ">{description}</p>
                                            </section>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </main>

                </aside>

                {/* Projects */}
                <div className="bg-[#202022] grid grid-cols-1 p-8 lg:p-16 rounded-3xl ">
                    <h2 className="text-lg lg:text-5xl font-bold ">Projects</h2>
                    <div className="flex flex-col lg:flex-row gap-8 mt-4">
                        <aside className="flex flex-col items-center gap-4 text-center ">
                            <h2 className="text-sm">Movie website with React & Redux</h2>
                            <img className="w-96 rounded-lg" src={movie} alt="" />
                        </aside>

                        <aside className="flex flex-col items-center gap-4 text-center">
                            <h2>Log in & Log out with JWT</h2>
                            <img className="w-96 rounded-lg" src={auth} alt="" />
                        </aside>
                        
                        <aside className="flex flex-col items-center gap-4 text-center">
                            <h2>To do list</h2>
                            <img className="w-96 rounded-lg" src={todo} alt="" />
                        </aside>
                    </div>

                </div>

                <main className="bg-[#202022] grid grid-cols-1 p-8 lg:p-16 rounded-3xl ">
                    <h2 className="text-lg lg:text-5xl font-bold ">My Skills</h2>
                    <div className="flex items-center flex-wrap">
                        {
                            profiles.skills.map((tys, index) => {
                                const { html, css, tailwind, js, react, node } = tys;
                                return (
                                    <aside className="flex gap-6 justify-start items-center flex-wrap" key={index}>
                                        <section className="flex flex-col gap-4 justify-center w-36 h-36 items-center rounded-lg py-4 px-2 cursor-pointer custom-shadow">
                                            <div className="drop-shadow-[0_0_24px_#5a189a]">{html.icons}</div>
                                            <div className="text-sm text-wrap text-center line-clamp-2 text-gray-400">{html.scripts}</div>
                                        </section>

                                        <section className="flex flex-col gap-4 justify-center items-center w-36 h-36 rounded-lg py-4 px-2 cursor-pointer custom-shadow">
                                            <div className="drop-shadow-[0_0_24px_#5a189a]">{css.icons}</div>
                                            <div className="text-sm text-wrap text-center line-clamp-2 text-gray-400">{css.scripts}</div>
                                        </section>

                                        <section className="flex flex-col gap-4 justify-center items-center w-36 h-36 rounded-lg py-4 px-2 cursor-pointer custom-shadow">
                                            <div className="drop-shadow-[0_0_24px_#5a189a]">{tailwind.icons}</div>
                                            <div className="text-sm text-wrap text-center line-clamp-2 text-gray-400">{tailwind.scripts}</div>
                                        </section>

                                        <section className="flex flex-col gap-4 justify-center items-center w-36 h-36 rounded-lg py-4 px-2 cursor-pointer custom-shadow">
                                            <div className="drop-shadow-[0_0_24px_#5a189a]">{js.icons}</div>
                                            <div className="text-sm text-wrap text-center line-clamp-2 text-gray-400" >{js.scripts}</div>
                                        </section>

                                        <section className="flex flex-col gap-4 justify-center items-center w-36 h-36 rounded-lg py-4 px-2 cursor-pointer custom-shadow">
                                            <div className="drop-shadow-[0_0_24px_#5a189a]">{react.icons}</div>
                                            <div className="text-sm text-wrap text-center line-clamp-2 text-gray-400">{react.scripts}</div>
                                        </section>

                                        <section className="flex flex-col gap-4 justify-center items-center w-36 h-36 rounded-lg py-4 px-2 cursor-pointer custom-shadow">
                                            <div className="drop-shadow-[0_0_24px_#5a189a]">{node.icons}</div>
                                            <div className="text-sm text-wrap text-center line-clamp-2 text-gray-400">{node.scripts}</div>
                                        </section>
                                    </aside>
                                )
                            })
                        }
                    </div>


                    <div>
                        <aside>
                            {
                                profiles.tools.map((item, index) => {
                                    const { git, github } = item
                                    return (
                                        <div key={index} className="flex items-center">
                                            <section className="flex flex-col gap-4 justify-center items-center w-36 h-36 rounded-lg py-4 px-2 cursor-pointer custom-shadow">
                                                <div className="drop-shadow-[0_0_24px_#5a189a]">{git.icons}</div>
                                                <div className="text-sm text-wrap text-center line-clamp-2 text-gray-400">{git.scripts}</div>
                                            </section>

                                            <section className="flex flex-col gap-4 justify-center items-center w-36 h-36 rounded-lg py-4 px-2 cursor-pointer custom-shadow">
                                                <div className="drop-shadow-[0_0_24px_#5a189a]">{github.icons}</div>
                                                <div className="text-sm text-wrap text-center line-clamp-2 text-gray-400">{github.scripts}</div>
                                            </section>
                                        </div>
                                    )
                                })
                            }
                        </aside>
                    </div>
                </main>




            </div>

        </>
    )
}