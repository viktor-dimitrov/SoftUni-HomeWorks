class Laptop {
    constructor(inputObject, quality){
        this.info = inputObject

            
        this.isOn = false;   
        this.quality = Number(quality);
        this.price = Number((800 - (this.info.age * 2)) + (this.quality * 0,5)).toFixed(1)
        
    }

    turnOn(){
        this.isOn = true;
        this.quality--;
        
    }
    turnOff(){
        this.isOn = false;
        this.quality--;
        
    }
    showInfo(){
        return JSON.stringify(this.info)
    }
     

     
   
}



let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)
