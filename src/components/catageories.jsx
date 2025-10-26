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

function Categories({ filterItems, catageories }) {
  return (
    <>
      {catageories.map((cat) => (
        <button onClick={() => filterItems(cat)}>{cat}</button>
      ))}
    </>
  );
}

export default Categories;
