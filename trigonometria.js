var trigonometria= prompt("Qual operação deseja realizar: \n 1- Seno \n 2- Coseno \n 3- Tangete");
var angulo= prompt("Digite o ângulo");
switch(trigonometria) {
    case '1':
        alert(Math.asin((angulo*Math.PI)/180)); break
    case '2':
        alert(Math.cos((angulo*Math.PI)/180)); break
    case '3':
        alert(Math.tan((angulo*Math.PI)/180)); break

    default:
        alert("Opção Invàlida");
}