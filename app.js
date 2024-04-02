
// prueba del codigo principal 2
// importa las funcionalidades desde un archivo .js externo.

/*
Desarrollado por jhonatan samuel martinez hernandez 

ficha 2675861 

carrera análisis y desarrollo de software

archivo principal para ejecutar el programa 

*/

const { 
    setAge, 
    showResult, 
    errorMessage, 
    showMenu, 
    minor_validator,
    legal_age_validator,
    adults_validator,
    min_age,
    max_age,
    media_age,
    totalElements


    } = require('./src/functions.js');

// ------------------- array for store ages ---------------->
// vector of ages 
let grupo_edades = [];
let under_age_list = [];
let legal_age_list = [];
let adult_list = [];


// principal function of the program 
const main = async() => {
    // muestra un menu de bienvenida.
    showMenu();
    let age;  

    do{
        // pide al usuario ingresar las edades y las retorna
        // luego las almacena en la variable age,
        age = await setAge();
        // valida que la variable age este en el rango de edad establecida
        if(age >= 1 && age <= 120){
            
            grupo_edades.push(age);
            console.log("\n")
        
        }else{
            await errorMessage();
        }

    /* pide introducir la edad de una persona siempre y cuando la cantidad de elementos
    que se han introducido al array sea menor o igual a 10 
    */

    // cambiando la condicion del while podra establecer
    // la cantidad de veces que desea introducir datos al programa

    //Nota: tome en cuenta que el programa se ejecuta 
    //primero una vez y luego, valida si la condición 
    //se cumple, para seguir el ciclo
    }while(grupo_edades.length <= 9);

    // imprime el valor de las edades que hay en el array.
    totalElements(grupo_edades); 

    // valida la cantidad de personas menores de edad 
    minor_validator(grupo_edades, under_age_list);
    
    // valida la cantidad de personas mayores de 18 años
    legal_age_validator(grupo_edades, legal_age_list); 

    // valida la cantidad de adultos con edades 
    //mayores o igual a 60 años.
    adults_validator(grupo_edades, adult_list); 

    // consigue la persona con menos edad que se ha resgitrado.
    min_age(grupo_edades);

    // consigue la persona con mayor edad en el registro.
    max_age(grupo_edades);
    
    // realiza un promedio de todas las edades introducidad en el registro

    media_age(grupo_edades);

   showResult("----------------------------- Fin Programa -------------------------------");
   
   // Fin del programa
}

main()