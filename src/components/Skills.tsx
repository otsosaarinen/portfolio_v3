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
                "HTML5",
            ],
        },
        { Backend: ["Node.js", "Express.js", "Python", "Flask", "Postman"] },
        {
            "Cloud & database": [
                "Apache Kafka",
                "Microsoft Azure",
                "Active Directory",
                "PostgreSQL",
                "SQLite",
                "InfluxDB",
            ],
        },
        {
            Miscellaneous: [
                "REST API",
                "OAuth 2.0",
                "GitHub",
                "Gen AI",
                "Grafana",
            ],
        },
    ];

    return (
        <>
            <div className="flex w-220 flex-col bg-indigo-500 p-5 text-white">
                <div className="text-xl font-medium">My Skills</div>
                <div className="grid grid-cols-4">
                    {skills.map((skill, index) => {
                        const categoryName = Object.keys(skill)[0];
                        const singleSkill = skill;
                        return (
                            <div key={index} className="flex flex-col">
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
