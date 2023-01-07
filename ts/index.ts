let showErrorMsg: boolean = true;
let students: Array<string> = ["John Doe", "Michael"];

function showDetail(name: string, age: number): void {
    console.log(name);
}
let completed: boolean = false;
let nameUser: string = 'Sally';
let aNumber: number = 20;
let ages: number[] = [21, 30, 70]
enum Gender { Male, Female, Unspecified };
let gender: Gender = Gender.Female;
let something: any = 1;
something = "a string";
something = false;
function handleData(age: any) {
    console.log(age);
    // age could be anything!
}
function log(message: string): void {
    console.log(message);
}
interface IUser {
    firstName: string;
    lastName: string;
}
let me: IUser = { firstName: 'Jon', lastName: 'Hilton' };
let ambiguous: string | number;
ambiguous = 'Not any more';
ambiguous = 21;
function subtract(x: number, y: number): number {
    return x - y;
}
let greet = function (firstName: string, lastName?: string): string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
type Complex = { data: number[], output: (all: boolean) => number[] };
let zz: Complex = {
    data: [5],
    output: (all: boolean) => {
        return [1, 2, 3]
    }
}