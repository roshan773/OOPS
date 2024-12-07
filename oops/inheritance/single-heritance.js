class Student {
    constructor(name)
    {
        this.name = name;
    }
    getName(){
        console.log(`${this.name}`)
    }
}

class Customer extends Student
{
    getCustomerName()
    {
        console.log(`${this.name}`)
    }
}

let Obj = new Customer('Alex');
console.log(Obj);