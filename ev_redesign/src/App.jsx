import Navigation from "./Navigation"
import Home from "./Home"
import About from "./About"
import Vehicles from "./Vehicles"
import Contact from "./Contact"

function App() {

  return (
       <div className = 'min-w-full min-h-full pl-[64px] m-0 relative' >
         <Navigation/>
        <Home/>
        <About/>
        <Vehicles/>
        <Contact/>
       </div>
  )
}

export default App
