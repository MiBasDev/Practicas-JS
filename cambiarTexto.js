function cambiarTexto() {
    document.getElementById("prueba").innerHTML = "Texto cambiado";
}

function cambiarTamaño() {
    p1 = document.getElementById("p1");
    p1.style.fontSize = "10px";
    p1.innerHTML = "Ahora soy pequeño";
}

function cambiarImagen() {
    var imagen = document.getElementById("myImg");
    if (imagen.src.match("green")) {
        imagen.src = "http://myfpschool.com/wp-content/uploads/2016/06/myblack.jpeg";
        imagen.style.height="180px";
        imagen.style.width="100px";
    } else {
        imagen.src = "http://myfpschool.com/wp-content/uploads/2016/06/mygreen.jpeg";
        imagen.style.height="18px";
        imagen.style.width="10px";
    }
    alert("hola bobo");
}

function printTexto(){
    document.write("<h3>Este es el h3</h3>");
}