// 1. map()array iteration;
function map(){
     
     let a=String(document.getElementById("num1").value);
     let text=a.split(",");
     let b=String(document.getElementById("a1").value);
  let txt=text.map(display);

     document.getElementById("demo").innerHTML=txt;
     
     function display(value,index,array){
          return value*b;
     }
}
// 2. flatmap()array iteration;
function flatmap(){
     
    let a=String(document.getElementById("num1").value);
    let text=a.split(",");
    let b=String(document.getElementById("a1").value);
 let txt=text.flatMap((x)=> x * b);

    document.getElementById("demo").innerHTML=txt;
    }
// 3. filter()array iteration;
    function filter(){
     let a=String(document.getElementById("num1").value);
     let text=a.split(",");
     let b=String(document.getElementById("a1").value);
let txt=text.filter(display);
     document.getElementById("demo").innerHTML=txt;
     function  display(value,index,array){
          return value > b;
     }
}
// 4. every()array iteration;
function every(){
     let a=String(document.getElementById("num1").value);
     let text=a.split(",");
     let b=String(document.getElementById("a1").value);
let txt=text.every(display);
     document.getElementById("demo").innerHTML=txt;
     function  display(value,index,array){
          return value > b;
     }
}
// 5. some()array iteration;
function some(){
     let a=String(document.getElementById("num1").value);
     let text=a.split(",");
     let b=String(document.getElementById("a1").value);
let txt=text.some(display);
     document.getElementById("demo").innerHTML=txt;
     function  display(value,index,array){
          return value > b;
     }
}
// 6. indexof()array iteration;
function indexOf(){
     let a=String(document.getElementById("num1").value);
     let text=a.split(",");
     let b=String(document.getElementById("a1").value);
     let txt=text.indexOf(b)+1;

     document.getElementById("demo").innerHTML = 
"The Array Element found in position " + txt;
    
}

// 7. lastindexof()array iteration;
function lastIndexOf(){
     let a=String(document.getElementById("num1").value);
     let text=a.split(",");
     let b=String(document.getElementById("a1").value);
     let txt=text.lastIndexOf(b)+1;

     document.getElementById("demo").innerHTML = 
"The Array Element found in position " + txt;
    
}
// 8. lastindexof()array iteration;
function find(){
    let a=String(document.getElementById("num1").value);
    let text=a.split(",");
    let b=String(document.getElementById("a1").value);
let txt=text.find(display);
    document.getElementById("demo").innerHTML=txt;
    function  display(value,index,array){
         return value > b;
    }
}

// 9. lastindexof()array iteration;
function findIndex(){
    let a=String(document.getElementById("num1").value);
    let text=a.split(",");
    let b=String(document.getElementById("a1").value);
let txt=text.findIndex(display);
    document.getElementById("demo").innerHTML=txt;
    function  display(value,index,array){
         return value > b;
    }
}

// 10. includes()array iteration;
function includes(){
    let a=String(document.getElementById("num1").value);
    let text=a.split(",");
    let b=String(document.getElementById("a1").value);
    let txt= a.includes(b);
    document.getElementById("demo").innerHTML=txt;
}


// 11. foreach()array iteration;
function foreach(){
    let text=String(document.getElementById("num2").value);
    
    let txt = text.split(",");
    txt.forEach(display);
    document.getElementById("demo1").innerHTML = txt;
    
    function display(value) {
       txt +="<br>"+ + value  ;
}
}
// 12. reduce()array iteration;
function reduce(){
    
     const numbers = String(document.getElementById("num2").value);
    let text=numbers.split(",");
     let sum = text.reduce(myFunction);

     document.getElementById("demo1").innerHTML = "The sum is " + sum;
     
     function myFunction(total, value, index, array) {
       return total + value;
     }
    }
    // 13. reduceRight()array iteration;
function reduceRight(){
    
    const numbers = String(document.getElementById("num2").value);
   let text=numbers.split(",");
    let sum = text.reduceRight(myFunction);

    document.getElementById("demo1").innerHTML = "The sum is " + sum;
    
    function myFunction(total, value, index, array) {
      return total + value;
    }
   }
// 14. entries()array iteration;
function entries(){
let text=String(document.getElementById("num2").value);
let a=text.split(",");
let b=a.entries();
for (let x of b) {
    document.getElementById("demo1").innerHTML += x + "<br>";

}
}
// 15. keys()array iteration;
function keys(){
let text=String(document.getElementById("num2").value);
let a=text.split(",");
let b=a.keys();
for (let x of b) {
   
 document.getElementById("demo1").innerHTML = 
   text += "<br>" + x ;
}
}
// 16. Array.Form()array iteration;
function arrayform(){
    const myArr = String(document.getElementById("num2").value);
    let a=Array.from(myArr);
document.getElementById("demo1").innerHTML =a;
}

