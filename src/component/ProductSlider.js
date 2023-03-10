import React, { useState } from 'react'
import ProductCard from './ProductCard'
import img from '../asset/img/1.png'
import img2 from '../asset/img/2.png'
import axios from 'axios'
const ProductSlider = () => {
  const [productData, setproductData] = useState([{title:'JE01 001',type:'addidas',proTyp:'بنطلون',proId:1,price:100,imgs:['https://react-product-card.vercel.app/static/media/black.f49f54e4.png','https://imgur.com/VcypK5c.png'],colors:[],des:`مش سهل انك تلاقي البنطلون اللي بيجمع
  ما بين التصميم المميز و الجودة العالية و السعر المنافس
  و لكن في F16 Online حققنا المعادلة الصعبه
  
  
  
  
  أجود الخامات 
   تصميم شيك و عصري 
   
  بنطلون جينز بخامة قطن مع نسبة ليگرا بجودة مميزة وتلبيس مظبوط
  وكل ده بسعر جامد
  
  
  خصم خاص على سعر القطعه حتى نفاذ الكمية ⚡
  أطلب اونلاين و هنوصل لحد باب بيتك
  و هتقدر تعاين قبل الاستلام كمان عشان تطمن 
  🙂`,delevry:true,quant:4,sale:false,saleValu:0},{title:'JE01 001',type:'Nike',proTyp:'بنطلون',proId:1,price:100,imgs:['https://react-product-card.vercel.app/static/media/black.f49f54e4.png',img,img2,'https://imgur.com/VcypK5c.png'],colors:[],des:`مش سهل انك تلاقي البنطلون اللي بيجمع
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
  const options = {
    method: 'GET',
    url: 'https://shoes-collections.p.rapidapi.com/shoes',
    headers: {
      'X-RapidAPI-Key': '473b91a82fmsh7e4a0524ee57fc2p1e71cajsn9fc1b391ae9b',
      'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
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