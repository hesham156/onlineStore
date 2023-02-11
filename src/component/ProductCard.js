import React, { useState } from 'react'
import '../asset/css/card.css'
const ProductCard = ({data}) => {
  console.log(data)
  const [active,setActive] = useState(0)
  const [proimg,setproimg] = useState(0)

  const chose = (e)=>{
    
               e.target.classList.add('activateSpan')
  }
  

 
        return(
       <div className='productCard'>
         <div className='gradiant'>
                  <div class="gradient behind" color="blue"></div>
                  </div>
             <div className='container'>
                <div className='productTop'>  
                  <h1>{data.type}</h1>
                    <div style={proimg===0?{transform:'translate(0,0)'}:{transform:`translate(-${proimg*256}px,0)`}} className='proImgs'>
                  {data.imgs?.map((img)=>{
                  
                 return(
                  <div className='productImg'>
                      <img width='100%' src={img}/>
                </div>
                 )

                  })}
                       </div>
                    <div className='center sBtn'>
                                      {data.imgs?.map((img)=>{
                                        return <span onClick={(e)=>{setActive(data.imgs.indexOf(img));setproimg(data.imgs.indexOf(img))}} className={active===data.imgs.indexOf(img)?'activateSpan':''}></span>

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