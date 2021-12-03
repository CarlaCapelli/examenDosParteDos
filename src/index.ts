let camila: number[] = [
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
];
let franco: number[] = [
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
];
let sofia: number[] = [
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
];
let matias: number[] = [
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
];
let agustina: number[] = [
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
];

function mejorDeTodosSemanal(){
for (let i :number=0;i < camila.length;i++){
  if (camila[i]>franco[i]&& camila[i]>sofia[i]&&camila[i]>matias[i]&&camila[i]>agustina[i]){
console.log("el mejor monto de la semana " ,i +1 ,"es de Camila y es ", camila[i]);
  } else if(franco[i]>camila[i]&& franco[i]>sofia[i]&&franco[i]>matias[i]&&franco[i]>agustina[i]){
    console.log("el mejor monto de la semana " ,i +1 ,"es de franco y es ", franco[i]);
  }else if (sofia[i]>camila[i]&& sofia[i]>franco[i]&&sofia[i]>matias[i]&&sofia[i]>agustina[i]){
      console.log("el mejor monto de la semana " ,i +1 ,"es de Sofia y es ", sofia[i]);
     }else if (matias[i]>camila[i]&& matias[i]>franco[i]&&matias[i]>sofia[i]&&matias[i]>agustina[i]){
        console.log("el mejor monto de la semana " ,i +1 ,"es de Matias y es ", matias[i]);
     }else if (agustina[i]>camila[i]&& agustina[i]>franco[i]&&agustina[i]>matias[i]&&agustina[i]>sofia[i]){
          console.log("el mejor monto de la semana " ,i +1 ,"es de agustina y es ", agustina[i]);  

    }
  }

}
function mejorDeTodosMes(){
  let sumaMesUnoCamila: number = 0;
  let sumaMesDosCamila: number = 0;
  //let sumaMesTresCamila: number = 0;
  let sumaMesUnoFranco: number = 0;
  let sumaMesDosFranco: number = 0;
  //let sumaMesTresFranco: number = 0;
  let sumaMesUnoSofia: number = 0;
  let sumaMesDosSofia: number = 0;
  let sumaMesTresSofia: number = 0;
  let sumaMesUnoMatias: number = 0;
  let sumaMesDosMatias: number = 0;
  let sumaMesTresMatias: number = 0;
  let sumaMesUnoAgustina: number = 0;
  let sumaMesDosAgustina: number = 0;
  let sumaMesTresAgustina: number = 0;
  for (let i:number = 0; i < 4; i++) {
    sumaMesUnoCamila = sumaMesUnoCamila + camila[i];
    sumaMesUnoFranco = sumaMesUnoFranco + franco[i];
    sumaMesUnoSofia = sumaMesUnoSofia + sofia[i];
    sumaMesUnoMatias = sumaMesUnoMatias + matias[i];
    sumaMesUnoAgustina = sumaMesUnoAgustina + agustina[i];
  }
  if (sumaMesUnoCamila > sumaMesUnoFranco &&sumaMesUnoCamila > sumaMesUnoSofia &&sumaMesUnoCamila > sumaMesUnoMatias &&sumaMesUnoCamila > sumaMesUnoAgustina ){
    console.log("el mejor vendedor del mes de enero es camila y el monto es ", sumaMesUnoCamila);
  }else if (sumaMesUnoFranco> sumaMesUnoCamila&&sumaMesUnoFranco> sumaMesUnoSofia && sumaMesUnoFranco> sumaMesUnoMatias && sumaMesUnoFranco> sumaMesUnoAgustina){
    console.log("el mejor vendedor del mes de enero es Franco y el monto es ", sumaMesUnoFranco);

  }else if (sumaMesUnoSofia> sumaMesUnoCamila && sumaMesUnoSofia> sumaMesUnoFranco && sumaMesUnoSofia> sumaMesUnoMatias && sumaMesUnoSofia> sumaMesUnoAgustina){
    console.log ("el mejor vendedor del mes de enero es Sofia y el monto es " , sumaMesUnoSofia);
  }else if (sumaMesUnoMatias> sumaMesUnoCamila && sumaMesUnoMatias> sumaMesUnoFranco && sumaMesUnoMatias> sumaMesUnoSofia && sumaMesUnoMatias> sumaMesUnoAgustina){
    console.log(" el mejor vendedor del mes de enero es Matias y el monto es ", sumaMesUnoMatias);

  }else if (sumaMesUnoAgustina > sumaMesUnoCamila && sumaMesUnoAgustina > sumaMesUnoFranco && sumaMesUnoAgustina > sumaMesUnoSofia && sumaMesUnoAgustina > sumaMesUnoMatias){
    console.log("el mejor vendedor del mes de enero es Aguastina y el monto es ", sumaMesUnoAgustina);
  }
  
  
  for (let i :number = 4; i < 8; i++) {
    sumaMesDosCamila = sumaMesDosCamila + camila[i];
    sumaMesDosFranco = sumaMesDosFranco + franco[i];
    sumaMesDosSofia = sumaMesDosSofia + sofia[i];
    sumaMesDosMatias = sumaMesDosMatias + matias[i];
    sumaMesDosAgustina = sumaMesDosAgustina + agustina[i];
    if (sumaMesDosCamila > sumaMesDosFranco &&sumaMesDosCamila > sumaMesDosSofia &&sumaMesDosCamila > sumaMesDosMatias &&sumaMesDosCamila > sumaMesDosAgustina ){
      console.log("el mejor vendedor del mes de febrero es camila y el monto es ", sumaMesDosCamila);
    }else if (sumaMesDosFranco> sumaMesDosCamila&&sumaMesDosFranco> sumaMesDosSofia && sumaMesDosFranco> sumaMesDosMatias && sumaMesDosFranco> sumaMesDosAgustina){
      console.log("el mejor vendedor del mes de febrero es Franco y el monto es ", sumaMesDosFranco);
  
    }else if (sumaMesDosSofia> sumaMesDosCamila && sumaMesDosSofia> sumaMesDosFranco && sumaMesDosSofia> sumaMesDosMatias && sumaMesDosSofia> sumaMesDosAgustina){
      console.log ("el mejor vendedor del mes de febrero es Sofia y el monto es " , sumaMesDosSofia);
    }else if (sumaMesDosMatias> sumaMesDosCamila && sumaMesDosMatias> sumaMesDosFranco && sumaMesDosMatias> sumaMesDosSofia && sumaMesDosMatias> sumaMesDosAgustina){
      console.log(" el mejor vendedor del mes de febrero es Matias y el monto es ", sumaMesDosMatias);
  
    }else if (sumaMesDosAgustina > sumaMesDosCamila && sumaMesDosAgustina > sumaMesDosFranco && sumaMesDosAgustina > sumaMesDosSofia && sumaMesDosAgustina > sumaMesDosMatias){
      console.log("el mejor vendedor del mes de febreri es Aguastina y el monto es ", sumaMesDosAgustina);
    }
    
  }
  /*for (let i:number = 8; i < 12; i++) {
    sumaMesTresCamila = sumaMesTresCamila + camila[i];
    sumaMesTresFranco = sumaMesTresFranco + franco[i];
    sumaMesTresSofia = sumaMesTresSofia + sofia[i];
    sumaMesTresMatias = sumaMesTresMatias + matias[i];
    sumaMesTresAgustina = sumaMesTresAgustina + agustina[i];
    if (sumaMesTresCamila > sumaMesTresFranco &&sumaMesTresCamila > sumaMesTresSofia &&sumaMesTresCamila > sumaMesTresMatias &&sumaMesTresCamila > sumaMesTresAgustina ){
      console.log("el mejor vendedor del mes de marzo es camila y el monto es ", sumaMesTresCamila);
    }else if (sumaMesTresFranco> sumaMesTresCamila&&sumaMesTresFranco> sumaMesTresSofia && sumaMeTresFranco> sumaMesTresMatias && sumaMesUnoFranco> sumaMesUnoAgustina){
      console.log("el mejor vendedor del mes de enero es Franco y el monto es ", sumaMesUnoFranco);
  
    }else if (sumaMesUnoSofia> sumaMesUnoCamila && sumaMesUnoSofia> sumaMesUnoFranco && sumaMesUnoSofia> sumaMesUnoMatias && sumaMesUnoSofia> sumaMesUnoAgustina){
      console.log ("el mejor vendedor del mes de enero es Sofia y el monto es " , sumaMesUnoSofia);
    }else if (sumaMesUnoMatias> sumaMesUnoCamila && sumaMesUnoMatias> sumaMesUnoFranco && sumaMesUnoMatias> sumaMesUnoSofia && sumaMesUnoMatias> sumaMesUnoAgustina){
      console.log(" el mejor vendedor del mes de enero es Matias y el monto es ", sumaMesUnoMatias);
  
    }else if (sumaMesUnoAgustina > sumaMesUnoCamila && sumaMesUnoAgustina > sumaMesUnoFranco && sumaMesUnoAgustina > sumaMesUnoSofia && sumaMesUnoAgustina > sumaMesUnoMatias){
      console.log("el mejor vendedor del mes de enero es Aguastina y el monto es ", sumaMesUnoAgustina);
    }
    
  }
}*/
mejorDeTodosSemanal();
mejorDeTodosMes();