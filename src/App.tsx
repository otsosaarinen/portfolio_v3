import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <div className="font-nunito-sans flex min-h-screen w-screen flex-col items-center justify-start text-neutral-900">
                <div className="w-full bg-blue-400 p-5">
                    <Header />
                </div>
                <div className="w-full flex-grow bg-white bg-[url('/coding.jpg')] bg-cover bg-no-repeat">
                    <Content />
                </div>
                <div className="w-full bg-blue-400 p-5">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
