
let fichaPaciente = []

// remplazo onclick del html por evento
let miBoton = document.getElementById("miBoton");
miBoton.addEventListener("click", cargarDatos);

// funcion que se ejecuta cada vez que se hace click en el boton
function cargarDatos(){
    class datos { 
        constructor(nombre,edad,os,telefono,mail) {
            this.nombre = nombre;
            this.edad = edad;
            this.os = os;
            this.telefono = telefono;
            this.mail = mail;
        }
    }

    // tomo valor de entrada y lo guardo en variable
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let os = document.getElementById("obraSocial").value;
    let telefono = document.getElementById("telefono").value;
    let mail = document.getElementById("mail").value;

    if (nombre != "" && edad != "" && os != "" && telefono != "" && mail!= "" ){
        // si input es disinto a vacio se ejecuta:
        
        const paciente1 = new datos(nombre,edad,os,telefono,mail);
        fichaPaciente.push (paciente1); // lo pusheo al array


        localStorage.setItem("datosPacientes",JSON.stringify(fichaPaciente)); // lo convierto a string
        
        console.table(fichaPaciente);

        // creo tabla para que se muestre datos ingresados con Jquery y le doy clase

        let tabla = `<table><tr><th>Nombre y Apellido</th><td>${paciente1.nombre}</td></tr>
        <tr><th>Edad</th><td>${paciente1.edad}</td></tr>
        <tr><th>Obra Social</th><td>${paciente1.os}</td></tr>
        <tr><th>Telefono</th><td>${paciente1.telefono}</td></tr>
        <th>Mail</th><td>${paciente1.mail}</td></tr></table>`
        
        $(".pacientes").append(tabla);

        $("table").addClass("fichaEstilo");
        
        mostrarEnvioCorrecto();

    }else {
        mostrarError();
    };

    // se limpian los inputs una vez cargados los datos
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("obraSocial").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("mail").value = "";

}

 
function mostrarEnvioCorrecto(){

    // con Jquery creo h3 y le doy clase
    let envioCorrecto = `<h3> Datos cargados exitosamente</h3>`
    $(".pacientes__ficha").append(envioCorrecto);

    $(".pacientes__ficha > h3").addClass("correcto");
    
    //despues de 3 segundos se borra el h3
    setTimeout(()=>{
        $(".pacientes__ficha > h3").append(envioCorrecto).remove();
    },3000);
}

function mostrarError(){

    // con Jquery creo h3 y le doy clase
    let error = `<h3>Por favor ingrese todos los datos</h3>`
    $(".pacientes__ficha").append(error);

    $(".pacientes__ficha > h3").addClass("error"); 

    //despues de 3 segundos se borra el h3
    setTimeout(()=>{
        $(".pacientes__ficha > h3").append(error).remove();
    },3000);
 
}
