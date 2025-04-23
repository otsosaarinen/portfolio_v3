function Content() {
    return (
        <>
            <div className="flex flex-col gap-5 px-10 py-20 text-white">
                <div>
                    <h1 className="text-8xl font-black">Otso Saarinen</h1>
                    <h2 className="text-3xl font-bold italic">
                        Bachelor of Engineering, Information and Communications
                        Technology
                    </h2>
                </div>

                <div className="flex flex-row gap-3 text-xl font-bold">
                    <div className="flex h-8 w-25 items-center justify-center bg-blue-400 text-white hover:cursor-pointer">
                        Projects
                    </div>
                    <div className="flex h-8 w-25 items-center justify-center bg-white text-blue-400 hover:cursor-pointer">
                        Skills
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;
