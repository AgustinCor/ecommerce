//const cardAreas= document.querySelector(".main-footer");
const productContainer=document.querySelector(".product-container");
const addProduct1=document.querySelector(".a-button1");
const addProduct2=document.querySelector(".a-button2");
const addProduct3=document.querySelector(".a-button3");
const checKout=document.querySelector(".checKout");

let productArray=JSON.parse(localStorage.getItem("products")) ?? [];


createProduct();

productContainer.addEventListener("click",(e)=>{
  if (e.target.classList.contains("addUnit")){
   productArray[0].unit+=1;
   createProduct();
   console.log(productArray[0].unit);
   localStorage.setItem("tasks",JSON.stringify(tasksArray));
  }; 
  if (e.target.classList.contains("minusUnit")){
    productArray[0].unit-=1; 
    createProduct();
    console.log(productArray[0].unit);
   }; 
});

checKout.addEventListener("click", (e)=>{
  console.log(e.target);
  chargePorduct();
})

addProduct1.addEventListener("click",(e)=>{
      productArray.push({id:1 ,nombre:"Buzo1" ,tipo:"hoodie", unit:1, precio:14,img:"featured1.png"});
      createProduct();
});
addProduct2.addEventListener("click",(e)=>{
    productArray.push({id:1 ,nombre:"Buzo2" ,tipo:"hoodie",  unit:1, precio:14,img:"home.png"});
    createProduct();
});
addProduct3.addEventListener("click",(e)=>{
  productArray.push({id:1 ,nombre:"Buzo3" ,tipo:"hoodie", unit:1, precio:14,img:"featured3.png"});
  createProduct();
});


function createProduct(){
    const elements=productArray.map((products)=>{
        return `
     <img class="aside-hidden hide" src="empty-cart.png">
      <div class="products">
      <img src=${products.img}>   
        <div class="products-info">
          <h3>Shirts</h3>
          <p class="stock">Stock:10<span>|$24.00</span></p>  
          <p>Subtotal:<span></span></p>
          <div class="plus-products">
            <a><i class="fa-solid fa-minus"></i></a> 
            <p><span class="units">${products.unit}</span>units</p>
            <a class="addUnit"><i class="addUnit fa-solid fa-plus"></i></a>
            <a class="minusUnit"><i class="minusUnit fa-solid fa-trash"></i></a>
          </div>
        </div>
      </div>`;
    });
    productContainer.innerHTML=elements;
}

function chargePorduct(){
  productContainer.innerHTML="";
}

//const products=document.querySelector('aside');
//const cartIcon=document.querySelector("#cart-icon");
//const cartClossed=document.querySelector("#close-cart");

//cartIcon.onclick=()=>{
 //  products.classList.add("active");
//};

//cartClossed.onclick=()=>{
 //  products.classList.remove("active");
//}