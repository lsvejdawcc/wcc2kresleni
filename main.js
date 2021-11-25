function poNacteni() {
    let cnv = document.getElementById("platno");
    let ctx = cnv.getContext("2d");

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

}