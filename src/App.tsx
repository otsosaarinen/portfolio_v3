import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Info from "./components/Info";

function App() {
    return (
        <>
            <div className="font-nunito-sans h-screen w-screen bg-[url('/coding.jpg')] bg-cover bg-no-repeat">
                <div className="flex h-full w-full flex-col bg-neutral-900/70 text-neutral-800">
                    <Header />
                    <Info />
                </div>
            </div>
        </>
    );
}

export default App;
