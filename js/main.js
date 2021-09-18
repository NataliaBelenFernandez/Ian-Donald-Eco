let fichaPaciente = []

// funcion constructora
class datos { 
    constructor(nombre,os,afiliado,dni,telefono,mail,consulta,fecha,rango) {
        this.nombre = nombre;
        this.os = os;
        this.afiliado = afiliado;
        this.dni = dni;
        this.telefono = telefono;
        this.mail = mail;
        this.consulta = consulta;
        this.fecha = fecha;
        this.rango = rango;
    }

    satisfactorio(){
        console.log(`${this.nombre} ha cargado los datos satifactoriamente`);
    }
}

// remplazo onclick del html por evento
const miBoton = document.getElementById("botonEnviar");
miBoton.addEventListener("click", cargarDatos);

// funcion que se ejecuta cada vez que se hace click en el boton
function cargarDatos(){

    // tomo valor de entrada y lo guardo en variable
    let nombre = document.getElementById("nombre").value;
    let os = document.getElementById("obraSocial").value;
    let afiliado = document.getElementById("afiliado").value;
    let dni = document.getElementById("dni").value;
    let telefono = document.getElementById("telefono").value;
    let mail = document.getElementById("mail").value;
    let consulta = document.getElementById("consulta").value;
    let fecha = document.getElementById("fecha").value
    let rango = document.getElementById("rango").value

    if (nombre != "" && os != "" && afiliado != "" && dni != "" && telefono != "" && mail!= "" && consulta != "" && fecha != ""  && rango != ""){
        // si input es disinto a vacio se ejecuta:
        
        const paciente1 = new datos(nombre,os,afiliado,dni,telefono,mail,consulta,fecha,rango);
        fichaPaciente.push (paciente1); // lo pusheo al array

        paciente1.satisfactorio();

        localStorage.setItem("datosPacientes",JSON.stringify(fichaPaciente)); // lo convierto a string
        
        console.table(fichaPaciente);

        // creo tabla para que se muestre datos ingresados con Jquery y le doy clase

        let tabla = `<table>
        <tr><td colspan="2">Solicitud de turno pendiente - A confirmar </td></tr>
        <tr><th>Nombre y Apellido</th><td>${paciente1.nombre}</td></tr>
        <tr><th>O.S. / Plan</th><td>${paciente1.os}</td></tr>
        <tr><th>Numero de Afiliado</th><td>${paciente1.afiliado}</td></tr>
        <tr><th>DNI</th><td>${paciente1.dni}</td></tr>
        <tr><th>Telefono</th><td>${paciente1.telefono}</td></tr>
        <th>Mail</th><td>${paciente1.mail}</td></tr>
        <th>Tipo de consulta o estudio a realizar</th><td>${paciente1.consulta}</td></tr>
        <th>Dia de preferencia</th><td>${paciente1.fecha}</td></tr>
        <th>Preferencia Horaria</th><td>${paciente1.rango}</td></tr></table>`

        // Ubico el div y le paso el contenido de tabla
        document.getElementById("prueba").innerHTML = tabla;

        $("table").addClass("table table-sm");
                
        mostrarEnvioCorrecto();

    }else {
        mostrarError();
    };

    // se limpian los inputs una vez cargados los datos
    document.getElementById("nombre").value = "";
    document.getElementById("obraSocial").value = "";
    document.getElementById("afiliado").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("consulta").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("rango").value = "";
}

 
function mostrarEnvioCorrecto(){
    
    // modal

    const contenedorModal = document.getElementById("contenedorModal");
    const cerrar = document.getElementById("cerrar");

    contenedorModal.classList.add("mostrar");

    
    // bloqueo el scroll del body al mostrar el modal
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;  
    
    cerrar.addEventListener("click", () => {
    contenedorModal.classList.remove("mostrar");
    // activo el scroll del body al cerrar el modal
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });
    });

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



