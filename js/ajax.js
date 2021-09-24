
$("document").ready(function(){

    const urlapi = "https://jsonplaceholder.typicode.com/comments";

    $("#api").click(function(){ 
        $.ajax({
            url: urlapi,
            type: 'GET',
            success: function(response){
                console.log (response);
                const HTMLResponse = document.querySelector("#mostrar");
                const lista = response.map((user) => `<li> Nombre: ${user.name}</li><li> Mail: ${user.email}</li><li> Comentario: ${user.body}</li>`);
                HTMLResponse.innerHTML = `<ul>${lista}</ul>`;
            },
            error:function(error){
                console.log (`Error ${error}`)
            }
        })

    })

}); 

$("#api").click(() => {
    $("#mostrar").animate({
        height: 'toggle'
    });
});

