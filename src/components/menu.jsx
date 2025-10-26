import React from "react";
import '../components/menu.css'

const Menu =({items})=>{
    return(
        <main>
            <div className="container">
              
                
            <div className="row">
               

{items.map((item)=>{
// const {id,img,price,desc,title} = item
return(
    <div className="sub" key={item.id}>
        <div className=" card sub-a">
            <img src={item.img} alt="imges" />
            <div className="detail"><h4>{item.title}</h4>
            <h6>{item.price}</h6>
            <p>{item.desc}</p></div>
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