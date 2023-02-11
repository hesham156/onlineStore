import React, { useState } from 'react'
import ProductCard from './ProductCard'

const ProductSlider = () => {
  const [productData, setproductData] = useState([{title:'JE01 001',proTyp:'بنطلون',proId:1,price:100,imgs:['https://react-product-card.vercel.app/static/media/black.f49f54e4.png','https://imgur.com/VcypK5c.png'],colors:[],des:`مش سهل انك تلاقي البنطلون اللي بيجمع
  ما بين التصميم المميز و الجودة العالية و السعر المنافس
  و لكن في F16 Online حققنا المعادلة الصعبه
  
  
  
  
  أجود الخامات 
   تصميم شيك و عصري 
   
  بنطلون جينز بخامة قطن مع نسبة ليگرا بجودة مميزة وتلبيس مظبوط
  وكل ده بسعر جامد
  
  
  خصم خاص على سعر القطعه حتى نفاذ الكمية ⚡
  أطلب اونلاين و هنوصل لحد باب بيتك
  و هتقدر تعاين قبل الاستلام كمان عشان تطمن 
  🙂`,delevry:true,quant:4,sale:false,saleValu:0},{title:'JE01 001',proTyp:'بنطلون',proId:1,price:100,imgs:['https://react-product-card.vercel.app/static/media/black.f49f54e4.png','https://trello.com/1/cards/63e37ebd4b99cb942296a97b/attachments/63e37f01c198a799dd1890c0/previews/63e37f01c198a799dd18924e/download/222222222222222222222222222222222222222222222222222222222227777777777777777777777.png','https://imgur.com/VcypK5c.png'],colors:[],des:`مش سهل انك تلاقي البنطلون اللي بيجمع
  ما بين التصميم المميز و الجودة العالية و السعر المنافس
  و لكن في F16 Online حققنا المعادلة الصعبه
  
  
  
  
  أجود الخامات 
   تصميم شيك و عصري 
   
  بنطلون جينز بخامة قطن مع نسبة ليگرا بجودة مميزة وتلبيس مظبوط
  وكل ده بسعر جامد
  
  
  خصم خاص على سعر القطعه حتى نفاذ الكمية ⚡
  أطلب اونلاين و هنوصل لحد باب بيتك
  و هتقدر تعاين قبل الاستلام كمان عشان تطمن 
  🙂`,delevry:true,quant:4,sale:false,saleValu:0}]);
  return (
    <section className='section productslider'>
      <div className='container'>
{productData?.map((data)=>{
  return  <ProductCard data={data}/>
})}
     
     </div>
    </section>
  )
}

export default ProductSlider