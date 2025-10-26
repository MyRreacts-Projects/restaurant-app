// import { useState } from 'react'



// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Catageories from './components/catageories';
// import Menu from './components/menu';
// import items from './components/data';
// const allCatageories = ['all',...new Set(items.map((item)=>item.category))]

// function App() {
//   const [menuItem,setMenuItem] = useState(items); 
//   const [catageories,setCatageories] = useState(allCatageories)
//   const filterItems =(catageory)=>{
//     if(catageory == 'all'){return(setMenuItem(items))}
//     const newItem = items.filter((item)=>item.category === catageory)
//     return setMenuItem(newItem)
//   }
 

//   return (
   
//   <div className='container'>
//     <Catageories filterItems= {filterItems} catageories= {catageories}/>
// <Menu items ={menuItem}/>

//   </div>
//   )
// }

// export default App



import { useState } from "react";
import Catageories from "./components/catageories";
import Menu from "./components/menu";
import items from "./components/data";

function App() {
  const catageories = ["all", "breakfast", "lunch", "shakes"]; // manual list

  const [menuItem, setMenuItem] = useState(items);

  function filterItems(catageory) {
    if (catageory === "all") {
      setMenuItem(items);
    } else {
      const newItems = items.filter((item) => item.category === catageory);
      setMenuItem(newItems);
    }
  }

  return (
    <div>
      <Catageories catageories={catageories} filterItems={filterItems} />
      <Menu items={menuItem} />
    </div>
  );
}

export default App;
