console.log('Bienvenido a 30 días de JavaScript');


// Introduccion a tipos de datos

    // Númericos
        // Enteros: Números enteros positivos y negativos incluido el 0. Por ejemplo; 1, 2 , 3, -1, -2, -3, 0.
        // Flotantes o Decimales: Numero con decimales. Por ejemplo; 1.2, 2.3, -1.2, -2.3, 0.0.

    // Cadenas de texto: Cadenas de texto son cadenas de caracteres que se pueden manipular y trabajar. Por ejemplo; 'Hola mundo', 'Hola', 'mundo'.

    // Booleanos: Son valores lógicos que pueden ser true o false. Por ejemplo; true, false.

    // Undefined: Es un tipo de dato que representa un valor no definido.  Por ejemplo;
    //            let nombre; 
    //            console.log(nombre); // La salida es undefined, porque no se ha definido ningún valor para la variable nombre.

    // Null: Es un tipo de dato que representa un valor nulo o vacio. Por ejemplo; let nombre = null;


    // Comprobando tipos de datos:

    // console.log(typeof 'Hola mundo'); // Devuelve "String".
    // console.log(typeof 5); // Devuelve "number".
    // console.log(typeof true); // Devuelve "boolean".
    // console.log(typeof undefined); // Devuelve "undefined".
    // console.log(typeof null); // Devuelve "object".


    // Variables y constantes:
        // Las variables y constantes son como cajas, espacios en memoria en los que podemos almacenar cualquier tipo de dato.
        // las variables (let) se pueden reasignar un valor nuevo, y las constantes (const) no a lo largo del flujo del programa.
        // Las variables se pueden declarar de dos formas:
        // 1. Declarar una variable con let: let nombreVariable = valor;
        // 2. Declarar una variable con const: const nombreVariable = valor;

        // Las variables tiene la siguientes características:
        // 1. Se puede declarar una variable sin asignarle un valor.
        // 2. Se puede declarar una variable con un valor.
        // 3. Se puede declarar una variable con un valor y luego asignarle un valor nuevo.
        // 4. El nombre de la variable no puede contener espacios.
        // 5. El nombre de la variable no puede contener caracteres especiales.
        // 6. El nombre de la variable no puede empezar por un número.
        // 7. El nombre sigue la convencion "camelCase" (camelCase = Primera letra en mayúscula, resto en minúscula), por ejemplo: let nombreVariable = valor;.


    // Declarando diferentes variables de diferentes tipos de datos
    let nombre = 'Asabeneh' // nombre de una persona
    let apellido = 'Yetayeh' // apellido de una persona
    let pais = 'Finland' // país
    let ciudad = 'Helsinki' // ciudad capital
    let edad = 100 // edad en años
    let estaCasado = true

    console.log(nombre, apellido, pais, ciudad, edad, estaCasado)


    // Declarando variables con valores numéricos
    const gravedad = 9.81 // gravedad terrestre en m/s2
    const puntoDeEbullición  = 100 // punto de ebullición del agua, temperatura en oC
    const PI = 3.14 // constante geométrica

    console.log(gravedad, puntoDeEbullición, PI)


    // Las variables también pueden ser declaradas en una línea separada por una coma
    let trabajo = 'profesor',
    viveEn = 'Finlandia';
    console.log(nombre, trabajo, viveEn);



    
