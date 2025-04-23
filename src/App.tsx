import "./App.css";
import Header from "./components/Header";
import Content from "./components/Title";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <div className="font-nunito-sans flex min-h-screen w-screen flex-col items-center justify-start">
                <div className="w-full bg-blue-400">
                    <Header />
                </div>
                <div className="w-full flex-grow bg-white">
                    <Content />
                </div>
                <div className="w-full bg-blue-400">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
