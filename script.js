
let div=document.createElement('div');
div.className='aler';
document.body.append('div');

let scrollWidth= div.offsetWidth-div.clientWidth;
div.remove();

alert(scrollWidth);

let elem = window.innerWidth - document.documentElement.clientWidth;
console.log(elem);
console.log(window.innerWidth);
console.log(document.documentElement.clientWidth);

function setScrollTo(){ 
    window.scrollBy(0,100);
    const windowScroll =window.pageYOffset;
    console.log(windowScroll);
}
setTimeout (setScrollTo,1000);

let point = document.elementFromPoint(100,300);
console.log(point);


*/
/*let elem= document.getElementById('out');
let tmp ='';*/
/*for( let i=4; i<=400; i++){
 tmp = tmp + i + ' ';
}*/   
/*for (let i=1; i<=9; i++){
    tmp = tmp + 7 + ' * ' + i  + ' = ' + 7*i + ' <br>';
}*/

/*for( let i=1000; i<=3000; i++){
    tmp = tmp + '&#' + i + ' ';
   }*/
   /*let arr =[];
   for( let i=0; i<6; i++){
if ((i+ 1 )% 2===0){
    arr[i]=1;
}
else{
    arr[i]=0;
}
   } 
   console.log(arr);

//out.innerHTML = tmp;*/

//let arr =[];
/*for(i=1; i<10; i++){
 if(  i % 2 !== 0)  {
arr.push(i);
// если остаток от деления не равен 0, то i добавляем в массив

 }
}
console.log(arr);*/
/*let i=1;
while (i<30){
   i++;
   if ( i % 2 !==0){
    console.log(i);
   }
}
*/
let arr= [];
for (i=0; i<45; i++){
    if (i % 2 == 0){
        arr.push(i);
    }
}
console.log(arr);

let arr5=[];
for ( i=30; i> 0; i--)
if ( i % 3 == 0){
    arr5.push(i);
}
console.log(arr5);

let arr6=[];
for( i=0 ; i < 20; i++){
   
    arr6.push(i*i);
   
}
console.log(arr6);

let arr7=[];

for( i=0; i< 60; i++){
    if (i % 3 == 0 && i % 7 !== 0){
       arr7.push(i);
    }
}
console.log(arr7.length);

let arr8=[];
for ( i=0;i<70; i++){
    if( i% 2 ==0){
        arr8.push(i);
    }
}
console.log(arr8.length);