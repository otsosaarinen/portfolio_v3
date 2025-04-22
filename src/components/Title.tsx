import Typewriter from "react-ts-typewriter";

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

    return (
        <>
            <div className="font-nunito-sans flex h-full w-full flex-col items-center justify-center gap-10 text-center text-white">
                <div>
                    <h1 className="text-8xl font-black">Otso Saarinen</h1>
                    <h2 className="text-4xl font-bold text-blue-500 italic">
                        Bachelor of Engineering
                    </h2>
                </div>
                <div className="max-w-md text-xl md:max-w-2xl">
                    <Typewriter
                        text="I'm a recently graduated ICT engineer from Turku UAS,
                    interested about web development & health technology.
                    Actively looking for a full-time job in the IT industry."
                        speed={20}
                        cursor={false}
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <div className="text-4xl font-bold text-blue-500">
                        Skills
                    </div>
                    <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                        {skills.map((skill, index) => {
                            const categoryName = Object.keys(skill)[0];
                            const singleSkill = skill;
                            return (
                                <div key={index}>
                                    <div className="text-2xl font-bold text-blue-500">
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
