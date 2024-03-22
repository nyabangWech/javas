
let arr1=[3,34,90,12];
console.log('last item',arr1[arr1.length-1]);

let  arr2=[true,"green","where",12,156];
console.log('last item',arr2[arr2.length-1]);

 const pet=["cow","bird","snake","dog"];
 let mypet = pet.toString();
 console.log(mypet);

 var  item =[-5 ,9 ,5,3 ,2,-3,6,8,4,1];
 item.sort(function(a,b){return a -b});
 console.log(item);

 item.sort(function(a,b){return b -a});
 console.log(item);

 let arr=["boy","man","girl","school","girl","woman"];
 function filterArray(arr) {
    return arr.filter((item,
          index) => arr.indexOf(item) === index);
  }
  console.log(filterArray(arr));
    
  
  let clothes = ["shelter", "clothing", "food", "education"];
  let material = clothes.includes("food");
  if(material==true){
      console.log("food")
  }
  else{
  console.log("the search word was not found")
  } 

  let c="renw"
  console.log(sort,word.sort());
  
 
 
 