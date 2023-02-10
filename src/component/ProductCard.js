import React from 'react'
import '../asset/css/card.css'
const ProductCard = ({data}) => {
  console.log(data)

 
        return(
       <div className='productCard'>
             <div className='container'>
                <div className='productTop'>
                  <div className='proImgs'>
                  {data.imgs?.map((img)=>{
                 return(
                  <div className='productImg'>
                      <img width='100%' src={img}/>
                </div>
                 )

                  })}
                     </div>
                     <div className='proTitle'>
                         <h2>{data.title}</h2>
                     </div>
                     <div className='proPrice'>
                      <p>{data.price} </p>
                     </div>
                </div>
                <div className='productBottom'>
                  <button className='addToCard'>Add To Card</button>
                </div>
             </div>
        
         </div>
        );
}

export default ProductCard