let cnv;
let cnx;
let obrazek = new Image();
obrazek.src = "mimon.png";
function stiskKlavesyDolu(udalost) {
    console.log(udalost.key);
    if (udalost.key == "w") {
        obdY = obdY -10;
    }
    if (udalost.key == "s") {
        obdY = obdY +10;
    }
}
function poNacteni() {
    document.addEventListener("keydown", stiskKlavesyDolu);

    cnv = document.getElementById("platno");
    ctx = cnv.getContext("2d");

    setInterval(animace, 30);
}
let obdX = 20;
let obdY = 200;
const KRUH_POLOMER = 30;
let kruhX = 320;
let kruhY = 200;
let kruhRychlostX = -5;
let kruhRychlostY = -1;
let obrazekUhel = 0;
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
    ctx.rect(obdX, obdY, 80, 40);
    ctx.stroke();

    //kruznice
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "blue";
    ctx.arc(250, 200, 30, 0, 2*Math.PI);
    ctx.stroke();

    //kruh (plny)
    kruhX = kruhX + kruhRychlostX;
    kruhY = kruhY + kruhRychlostY;
    if (kruhX < KRUH_POLOMER) { //stred kruhu je v mensi vzdalenosti nez jeho polomer
        kruhRychlostX = -1 * kruhRychlostX;
    }
    if (kruhX > cnv.width - KRUH_POLOMER) { //stred kruhu je v mensi vzdalenosti nez jeho polomer
        kruhRychlostX = -1 * kruhRychlostX;
    }
    if (kruhY < KRUH_POLOMER) { //stred kruhu je v mensi vzdalenosti nez jeho polomer
        kruhRychlostY = -1 * kruhRychlostY;
    }
    if (kruhY > cnv.height - KRUH_POLOMER) { //stred kruhu je v mensi vzdalenosti nez jeho polomer
        kruhRychlostY = -1 * kruhRychlostY;
    }
    ctx.beginPath();
    ctx.fillStyle = "magenta";
    ctx.arc(kruhX, kruhY, KRUH_POLOMER, 0, 2*Math.PI);
    ctx.fill();

    //obrazek
    obrazekUhel = obrazekUhel + 10; //otaceni obrazku
    ctx.save();
    ctx.translate(250, 50); //posunuti stredu otaceni resp. souradnic x=0,y=0 na novou pozici
    ctx.rotate(obrazekUhel/360 * 2*Math.PI);
    ctx.drawImage(obrazek, -30, -30, 60, 60); //na pozici posunute doleva o polovinu sirky a nahoru o polovinu vysky
    ctx.restore();
}