var products =[
    {id:'/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0001_fashion_image.jpg',name:"V Neck Shirt",rate:"$24.99",rating:"4.9",color:"Light Green"},
    {id:'/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0002_fashion_image.jpg',name:"V Neck Shirt",rate:"$24.99",rating:"4.8",color:"Purple"},
    {id:'/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0003_fashion_image.jpg',name:"V Neck Shirt",rate:"$24.99",rating:"4.6",color:"Brown"},
    {id:'/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0004_fashion_image.jpg',name:"V Neck Shirt",rate:"$24.99",rating:"4.8",color:"Lime"},
    {id:'/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0005_fashion_image.jpg',name:"V Neck Shirt",rate:"$24.99",rating:"4.5",color:"Pink"},
    {id:'/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0006_fashion_image.jpg',name:"V Neck Shirt",rate:"$24.99",rating:"4.2",color:"Green"},
    {id:'/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0007_fashion_image.jpg',name:"V Neck Shirt",rate:"$24.99",rating:"4.6",color:"Pink"},
    {id:'/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0008_fashion_image.jpg',name:"V Neck Shirt",rate:"$24.99",rating:"4.8",color:"BrownGreen"},
    {id:'/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0009_fashion_image.jpg',name:"V Neck Shirt",rate:"$24.99",rating:"4.2",color:"White"},
    {id:'/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0010_fashion_image.jpg',name:"V Neck Polo Shirt",rate:"$24.99",rating:"4.1",color:"Green"},
    {id:'/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0011_fashion_image.jpg',name:"V Neck Polo Shirt",rate:"$24.99",rating:"4.3",color:"Orange"},
    {id:'/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0012_fashion_image.jpg',name:"V Neck Polo Shirt",rate:"$24.99",rating:"4.7",color:"Red"},
    {id:'/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0013_fashion_image.jpg',name:"V Neck Polo Shirt",rate:"$24.99",rating:"4.9",color:"Yellow"},
    {id:'/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0014_fashion_image.jpg',name:"V Neck Polo Shirt",rate:"$24.99",rating:"4.2",color:"Gray"},
    {id:'/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0015_fashion_image.jpg',name:"V Neck Polo Shirt",rate:"$24.99",rating:"4.5",color:"Striped-Yellow"},
  ];


export var getProducts = ()=>{
    return products;
}

export var getProductByid = (id) =>{
    var list = products.filter((item)=>(item.id==id));
    if(list.length > 0){
        return list[0];
    }else{
        return {}
   }
}

export var getProductByName = (name) =>{
    var list = products.filter((item)=>(item.name==name));
    if(list.length > 0){
        return list[0];
    }else{
        return {}
   }
}

export var getProductByRate = (rate) =>{
    var list = products.filter((item)=>(item.rate==rate));
    if(list.length > 0){
        return list[0];
    }else{
        return {}
   }
}

export var sortProductByRate = () =>{
    var list 
}

export var getProductByName = (name) =>{
    var list = products.filter((item)=>(item.name==name));
    if(list.length > 0){
        return list[0];
    }else{
        return {}
   }
}

export var getProductByRating = (rating) =>{
    var list = products.filter((rating)=>(item.rating==rating));
    if(list.length > 0){
        return list[0];
    }else{
        return {}
   }
}