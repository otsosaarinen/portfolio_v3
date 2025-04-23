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
            <div className="grid grid-cols-4 text-white">
                {skills.map((skill, index) => {
                    const categoryName = Object.keys(skill)[0];
                    const singleSkill = skill;
                    return (
                        <div key={index} className="flex flex-col">
                            <div className="text-2xl font-bold">
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
        </>
    );
}

export default Skills;
