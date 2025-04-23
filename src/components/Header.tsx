function Header() {
    return (
        <>
            <div className="flex flex-row items-center justify-center gap-3 p-2 text-3xl font-bold text-white">
                <div>Welcome to my portfolio</div>
                <div className="flex flex-row gap-3">
                    <a href="https://github.com/otsosaarinen" target="_blank">
                        <img
                            src="github_logo.png"
                            alt="Logo of GitHub"
                            className="h-8 w-8"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/otsosaarinen/"
                        target="_blank"
                    >
                        <img
                            src="linkedin_logo.png"
                            alt="Logo of LinkedIn"
                            className="h-8 w-8"
                        />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Header;
