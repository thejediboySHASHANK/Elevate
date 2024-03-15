import Navbar from "./components/Navbar.jsx";
import "./App.css"
import Navbar2 from "./components/Navbar2.jsx";
import banner from "./assets/banner-bg.png"

function App() {
    return (
        <div style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '90vh', width: '100%' }}>
            <div className="px-32">
                <Navbar />
                <p className="text-4xl text-white font-extrabold text-center">Eflyer</p>
                <Navbar2 />
            </div>
        </div>
  )
}

export default App
