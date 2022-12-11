const box=document.querySelector('#container')
api='https://fakestoreapi.com/products'
var getdata=async()=>{
    let response=await fetch(api)
    let result= await response.json()
    // console.log(result);
    displayData(result)
}
getdata()
let displayData=(result)=>{
    box.innerHTML=''
    result.map((item,index)=>{
        box.innerHTML+=`<div id='box2'>
        <h1>${item.title}</h1>
        <img src=${item.image} />
        <p>${item.description}</p>
        <p>Category: <b>${item.category}</b></p>
        <button>$${item.price}</button>

        </div>`
    })
}
box.style.display='grid'
box.style.gridTemplateColumns='repeat(4,1fr)'


var Ascending=async()=>{
    let response=await fetch(api)
    let result= await response.json()
        // console.log(result)
    result.sort((a,b)=>{
        return a.price-b.price;
    })
    displayData(result)
    
}

var Descending=async()=>{
    
        let response1=await fetch(api)
        let result1= await response1.json()
        // console.log(result1)
        result1.sort((a,b)=>{
        return b.price-a.price;
        })
        displayData(result1)
}