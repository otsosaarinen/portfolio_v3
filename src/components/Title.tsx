import Typewriter from "react-ts-typewriter";
import { useState } from "react";

function Title() {
    type SkillType = {
        [skill: string]: string[];
    };

    const skills: SkillType[] = [
        {
            Frontend: [
                "TypeScript",
                "JavaScript",
                "React",
                "Tailwind CSS",
                "HTML",
            ],
        },
        { Backend: ["Node.js", "Express.js", "Python", "Flask", "Postman"] },
        {
            "Cloud & database": [
                "Apache Kafka",
                "Microsoft Azure",
                "PostgreSQL",
                "SQLite",
                "InfluxDB",
            ],
        },
        {
            Miscellaneous: [
                "REST API",
                "OAuth 2.0",
                "Gen AI",
                "Grafana",
                "GitHub",
            ],
        },
    ];

    const [skillsVisibility, setSkillsVisibility] = useState<string>("hidden");

    const handleClick = () => {
        if (skillsVisibility == "hidden") {
            setSkillsVisibility("grid");
        } else {
            setSkillsVisibility("hidden");
        }
    };

    return (
        <>
            <div className="font-nunito-sans bg-dark-purple flex h-full min-h-screen w-full flex-col items-center justify-center gap-10 py-5 text-center text-white">
                <div>
                    <h1 className="text-honeydew text-8xl font-black">
                        Otso Saarinen
                    </h1>
                    <h2 className="text-naples-yellow text-4xl font-bold italic">
                        Bachelor of Engineering
                    </h2>
                </div>

                <div className="text-honeydew max-w-md text-xl md:max-w-2xl">
                    <Typewriter
                        text="I'm a recently graduated ICT engineer from Turku UAS,
                    interested about web development & health technology.
                    Actively looking for a full-time job in the IT industry."
                        speed={15}
                        cursor={false}
                    />
                </div>

                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="text-naples-yellow text-2xl font-bold italic">
                        Connect with me
                    </div>
                    <div className="flex flex-row gap-3">
                        <a
                            href="https://github.com/otsosaarinen"
                            target="_blank"
                        >
                            <img
                                className="h-auto w-10 transform transition-transform duration-150 ease-in-out hover:scale-115"
                                src="/github_logo.png"
                                alt="GitHub logo"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/otsosaarinen/"
                            target="_blank"
                        >
                            <img
                                className="h-auto w-10 transform transition-transform duration-150 ease-in-out hover:scale-115"
                                src="/linkedin_logo.png"
                                alt="LinkedIn logo"
                            />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-3">
                    <div
                        onClick={handleClick}
                        className={`bg-naples-yellow shadow-naples-yellow/40 w-24 rounded-md py-1 text-2xl font-bold text-white shadow-lg text-shadow-lg/40 hover:cursor-pointer`}
                    >
                        Skills
                    </div>
                    <div
                        className={`${skillsVisibility} grid-cols-1 gap-5 md:grid-cols-4 md:gap-0`}
                    >
                        {skills.map((skill, index) => {
                            const categoryName = Object.keys(skill)[0];
                            const singleSkill = skill;
                            return (
                                <div key={index} className="flex flex-col">
                                    <div className="text-naples-yellow text-2xl font-bold">
                                        {categoryName}
                                    </div>
                                    <div className="text-xl">
                                        {singleSkill[categoryName].map(
                                            (skillName, skillIndex) => {
                                                return (
                                                    <div key={skillIndex}>
                                                        {skillName}
                                                    </div>
                                                );
                                            },
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Title;
