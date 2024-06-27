import ReactDOM from 'react-dom/client'
import './style.css'

if(module.hot){
    module.hot.accept();}
   // const h1 = <h1>this is h one</h1>
  
   function Card(props){
    
    const{title,brand,price,image}=props
    return   <div className='card'>
    <img src={image} alt ="iphone"/>
    <div className='card-content'>
        <h3>{title}</h3>
    <p>{brand}</p>
    <p> <b>{price}</b></p></div>
    

   </div>
   }
  
   //const container=[Card(1),Card(2),Card(3)]


   
   
  
    

  

   
const root = ReactDOM.createRoot(document.getElementById('root'))
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=>{
    root.render(<div className='container'>
        {data.products.map(product => <Card key={product.id}brand={product.brand}image={product.thumbnail}price={product.price}title={product.title}/>)}</div>)

    

})
    
   
 
