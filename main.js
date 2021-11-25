let cnv;
let cnx;
function poNacteni() {
    cnv = document.getElementById("platno");
    ctx = cnv.getContext("2d");

    setInterval(animace, 100);
}
let kruhX = 320;
let kruhY = 200;
function animace() {
    //vycisteni platna
    ctx.clearRect(0,0,cnv.width,cnv.height);

    //rovne cary
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "red";
    ctx.moveTo(0,0);
    ctx.lineTo(200,100);
    ctx.lineTo(200,150);
    ctx.lineTo(100,150);
    ctx.stroke();

    //obdelnik
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "green";
    ctx.rect(20, 200, 80, 40);
    ctx.stroke();

    //kruznice
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "blue";
    ctx.arc(250, 200, 30, 0, 2*Math.PI);
    ctx.stroke();

    //kruh (plny)
    kruhX = kruhX -2;
    kruhY = kruhY -1;
    ctx.beginPath();
    ctx.fillStyle = "magenta";
    ctx.arc(kruhX, kruhY, 30, 0, 2*Math.PI);
    ctx.fill();

}