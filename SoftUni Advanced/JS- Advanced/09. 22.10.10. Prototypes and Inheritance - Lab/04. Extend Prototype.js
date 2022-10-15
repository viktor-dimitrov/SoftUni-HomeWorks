





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


    function extendProrotype(classToExtend) {

        classToExtend.prototype.species = "Human";
        classToExtend.prototype.toSpeciesString = function () {
            return `I am a ${this.species}. ${this.toString()}`
        }
    
    }


    

extendProrotype(Person)

let p = new Person("Pesho",'Pesho@pesh.com')
console.log(p.toSpeciesString())
