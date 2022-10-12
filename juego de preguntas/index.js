let INDEX_Pregunta = generateRandomInt(0,9);
let puntaje=0;
let n=0;
cargarPregunta(INDEX_Pregunta)


function cargarPregunta(index)
{

    objetoPregunta=BaseDePreguntas[index]
     opciones = [...objetoPregunta.incorrectas]
    opciones.push(objetoPregunta.respuesta)
    opciones.sort(()=>Math.random()-0.5)

    document.getElementById("imagen").src=objetoPregunta.imagen
    if(objetoPregunta.imagen)
    {
        document.getElementById("imagen").src=objetoPregunta.imagen;
        document.getElementById("imagen").style.display=""
    }
    else
    {
        document.getElementById("imagen").style.display="none"
    }
    
    
document.getElementById("pregunta").innerHTML=objetoPregunta.pregunta
document.getElementById("opcion-1").innerHTML=opciones[0]
document.getElementById("opcion-2").innerHTML=opciones[1]
document.getElementById("opcion-3").innerHTML=opciones[2]
document.getElementById("opcion-4").innerHTML=opciones[3]

}

function ayuda()
{
    Swal.fire({
        title: "consejo",
        text: objetoPregunta.consejo,
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}

async function SeleccionarOpcion(index){

let validezRespuesta=opciones[index]==objetoPregunta.respuesta
if (validezRespuesta)
{
    await Swal.fire(
        { 
            title: "respuesta correcta",
        text: "la respuesta ha sido correcta",
        icon:"success",
});
puntaje++
}
else
{
    await Swal.fire(
        { 
            title: "respuesta incorrecta",
        text: "la respuesta ha sido incorrecta",
        icon:"error",
});
}
n++;
INDEX_Pregunta = generateRandomInt(0,9);
if(n>= 5)
{
await  Swal.fire({
    title: "fin del juego",
    text: `Tu puntaje fue de:"${puntaje}/${BaseDePreguntas.length}"`,
   
});
puntaje=0;
n=0;
}
cargarPregunta(INDEX_Pregunta)
}
function generateRandomInt(min,max){
    return Math.floor((Math.random() * (max-min)) +min);
}