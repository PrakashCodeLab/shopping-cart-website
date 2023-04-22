const shop =document.querySelector('#shop');

let shopItemData=[{
        id:"sfghhejkd",
        name:"casual shirt",
        price:45,
        desc:"elit natoque corrumpit invenire reprimique ignota donecconsectetuer nulla ",
        img:"img/img-1.jpg"},
        {
            id:"skdgwjkszxj",
        name:"party shirt",
        price:70,
        desc:"elit natoque corrumpit invenire reprimique ignota donecconsectetuer nulla ",
        img:"img/img-2.jpg"
        },
        {
            id:"nchjvsgkk",
        name:"mens  shirt",
        price:25,
        desc:"elit natoque corrumpit invenire reprimique ignota donecconsectetuer nulla ",
        img:"img/img-3.jpg"
        },
        
        {
            id:"makfbekld",
        name:"daily wearing",
        price:30,
        desc:"elit natoque corrumpit invenire reprimique ignota donecconsectetuer nulla ",
        img:"img/img-4.jpg"
        },
        {
            id:"znsnkgigzb",
        name:"mens shirt",
        price:30,
        desc:"elit natoque corrumpit invenire reprimique ignota donecconsectetuer nulla ",
        img:"img/img-5.png"
        },
        {
            id:"sjdbognnsodt",
        name:"mens foot wear",
        price:300,
        desc:"elit natoque corrumpit invenire reprimique ignota donecconsectetuer nulla ",
        img:"img/img-6.png"
        }
        
        ];
        
let basket=JSON.parse(localStorage.getItem("data"))||[]








let generateShop=()=>{


return(shop.innerHTML=shopItemData.map((x)=>{

let { id , name, price , desc, img}=x;

let search=basket.find((x)=>x.id==id)||[]

        return `<div id=product-id-${id} class="item">
     <img src=${img} alt="cloth"/> 
             
             <div class="details">
                 <h3>${name}</h3>
                 <p>elit natoque corrumpit invenire reprimique ignota donecconsectetuer nulla </p>
             </div>
               
             <div class="price__counter">
                <h4>$${price}</h4> 
            <div class="counter__btn__group">
         <button onclick="Decrement(${id})" class="decrement"><i class="bi bi-dash"></i></button> 
      <span id=${id} class="count">
 ${search.item===undefined? 0: search.item}
 </span>
       <button onclick="increment(${id})" class="increment"><i class="bi bi-plus"></i></button>   
                </div>
             </div>  
           </div>`
    })
    .join(""));
};





generateShop();



let increment=(id)=>{
 
    let selectedItem=id;
  
 let searchItem= basket.find((x)=>x.id=== selectedItem.id);
 
 if(searchItem===undefined){
     basket.push({
      id:selectedItem.id,
      item:1,
  });
 }  
 else {
     searchItem.item+=1 
 };
 
  countUpdate(selectedItem.id);
  
  localStorage.setItem("data", JSON.stringify(basket));
  
};



let Decrement=(id)=>{
   let selectedItem=id;
  
 let searchItem= basket.find((x)=>x.id=== selectedItem.id);
 
 if(searchItem === undefined) return;
 
 else if(searchItem.item === 0) return ;  
 else {
     searchItem.item -=1 
 };
  
  
  countUpdate(selectedItem.id);
  
  basket=basket.filter((x)=>x.item !==0)
  
   localStorage.setItem("data", JSON.stringify(basket));  
    
};




let countUpdate=(id)=>{
    let searchItem= basket.find((x)=>x.id=== id);
  
  document.getElementById(id).innerHTML=searchItem.item;
  
  calculation()
    
}



let calculation =()=>{

let cartItem=document.getElementById("cartAmount");
 
    cartItem.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y ,0)
 
   
    
};


calculation()
