function factorial(n){
  if(n<0){
    return -1
  }
  else if(n==0||n==1) {
    return 1
  }
  else{
    return n*factorial(n-1) 
  }
}
console.log("Factorial Results:")
console.log("factorial(0)="+factorial(0)) 
console.log("factorial(1)="+factorial(1)) 
console.log("factorial(5)="+factorial(5))
console.log("factorial(7)="+factorial(7))
console.log("factorial(-3)="+factorial(-3))
