class Calculator{
    constructor(){
        this.number1=0;
        this.number2=0;
    }
    add(number1,number2){
        return number1+number2;
    }
    subtract(number1,number2){
        if(number1>number2)
        return number1-number2;
        else
        return number2-number1;
    }
    multiply(number1,number2){
        return number1*number2;
    }

}
let cal=new Calculator();
console.log(cal.add(2,3));