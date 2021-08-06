
let fichaPaciente = []

let miBoton = document.getElementById("miBoton");

miBoton.addEventListener("click", cargarDatos);

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

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let os = document.getElementById("obraSocial").value;
    let telefono = document.getElementById("telefono").value;
    let mail = document.getElementById("mail").value;

    if (nombre != "" && edad != "" && os != "" && telefono != "" && mail!= "" ){
        const paciente1 = new datos(nombre,edad,os,telefono,mail);
        fichaPaciente.push (paciente1);

        localStorage.setItem("datosPacientes",JSON.stringify(fichaPaciente));
        
        console.table(fichaPaciente)

        const texto = document.createElement("div");
        texto.id = "datosPacientes";
        texto.textContent = `Nombre: ${paciente1.nombre} Edad: ${paciente1.edad} Obra Social: ${paciente1.os} Telefono: ${paciente1.telefono} Mail: ${paciente1.mail}`;
        texto.classList.add("fichaEstilo");
        document.getElementById("pacientesId").appendChild(texto);

        mostrarEnvioCorrecto("Datos cargados exitosamente");

    }else {
        mostrarError("Por favor ingrese todos los datos");
    };

    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("obraSocial").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("mail").value = "";

}

const formulario = document.querySelector("#form");
 
function mostrarEnvioCorrecto (mensaje) {
    const envioCorrecto = document.createElement('p');
    envioCorrecto.textContent = mensaje;
    envioCorrecto.classList.add("correcto");
    console.log(envioCorrecto);
    
    formulario.appendChild(envioCorrecto);
    setTimeout(()=>{
        envioCorrecto.remove();
    },5000);


}

function mostrarError(mensaje){
    const error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add('error');
    console.log(error);

    formulario.appendChild(error);
    setTimeout(()=>{
        error.remove();
    },3000);
}

