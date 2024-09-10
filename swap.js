 let a = 5;
 let b = 7;

 //Way 1
 const temp = a;
 a=b;
 b=temp;
 console.log(a,b);

 //Way-2 
 [a,b]=[b,a];
 console.log(a,b);
 
 