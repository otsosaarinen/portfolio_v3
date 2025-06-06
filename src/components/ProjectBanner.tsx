import { Link } from "react-router";

function ProjectBanner() {
    return (
        <>
            <div className="my-5 w-110 bg-white p-5 text-center text-2xl font-bold text-indigo-500 transition duration-300 hover:cursor-pointer hover:bg-indigo-500 hover:text-white">
                <Link to="/projects">Click here to view my projects</Link>
            </div>
        </>
    );
}

export default ProjectBanner;
