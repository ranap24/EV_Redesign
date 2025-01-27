import Navigation from "./Navigation"
import Home from "./Home"
import About from "./About"

function App() {

  return (
       <div className = 'min-w-full min-h-full p-8 relative' >
         <Navigation/>
        <Home/>
        <About/>
       </div>
  )
}

export default App
