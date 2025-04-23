function Skills() {
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
            <div className="flex flex-col gap-3 px-5">
                <div className="text-3xl font-bold text-white">My Skills</div>
                <div className="grid h-50 w-250 grid-cols-4 gap-3">
                    {skills.map((skill, index) => {
                        const categoryName = Object.keys(skill)[0];
                        const singleSkill = skill;
                        return (
                            <div
                                key={index}
                                className="flex flex-col justify-around bg-white p-2 shadow-xl shadow-white/10"
                            >
                                <div className="text-2xl font-bold">
                                    {categoryName}
                                </div>
                                <div className="text-xl font-medium">
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
        </>
    );
}

export default Skills;
