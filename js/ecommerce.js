class productos{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = stock;
          
    }


 }


 const producto1 = new productos ("remera", 1200, 13);
 const producto2 = new productos ("pantalon", 1500, 12);
 const producto3 = new productos ("zapatillas", 1400, 15);
 const producto4 = new productos ("medias", 600, 16);
 const producto5 = new productos ("buzos", 120, 15);
 const producto6 = new productos ("guantes", 500, 15);
 const producto7 = new productos ("gorros",350, 14);
 const producto8 = new productos ("jeans",2000,18);
 const producto9 = new productos ("remerones", 700, 5);

let inventario = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8,]


const word = prompt("que pruducto buscas")

for(let i = 0; i < inventario.length; i++){
    if( inventario[i].nombre.toLowerCase() === word.toLowerCase() ){
        console.log(`El precio de ${inventario[i]. nombre} es de ${inventario[i].precio} y hay ${inventario[i].stock} piezas`);
        break;
    
    }
}

console.table(inventario)