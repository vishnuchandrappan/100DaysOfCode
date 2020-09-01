var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Hello World */
var message = 'Hello World';
console.log(message);
/** Types */
var isAuthenticated = false;
var total = 0;
var userName = 'John Doe';
var n = null;
var u = undefined;
var isAvailable = null;
var currentUser = undefined;
/** Arrays, enums, objects */
var oddNumbers = [1, 3, 5];
var participants = ['john doe', 'jane doe', 'john smith'];
var failedJobs = [1, 'lorem ipsum', { user_id: 1 }];
var product;
var products;
var Team;
(function (Team) {
    Team[Team["red"] = 0] = "red";
    Team[Team["green"] = 1] = "green";
    Team[Team["blue"] = 2] = "blue";
})(Team || (Team = {}));
;
var team = Team.red;
/** functions */
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
addNumbers(1, 2);
addNumbers(addNumbers(1, 2), addNumbers(3, 4));
var users;
var setUser = function (user) {
    users.push(user);
};
setUser({
    name: 'John Doe',
    email: 'john@example.com',
    user_id: 1,
    isVerified: false
});
/** Class */
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.hello = function () {
        console.log("Hello " + this.name);
    };
    return Student;
}());
var student1 = new Student('John Doe');
console.log(student1.hello());
/** Inheritance */
var ClassMonitor = /** @class */ (function (_super) {
    __extends(ClassMonitor, _super);
    function ClassMonitor(name) {
        return _super.call(this, name) || this;
    }
    ClassMonitor.prototype.status = function () {
        console.log("Monitoring...");
    };
    return ClassMonitor;
}(Student));
var student2 = new ClassMonitor('Jane Doe');
student2.hello();
student2.status();
