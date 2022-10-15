class Company {
    constructor () {
        this.departments = {}
    }

    addEmployee(name, salary, position, department) {
        [name, salary, position, department].forEach(element => {
            if (!element || element < 0) {
                throw new Error('Invalid input!')
            }
        });

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = {};
            this.departments[department]['workers'] = {};
            this.departments[department]['salaries'] = [];
            this.departments[department]['average'] = 0;
        }
        this.departments[department]['workers'][name] = [position, salary]  ;
        this.departments[department]['salaries'].push(salary);
        this.departments[department]['average'] = (this.departments[department]['salaries'].reduce((acc, num)=> acc += num)) / this.departments[department]['salaries'].length;

        return (`New employee is hired. Name: ${name}. Position: ${position}`);

       
    }

    bestDepartment(){
        let bestDep = "";
        let bestAver = 0;

        for(let key in this.departments) {
            if (this.departments[key].average > bestAver) {
                bestAver = this.departments[key].average
                bestDep = key;
            }
        }

      let nameSorted =  Object.entries(this.departments[bestDep].workers).slice().sort((a, b) => a[0].localeCompare(b[0]))
  
      let sorted = nameSorted.sort((a,b)=> b[1][1] - a[1][1] || a[0].localeCompare(b[0]));
      let output = [`Best Department is: ${bestDep}`, `Average salary: ${bestAver.toFixed(2)}`];
      sorted.forEach(el => {
        let line = `${el[0]} ${el[1][1]} ${el[1][0]}`;
        output.push(line);
      });
      
      return output.join('\n')
      
    }
}



let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
console.log(c.bestDepartment())

