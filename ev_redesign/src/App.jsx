import Navigation from "./Navigation"
import Home from "./Home"
import About from "./About"
import Vehicles from "./Vehicles"
import Contact from "./Contact"

function App() {

  return (
       <div className = 'w-screen min-h-screen sm:w-full border borer-red-500 flex flex-col items-center justify-center relative' >
         <Navigation/>
        <Home/>
        <About/>
        <Vehicles/>
        <Contact/>
       </div>
  )
}

export default App
