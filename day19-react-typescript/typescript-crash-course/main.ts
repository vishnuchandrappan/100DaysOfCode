/** Hello World */
const message = 'Hello World';
console.log(message);



/** Types */
let isAuthenticated: boolean = false;
let total: number = 0;
let userName: string = 'John Doe';


let n: null = null;
let u: undefined = undefined;

let isAvailable: boolean = null;
let currentUser: string = undefined;




/** Arrays, enums, objects */
let oddNumbers: number[] = [1, 3, 5];
let participants: string[] = ['john doe', 'jane doe', 'john smith'];
let failedJobs: any[] = [1, 'lorem ipsum', { user_id: 1 }];

let product: {
  id: number,
  name: string
}

let products: {
  id: number,
  name: string
}[]

enum Team { red, green, blue };

let team: Team = Team.red;




/** functions */
const addNumbers = (num1: number, num2: number): number => {
  return num1 + num2;
}

addNumbers(1, 2)
addNumbers(
  addNumbers(1, 2),
  addNumbers(3, 4)
)




/** Interface */
interface User {
  name: string,
  email: string,
  phone?: number,
  user_id: number,
  isVerified: boolean,
}

let users: User[];

const setUser = (user: User) => {
  users.push(user);
}

setUser({
  name: 'John Doe',
  email: 'john@example.com',
  user_id: 1,
  isVerified: false
});



/** Class */
class Student {
  name: string

  constructor(name: string) {
    this.name = name;
  }

  hello() {
    console.log(`Hello ${this.name}`);
  }
}

let student1 = new Student('John Doe');
console.log(student1.hello());


/** Inheritance */
class ClassMonitor extends Student {
  constructor(name: string) {
    super(name);
  }

  status() {
    console.log(`Monitoring...`);
  }
}

let student2 = new ClassMonitor('Jane Doe');
student2.hello();
student2.status();

