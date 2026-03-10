//Creating base class
class Employee {
    constructor(name,department){
        this.name = name;
        this.department = department;
        console.log(`Employee Name: ${name}`);
        console.log(`Department: $${department}`);
    }
    //Adding method
    describe(){
        return `Employee's name is ${this.name} and their department is: $${this.department}`
    }
};
//Subclass creation
class Manager{
   constructor(name,department,teamSize){
    super(name,department);
    this.teamSize = teamSize;
    console.log(`Team Size: ${teamSize}`);
   } 
   describe(){
    return `${describe()} Manages a team of ${this.teamSize} Employees`
   }//Describe method
}
//Creating Instances
const manager = new Manager("Buffy","Marketing",50);
const emp1 = new Employee("Giles","Project Manager", 80000);
const emp2 = new Employee("Spike","Public Relations",74000);

console.log(manager);
console.log(emp1);
console.log(emp2);
//Creating Company class with employees array
class Company{
    constructor(){
    this.employees = this.employees    
    }
addEmployee(employee){
    if(typeof employee === 'string' && employee.trim().length > 0){
        this.employees.push(employee);
        
    }else{
        console.error("Invalid Employee name, please try again.")
    }
}
listEmployees(){
    console.log("List of employees: ", this.employees);
}
}
//Creating Instances for Company object
const myCompany = new Company();
myCompany.addEmployee(emp1);
myCompany.addEmployee(manager);
myCompany.listEmployees();

console.log(emp1);
console.log(manager);
