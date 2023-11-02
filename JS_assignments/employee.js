$(function () {
    send()
    class Employee {

        constructor(name, empId, hoursWorked, joiningDate, designation) {
            this.name = name;
            this.empId = empId;
            this.hoursWorked = hoursWorked;
            this.joiningDate = joiningDate;
            this.designation = designation;

        }
        calcSalary() {
            if (this.designation == "manager") {

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
        name: $("#name").val(),
        empId: $("#empId").val(),
        hoursWorked: $("#hoursWorked").val(),
        designation: $('input[type=radio]:checked').val()
    }

    let emp1 = new Employee(info.name, info.designation, info.hoursWorked)
    var empSalary = (emp1.calcSalary());

    let manager1 = new Manager(info.name, info.designation, info.hoursWorked)
    var empSalary = (manager1.calcSalary());

    let consultant1 = new Consultant(info.name, info.designation, info.hoursWorked)
    var empSalary = (consultant1.calcSalary());

    let trainee1 = new Trainee(info.name, info.designation, info.hoursWorked)
    var empSalary = (trainee1.calcSalary());

    alert("send")

    let textValue = "Employee: " + "      "+ info.name + "   " + "Designation: " +"     "+ info.designation + "Salary: " + info.empSalary;
    localStorage.setItem("itemValue", textValue)

});

