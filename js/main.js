
let fichaPaciente = []

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


    const paciente1 = new datos(nombre,edad,os,telefono,mail);
    fichaPaciente.push (paciente1);

    localStorage.setItem("datosPacientes",JSON.stringify(fichaPaciente));
        
    console.table(fichaPaciente)

    const texto = document.createElement("div");
    texto.id="datosPacientes";
    texto.textContent=`Nombre: ${paciente1.nombre} Edad: ${paciente1.edad} Obra Social: ${paciente1.os} Telefono: ${paciente1.telefono} Mail: ${paciente1.mail}`;
    document.getElementById("pacientesId").appendChild(texto);


    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("obraSocial").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("mail").value = "";

}



