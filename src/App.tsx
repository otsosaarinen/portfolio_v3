import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";

function App() {
    return (
        <>
            <div className="font-nunito-sans h-screen w-screen bg-[url('/coding.jpg')] bg-cover bg-no-repeat">
                <div className="flex h-full w-full flex-col gap-5 bg-neutral-900/60 text-neutral-800">
                    <Header />
                    <Skills />
                </div>
            </div>
        </>
    );
}

export default App;
