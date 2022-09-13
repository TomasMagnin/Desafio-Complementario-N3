// Creamos primero la clase constructora para crear objetos de nuestros productos y añadir
// sus especificaiones de forma dinamica.

class Products{
    constructor(info){
        this.brand = info.brand;
        this.model = info.model;
        this.year = info.year;
        this.price = info.price;
        this.stock = info.stock;
        this.sold = false;
    }
    vender(){
        this.stock = this.stock - 1;
        this.sold = true;
    }

    showCars(){
        return `Brand: ${this.brand} - Modelo: ${this.model} - Año ${this.year} - $ ${this.price} - Stock ${this.stock} `
    }
} 


// Pusheamos al Array cars, los objetos a partir de la clase constructor.

let cars = [];

cars.push(new Products({brand: "AUDI", model: "A3", year: 2015, price: 25000, stock: 4,}));
cars.push(new Products({brand: "BMW", model: "M1", year: 2012, price: 55000, stock: 2,}));
cars.push(new Products({brand: "DODGE", model: "RAM", year: 2014, price: 65000, stock: 8,}));
cars.push(new Products({brand: "FIAT", model: "CRONOS", year: 2020, price: 13000, stock: 20,}));
cars.push(new Products({brand: "RENAULT", model: "OROCH", year: 2016, price: 15000, stock: 10,}));
cars.push(new Products({brand: "FORD", model: "FOCUS", year: 2015, price: 10000, stock: 15}));
cars.push(new Products({brand: "CHEVROLET", model: "S10", year: 2010, price: 35000, stock: 6}));
cars.push(new Products({brand: "TOYOTA", model: "HILLUX", year: 2019, price: 45000, stock: 20}));
cars.push(new Products({brand: "VOLKSWAGEN", model: "GOLF", year: 2022, price: 30000, stock: 12}));



// Creamos la variable que contine la Opcion.

let option = "";

// Creamos el Menu de Opcion

    option = prompt("# Ingrese 1 para Mostrar los productos.\n # Ingrese 2 para Ingresar un nuevo productos.\n # Ingrese 3 para Buscar un Producto.\n")

    if(option !== ""){
        switch(option){
            case "1":
                let contenedor = document.getElementById("producte");   // Traemos el nodo que tiene el atributo product
                cars.forEach(item => {                                  // Recorremos todo el Array compuesto por objetos
                    let div = document.createElement("div");            // Creamos un div para introducir el listado de productos
                    div.innerHTML = ` <h3> Marca: ${item.brand} </h3>   
                                    <p> Modelo: ${item.model} </p>      
                                    <b> precio $${item.price} </b>`;   // introducimos en el HTML el listado de productos
                    contenedor.append(div);                            // Insertamos todo en el div que se va creando anteriormente
                });
                break;
            
            case "2":
                let brandAdd = prompt("Ingrese la Marca");
                let modelAdd = prompt("Ingrese el Modelo");
                let yearAdd  = prompt("Ingrese Año");
                let priceAdd = prompt("Ingrese Precio")
                let stockAdd = prompt("Ingrese la cantidad de Stock")
                cars.push(new Products({brand: `${brandAdd}`, model: `${modelAdd}`, year: `${yearAdd}`, price: `${priceAdd}`, stock: `${stockAdd}`, sold: false}));
                break;
            
            case "3":
                
                let filters = document.getElementById("filter");
                let findbrand = prompt("Ingrese la Marca a Buscar");
                findbrand = findbrand.toUpperCase();          
                const result = cars.filter(car => car.brand === findbrand);

                result.forEach(item2 => {
                    let p = document.createElement("p");
                    p.innerHTML = item2.showCars();
                    filters.append(p);    
                });
                break;
        
            default:
                alert("Opcion No Valida");
                break;        
        }
    }
  


