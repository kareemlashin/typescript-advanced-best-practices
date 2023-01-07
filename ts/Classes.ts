class Calculator {
    private result: number;
    constructor() {
        this.result = 0;
    }
    add(x: number) {
        this.result += x;
    }
    subtract(x: number) {
        this.result -= x;
    }
    getResult(): number {
        return this.result;
    }
}
// use it
let calculator = new Calculator();
calculator.add(10);
calculator.subtract(9);
console.log(calculator.getResult()); // 1

class Person {
    private type: string | null = null;
    protected ageUser: number = 23;

    constructor(public name: string, public userName: string, private email: string) {
      this.name = name;
      this.userName = userName;
      this.email = email;
    }

    public printAge = () => {
      console.log(this.ageUser);
      this.setType('Young guy');
    }

    private setType = (type: string) => {
      this.type = type;
      console.log(this.type);
    }
  }
  class Type {
    private type: string | null = null;

    setType = (type: string) => {
      this.type = type;
      console.log(this.type);
    }
}

class Users extends Type {
    protected age: number = 23;

    constructor(public name: string, public userName: string, private email: string) {
      super()
      this.name = name;
      this.userName = userName;
      this.email = email;
    }

    public printAge = () => {
      console.log(this.age);
      this.setType('Young guy');
    }
}