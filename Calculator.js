class Calculator{

  constructor()
  {
	console.log("Calculator loaded");
  }

  add(num1=0,num2=0){
	return num1 + num2;
  }
   
add(num1=0,num2=0){
   if(typeof(num1)!== 'number' ||
   typeof(num2)!== 'number'){
     return 0;
   }
   return num1 + num2;
 }

  
  subtract(num1,num2){
	return num1 - num2;
  }

  multiply(num1,num2){
	return num1 * num2;
  }

    divide(num1,num2){
	return num1 / num2;
  }
}

//required so data is visible externally
module.exports = Calculator;
