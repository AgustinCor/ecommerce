//const cardAreas= document.querySelector(".main-footer");
const productContainer=document.querySelector(".product-container");
const addProduct=document.querySelectorAll(".a-button1");

let productArray=JSON.parse(localStorage.getItem("products")) ?? [];


createProduct();

productContainer.addEventListener("click",(e)=>{
  if (e.target.classList.contains("addUnit")){
   productArray[0].unit+=1;
   createProduct();
   console.log(productArray[0].unit);
  }; 
  if (e.target.classList.contains("minusUnit")){
    productArray[0].unit-=1; 
    createProduct();
    console.log(productArray[0].unit);
   }; 
   
});

addProduct.forEach((element)=>{
  element.addEventListener("click",(e)=>{
      productArray.push({id:1 ,nombre:"Buzo1" ,tipo:"hoodie", unit:1, precio:14});
      createProduct();
  });
})


function createProduct(){
    const elements=productArray.map((products)=>{
        return `
        <div class="products">
        <img src="featured1.png">   
        <div class="products-info">
          <h3>Shirts</h3>
          <p class="stock">Stock:10<span>|$24.00</span></p>  
          <p>Subtotal:<span>$24.00</span></p>
          <div class="plus-products">
            <a><i class="fa-solid fa-minus"></i></a> 
            <p><span class="units">${products.unit}</span>units</p>
            <a class="addUnit"><i class="addUnit fa-solid fa-plus"></i></a>
            <a class="minusUnit"><i class="minusUnit fa-solid fa-trash"></i></a>
          </div>
        </div>
      </div>`;
    });
    productContainer.innerHTML=elements.join('');
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