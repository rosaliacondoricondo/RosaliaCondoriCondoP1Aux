//1: promedio Ricks 

function promeRicks(array) {
  let sum = 0;
  let b = array.length ;
  for (let i = 0; i < array.length; i++) {
       sum = (sum + array[i]);}
       let prom = (sum/array.length);
       if (array.length=0)
       {return prom=0}
       else
       {return prom}}

               console.log(promeRicks([96, 108, 89]))
               console.log(promeRicks([]))

 //2: promedio Mortys

 function promeMortys(array) {
  let sum = 0;
  let b = array.length ;
  for (let i = 0; i < array.length; i++) {
       sum = (sum + array[i]);}
       let prom1= (sum/array.length);
       if (array.length=0)
       {return prom1=0}
       else
       {return prom1}}

               console.log(promeMortys([88, 91, 110]))
               console.log(promeMortys([]))
 //2. Compare los puntajes promedio del equipo para determinar el ganador de la
//competencia, e imprimirlo en la consola. No olvides que puede haber un
//empate, así que toma en cuenta ese caso también.

if (promeMortys>promeRicks){
  console.log ("promMortys ganador");
}
else if(promeMortys<promeRicks){
  console.log ("promRicks ganador");
  }
else 
     if(promeRicks===promeMortys){
     console.log("empates");
}
