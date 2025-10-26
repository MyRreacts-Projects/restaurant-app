// import React from "react";
// const Catageories = ({filterItems,catageories})=>{
//     return(
//         <div className="container">
//             <div className="row">
//                 <div className="col-8 mx-auto">
//                     {catageories.map((catageory)=>{
//                         return(
//                             <button onClick={()=>filterItems(catageory)}>{catageory}</button>
//                         )
//                     })}
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Catageories;
import '../components/catageories.css'
function Categories({ filterItems, catageories }) {
  return (
   <div className="container">
       <h1>My Restaurant Small App</h1>
    <div className='sub-cat'>
      
       {catageories.map((cat) => (
        <button onClick={() => filterItems(cat)} className='button'>{cat}</button>
      ))}
    </div>
   </div>
  );
}

export default Categories;
