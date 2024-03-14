import { useState } from "react"
import Goldens from "./Components/Goldens/Goldens"
import SideBar from "./Components/SideBar/SideBar"
import Navbar from "./Components/Navbar/Navbar"
import Swal from "sweetalert2"

function App() {
  const [goldens, setGoldens] = useState([])
  const handleLoadGold = golds => {
    const exitings =goldens.find((p) => p.id === golds.id) 
    if(!exitings){
      const newGoldens = [...goldens, golds]
      setGoldens(newGoldens)
    } else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Already have ${golds.title}`,
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  }
  return (
    <>
    <Navbar></Navbar>
      <div className="md:flex container mx-auto mt-12">
      <Goldens handleLoadGold={handleLoadGold}></Goldens>
      <SideBar goldens={goldens}></SideBar>
      </div>
    </>
  )
}

export default App