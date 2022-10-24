class SummerCamp {
    constructor (organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money) {
        if (!Object.keys(this.priceForTheCamp).includes(condition)) {
            throw new Error ("Unsuccessful registration at the camp.");
        } else {
            if (money < this.priceForTheCamp[condition]) {
                return `The money is not enough to pay the stay at the camp.`
            }
        }

        let findPart = this.listOfParticipants.find(part => part.name === name);

        if (findPart) {
            return `The ${name} is already registered at the camp.`
        }

       let newPart = {
        name: name,
        condition: condition,
        power: 100,
        wins: 0
    } 

    this.listOfParticipants.push(newPart);
    return  `The ${name} was successfully registered.`;

    }

    unregisterParticipant (name) {

        let findPart = this.listOfParticipants.find(part => part.name === name);

        if (!findPart) {
            throw new Error(`The ${name} is not registered in the camp.`); 
        } else {
            this.listOfParticipants.splice(this.listOfParticipants.indexOf(findPart), 1);
            return `The ${name} removed successfully.`;

        }

    }

    timeToPlay (typeOfGame, participant1, participant2) {

     

        if (typeOfGame === "WaterBalloonFights") {
            if (!Object.values(this.listOfParticipants.includes(participant1 || participant2))) {
                throw new Error (`Invalid entered name/s.`)
            } 
                let part1 = this.listOfParticipants.find(part=> part.name === participant1);
                let part2 = this.listOfParticipants.find(part=> part.name === participant2);

             
                if (part1.condition !== part2.condition) {
                    throw new Error(`Choose players with equal condition.`);
                }

                if (part1.power > part2.power) {
                    part1.wins++;
                    return `The ${part1.name} is winner in the game ${typeOfGame}.`
                } else if  (part1.power < part2.power) {
                    part2.wins++;
                    return `The ${part2.name} is winner in the game ${typeOfGame}.`

                }
            

        } else {
            if (!Object.values(this.listOfParticipants.includes(participant1)) ){
                throw new Error (`Invalid entered name/s.`)
            }
            
            let part1 = this.listOfParticipants.find(part => part.name = participant1)
            part1.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
        
     

    }


    toString () {
        let output = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];

        let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);

        this.listOfParticipants.forEach(part => {

            output.push(`${part.name} - ${part.condition} - ${part.power} - ${part.wins}`)

            
        });

        return output.join('\n')
    }




}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
'WaterBalloonFights', 'Sara Dickinson', 'Petar Petarson'
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200)); console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay('WaterBalloonFights', 'Sara Dickinson', 'Petar Petarson'));

console.log(summerCamp.toString());
