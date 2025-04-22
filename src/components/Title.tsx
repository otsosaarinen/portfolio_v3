import Typewriter from "react-ts-typewriter";

function Title() {
    return (
        <>
            <div className="font-nunito-sans flex flex-col items-center justify-center gap-5 text-center text-white">
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
            </div>
        </>
    );
}

export default Title;
