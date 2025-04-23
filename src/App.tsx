import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
    return (
        <>
            <div className="font-nunito-sans flex h-screen w-screen flex-col items-center justify-start bg-neutral-900">
                <div className="w-full bg-blue-400">
                    <Header />
                </div>
                <div className="w-full flex-grow bg-[url('/coding.jpg')] bg-cover bg-no-repeat">
                    <div className="h-full w-full bg-neutral-900/65">
                        <Content />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
