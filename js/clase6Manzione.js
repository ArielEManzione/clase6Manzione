let productoIngresado = 0;
let continuar ="SI";
let productos = [];

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    set_precio(precio){
        this.precio = precio;
    }

    get_producto(){
        console.log("Nombre: "+ this.nombre + " Precio: " + this.precio);
    }
}


console.log("Bienvenido a la caja de autoservicio del supermercado");
console.log("Ingrese el producto y su importe para contabilizar, escriba la palabra DESHACER para eliminar el último producto ingresado, TOTAL para calcular el total o ingrese SALIR para cancelar el proceso");

while (productoIngresado != "SALIR" && continuar == "SI" ){
    productos = [];
    productoIngresado = 0;
    
    while (productoIngresado != "SALIR" && productoIngresado != "TOTAL" ){

        if (productos.length == 0){
            productoIngresado = prompt("Ingrese el nombre del producto o SALIR para cancelar.");
            if(productoIngresado == "SALIR" ){
                break;
            } 
        } else {
            productoIngresado = prompt("Ingrese el nombre, la palabra DESHACER para eliminar el último ingresado, TOTAL para totalizar o SALIR para cancelar.");
            if(productoIngresado == "SALIR" || productoIngresado == "TOTAL" ){
                break;
            } else if ( productoIngresado == "DESHACER" ){
                productos.pop();
            }

        }        
        
        let productoNuevo = new Producto(productoIngresado, 0);

        if (productoIngresado != "DESHACER"){
            if (productos.length == 0){


                while (productoIngresado <= 0 || isNaN(parseInt(productoIngresado))){
                    productoIngresado = prompt("Ingrese un importe o SALIR para cancelar.");
                    if(productoIngresado == "SALIR"){
                        break;
                    }else if (productoIngresado <= 0 || isNaN(parseInt(productoIngresado))){
                        alert("Se debe informar un importe mayor a 0");
                    }
                }

                if(productoIngresado == "SALIR" ){
                    break;
                }

                productoNuevo.set_precio(productoIngresado);
                productos.push(productoNuevo);
        
                productoIngresado = 0;

            } else {

                while (productoIngresado <= 0 || isNaN(parseInt(productoIngresado))){
                    productoIngresado = prompt("Ingrese un importe o SALIR para cancelar.");
                    if(productoIngresado == "SALIR" ){
                        break;
                    }else if (productoIngresado <= 0 || isNaN(parseInt(productoIngresado))){
                        alert("Se debe informar un importe mayor a 0");
                    }
                }
                
                if(productoIngresado == "SALIR"){
                    break;
                }
            
                productoNuevo.set_precio(productoIngresado);
                productos.push(productoNuevo);
                productoIngresado = 0;
            }   

        }
    }
    
    if (productoIngresado == "TOTAL") {
        if (productos.length == 0){
            console.log("No se han registrado productos para poder calcular el total de los mismos.");
        }else {
            let importeTotal = 0;
            for ( let i = 0; i < productos.length ; i++ ){

                importeTotal =  importeTotal + parseInt(productos[i].precio);

            }

            console.log("Ha ingresado "+ productos.length + " producto/s con un total de "+ importeTotal+ " Pesos.");
            console.log("La lista de productos ingresados es: ");
            for ( let i = 0; i < productos.length ; i++ ){   
                console.log("Producto "+ (i+1) +": ");             
                productos[i].get_producto();
            }
            
        }

        continuar = prompt("Si quiere hacer otro ingreso de productos escriba SI caso contrario escriba NO");
        while (continuar != "SI" && continuar != "NO" ){
            continuar = prompt("Solo puede ingresar SI o NO, ¿Quiere hacer un nuevo ingreso de productos?");
        }
    }  

}

if (productoIngresado ==  "SALIR"){
    console.log("Ha ingresado SALIR, por lo tanto se da por finalizado el proceso.");
} else {
    console.log("Gracias por utilizar la caja de autoservicio del supermercado. Que tenga un buen día.");
}
