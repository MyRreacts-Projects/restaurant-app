import React from "react";


const Menu =({items})=>{
    return(
        <main>
            <div className="container">
            <div className="row">

{items.map((item)=>{
// const {id,img,price,desc,title} = item
return(
    <div className="col-6" key={item.id}>
        <div>
            <img src={item.img} alt="imges" />
            <h4>{item.title}</h4>
            <h6>{item.price}</h6>
            <p>{item.desc}</p>
        </div>
       
    </div>
    
)
})}


            </div>
        </div>
        </main>
    )
}
export default Menu;