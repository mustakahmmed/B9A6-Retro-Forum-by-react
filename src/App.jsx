
import { useState } from 'react'
import './App.css'
import Cards from './Component/Cards/Cards'
import Discover from './Component/Discover/Discover'
import Navbar from './Component/Navbar/Navbar'
import Recipes from './Component/Recipes/Recipes'
import SideBarItems from './Component/SideBarItems/SideBarItems'


function App() {
    const [sideBar,setSideBar]=useState([])
    const handleSideBar =(item)=>{
      const newSideBarItems = [...sideBar,item];
      setSideBar(newSideBarItems)
    }

  return (
    <>
      <Navbar></Navbar>
      <Discover></Discover>
     <Recipes></Recipes>
     <div className='flex my-16'>
     <Cards handleSideBar={handleSideBar}></Cards>
     <SideBarItems sideBar={sideBar}></SideBarItems>
     </div>
    
    </>
  )
}

export default App
