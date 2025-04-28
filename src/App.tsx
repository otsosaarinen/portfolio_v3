import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Info from "./components/Info";

function App() {
    return (
        <>
            <div className="font-nunito-sans h-screen w-screen bg-[url('/coding.jpg')] bg-cover bg-no-repeat text-neutral-800">
                <div className="flex h-full w-full flex-col bg-neutral-900/70">
                    <Header />
                    <Info />
                    <Skills />
                </div>
            </div>
        </>
    );
}

export default App;
