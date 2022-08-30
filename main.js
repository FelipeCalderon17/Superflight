const calcularPrecio = (ciudad,pasajeros,maletasDos,sillaDos) => {
    ciudad = document.getElementById("ciudad").value;
    if (ciudad==1){
        ciudad =120000;
    }
    if (ciudad==2){
        ciudad = 90000;
    }
    if (ciudad==3){
        ciudad = 150000;
    }
    if (ciudad==4){
        ciudad = 100000;
    }
    if (ciudad==5){
        ciudad = 180000;
    }
    if (ciudad==6){
        ciudad = 130000;
    }
    if (ciudad==7){
        ciudad =80000;
    }
    if (ciudad==8){
        ciudad = 110000;
    }
    if (ciudad==9){
        ciudad = 90000;
    }
    pasajeros = document.getElementById("pasajeros").value;
    maletasDos = document.getElementById("maletas").value;
    let precio = 0;
    if (maletasDos>50){
        maletasDos = (maletasDos-50) * 15000;
    }else{
        maletasDos = 0;
    }
    sillaDos= document.getElementById("silla").value;
    if (sillaDos==1){
        sillaDos = 0;
    }
    if (sillaDos==2){
        sillaDos = 20000;
    }
    if (sillaDos==3){
        sillaDos = 40000;
    }
    precio = (ciudad*pasajeros)+maletasDos+(sillaDos*pasajeros);
    return document.write("El precio es: "+ precio+"<br/>El precio de los pasajes es: "+(ciudad*pasajeros)+"<br/>El coste de las maletas es: "+maletasDos+"<br/>El precio de la silla es: "+(sillaDos*pasajeros));
}
