class SmartHike{
    constructor (name) {
        this.username = name;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;    
    }

    addGoal (peak, altitude) {
        if (Object.keys(this.goals).includes(peak)) {
            return `${peak} has already been added to your goals`
        }
        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`
    }
    hike (peak, time, difficultyLevel) {
        if(!Object.keys(this.goals).includes(peak)) {
            throw new Error (`${peak} is not in your current goals`);
        }
        if (this.resources === 0) {
            throw new Error ("You don't have enough resources to start the hike")
        }

        let neededRes =  time * 10;

        if ( this.resources < neededRes) {
            return "You don't have enough resources to complete the hike";
        } 

        this.resources -= neededRes;
        let hikeInfo = new Map ()
        hikeInfo.set('peak', peak)
        hikeInfo.set("time", time)
        hikeInfo.set("difficultyLevel", difficultyLevel)
        this.listOfHikes.push(hikeInfo);
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    };

    rest (time) {
        let addRes = time * 10;

        if ((this.resources + addRes) >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            this.resources += addRes;
            return `You have rested for ${time} hours and gained ${time*10}% resources`
            
        }
    }

    showRecord (criteria) {

       
        if(this.listOfHikes.length < 1) {
            return `${username} has not done any hiking yet`
        }

        let output = []

        if (criteria !== 'all') {
        this.listOfHikes.forEach(element => {
            if (element.get('difficultyLevel') !== criteria) {
               output.push(`${this.username} has not done any ${criteria} hiking yet`)
            }
            
        });
        if (output.length < 1) {
            let sorted = this.listOfHikes.filter(el=> el.get('difficultyLevel') === criteria).sort((a, b) => b.get('time') - a.get('time'));
            
             return `${this.username}'s best ${criteria} hike is ${sorted[0].get('peak')} peak, for ${sorted[0].get('time')} hours`
        }


        } else {
            output.push("All hiking records:");
            this.listOfHikes.forEach(element => {
                output.push(`${this.username} hiked ${element.get('peak')} for ${element.get('time')} hours`)
            })
            
        }

      
        

        return output.join('\n')
    }


}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 5, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));

