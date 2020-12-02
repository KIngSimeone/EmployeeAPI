const { pseudoRandomBytes } = require('crypto');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1,num2)=> {
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1,2)

//17535

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;

    }
    get name(){
        return this._name;
    }
}

let simeone = new Person('Simeone');
let praise = new Person("Praise")

praise.on('name', ()=>{
    console.log('my name is '+ praise.name);
})

simeone.on('name', ()=>{
    console.log('my name is ' + simeone.name);
})

simeone.emit('name');
praise.emit('name');