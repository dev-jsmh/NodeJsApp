
/*

Desarrollado por jhonatan samuel martinez hernandez 

ficha 2675861 

carrera análisis y desarrollo de software

lista de 11 funcionalidades usadas en el program principal

*/


//--------------------------------------------------------------------------------
// toma la edad de la persona  y convierte la variable en un numero

const setAge = () => {

    return new Promise ( resolve => { 

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        console.log("\n============================================================");
        readline.question("ingrese la edad de la persona: ", (data) => {
            // convierte la variable string a numero para ser 
            //registrada en el array
            let edad = Number(data); 
            readline.close();

            // retorna el numero ingresado por el usuario
            resolve(edad);
        })

    })

   
}

//--------------------------------------------------------------------------------
// muestra mensaje de error en caso que la edad 
//ingresada no sea valida y pide un enter para 
//volver a ingresar el dado solicitado.

const errorMessage = () => {

    return new Promise(resolve => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        console.log("\n============================================================");
    
        console.log("La edad debe ser de 1 a 120 años.");
        console.log("porfavor ingrese el valor nuevamente");
        
        readline.question("\npresione ENTER para continuar.\n", (opt) => {
            readline.close();
            resolve();
        })

    })

}

//--------------------------------------------------------------------------------

// imprime en consola el argumento asignado.
const showResult = (value) => {
    console.log(value);
}

// muestra un menu de prueba hasta el momento.
const showMenu = () => {
    console.log("============================================================");
    console.log("Program created by Jhonatan Samuel Martinez Hernandez");
    console.log("ficha 2675861 carrera: análisis y desarrollo de software. ");
    console.log("============================================================");
} 

//--------------------------------------------------------------------------------
//valida la cantidad de personas menores de edad
//ingresandole como argumentos la lista de las edades ingresadas al programa
//y la lista en la cual se desea agrupar las edades de los menores

function minor_validator(main_list, store_list){

    let i; 
    for(i = 0; i < main_list.length; i ++){
    
        if(main_list[i] < 18 ){
            
            store_list.push(main_list[i]);
        }
    }

    if (store_list.length != 0 ){

        /*
        guarda el numero de elementos que contiene el array en la variable "nM"
        para representar la cantidad de menores de edad que hay en registradas.
        */
        let nM = store_list.length;
        console.log("los menores de edad son: " + nM);
        console.log(store_list);
        } else if(store_list.length === 0 ){// valida si hay registros en la lista he imprime un mensaje
            console.log("No hay menores de edad registrados en la lista.")
        }   
}

//--------------------------------------------------------------------------------
//valida el array y busca los registros de 
//personas mayores de 18 años.
function legal_age_validator(main_list, store_list){
    
    let i; 
    for(i = 0; i < main_list.length; i ++){
    
        if(main_list[i] >= 18 ){
            store_list.push(main_list[i]);
        }
    }

    if (store_list.length != 0 ){

        /*
        guarda el numero de elementos que contiene el array en la variable "nM"
        para representar la cantidad de mayores a 18 años que hay en registrados en el programa.
        */
        let nM = store_list.length;
        console.log("los mayores de edad son: " + nM);
        console.log(store_list);
        } else if(store_list.length === 0 ){// valida si hay registros en la lista he imprime un mensaje
            console.log("No hay personas mayores a 18 años registradas en la lista.")
        }   

}

//--------------------------------------------------------------------------------
// valida el numero de adultos mayores que hay registrados 
//con edades iguales o superiores a 60 años.

function adults_validator(main_list, store_list){

    let i; 
    for(i = 0; i < main_list.length; i ++){
    
        if(main_list[i] >= 60 ){
            store_list.push(main_list[i]);
        }
    }

    if (store_list.length != 0 ){

    /*
    guarda el numero de elementos que contiene el array en la variable "nM"
    para representar la cantidad de adultos mayores que hay en registrados en el programa.
    */
    let nM = store_list.length;
    console.log("los adultos con edades mayores o iguales de 60 años de edad son: " + nM);
    console.log(store_list);
    } else if(store_list.length === 0 ){// valida si hay registros en la lista he imprime un mensaje
        console.log("No hay personas con 60 años o más registradas en la lista.")
    }   
}

//--------------------------------------------------------------------------------

   // consigue la persona con menos edad que se ha resgitrado.

function min_age(array){
    let min_value = Math.min.apply(Math, array);
    console.log(`la persona con menor edad es: ${min_value} años`);
}
//--------------------------------------------------------------------------------

// consigue la persona con menos edad que se ha resgitrado.

function max_age(array){
    let max_value = Math.max.apply(Math, array);
    console.log(`la persona con mayor edad es: ${max_value} años`);
}
//--------------------------------------------------------------------------------

// calcula la edad promedio de los registros almacenados
function media_age(array){

    let sum = 0; 
    let count = array.length
    
    for(i = 0; i < count; i++){
        
        sum += array[i];
    }
    
    let average = sum / count; 

    console.log(`promedio de edad: ${average}.\n`);   
}

//--------------------------------------------------------------------------------
// imprime el total de elementos registrados
//
function totalElements(data){

    showResult("========================= datos almacenados ============================\n");
    // imprime el valor de las edades que hay en el array.
    showResult(`Numero de personas registradas: ${data.length}`);
    showResult("Lista de edades");
    showResult(data);
    

}


//--------------------------------------------------------------------------------


// exporta las funciones para ser usadas en el archivo principal.
module.exports = {
    setAge,
    errorMessage,
    showResult,
    showMenu,
    minor_validator,
    legal_age_validator,
    adults_validator,
    min_age,
    max_age,
    media_age,
    totalElements
    
}