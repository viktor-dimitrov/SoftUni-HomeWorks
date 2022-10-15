function personAndTeacher() {

    class Person {
        constructor (name, email) {
            this.name = name;
            this.email = email;
            this.output = `Person (name: ${this.name}, email: ${this.email})`;
        }
        toString() {
           return this.output;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
            this.output = `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
            this.output = `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let classes = personAndTeacher()

let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let p = new Person("Pesho",'Pesho@pesh.com')
let t = new Teacher("Daskalov", "daskal@tvu.org", "Math")
let s = new Student("Asencho","kokor4o@zle.bg", "Dalaveri")

console.log(p.toString())
console.log(t.toString())
console.log(s.toString())


