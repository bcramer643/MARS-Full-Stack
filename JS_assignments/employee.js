function send() {

    class Employee {

        constructor(name, empId, hoursWorked, joiningDate, designation) {
            this.name = name;
            this.empId = empId;
            this.hoursWorked = hoursWorked;
            this.joiningDate = joiningDate;
            this.designation = designation;

        }
        calcSalary() {
            if (this.designationesignation == "manager") {

                return this.hoursWorked * 90;

            } else if (this.designation == "consultant") {

                return this.hoursWorked * 70;

            } else if (this.designation == "trainee") {

                return this.hoursWorked * 45;
            }
        }
    }

    class Manager extends Employee {
        construtor(name, designation, hoursWorked) {
            this.name = name;
            this.designation = designation;
            this.hoursWorked = hoursWorked;


        }
    }

    class Consultant extends Employee {
        construtor(name, designation, hoursWorked) {
            this.name = name;
            this.designation = designation;
            this.hoursWorked = hoursWorked;


        }
    }

    class Trainee extends Employee {
        construtor(name, designation, hoursWorked) {
            this.name = name;
            this.designation = designation;
            this.hoursWorked = hoursWorked;


        }
    }

    let info = {
        name: document.getElementById("name").value,
        empId: document.getElementById("empId").value,
        hoursWorked: document.getElementById("hoursWorked").value,
        designation: document.querySelector('input[type=radio]:checked').value,
    }

    let emp1 = new Employee(details.name, info.designation, details.hoursWorked)
    var empSalary = (emp1.getsalary());

    let manager1 = new Manager(details.name, info.designation, details.hoursWorked)
    var empSalary = (manager1.getsalary());

    let consultant1 = new Consultant(details.name, info.designation, details.hoursWorked)
    var empSalary = (consultant1.getsalary());

    let trainee1 = new Trainee(details.name, info.designation, details.hoursWorked)
    var empSalary = (trainee1.getsalary());

    alert("send")

    let textValue = "Employee: " + "      "+ info.name + "   " + "Designation: " +"     "+ info.designation + "Salary: " + empSalary;
    localStorage.setItem("itemValue", textValue)

};
