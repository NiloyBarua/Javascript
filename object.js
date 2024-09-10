const bottle = {
    brand: 'apple',
    price: 76000,
    color: 'white',
    isClean: false,
    chapter :['first','second']
}
console.log(bottle);
console.log(bottle.isClean);
console.log(bottle['price']);

bottle.color = "blue";
console.log(bottle);

bottle['color'] = "Yellow";
console.log(bottle);

//To get all the property Name Separately
 const keys = Object.keys(bottle);
 console.log(keys);

 //To Get All The Values Separatly
 const values = Object.values(bottle);
 console.log(values);

 //Delete a property
 delete bottle.chapter;
 console.log(bottle);

 //Get property name and values by forin
for(const prop in bottle){
    console.log(prop);
    console.log(bottle[prop]);
    
} 
 
   