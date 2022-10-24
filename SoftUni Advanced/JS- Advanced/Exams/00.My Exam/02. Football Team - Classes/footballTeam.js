class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers){

        let names = [];

        footballPlayers.forEach(line => {
            let [name, age, playerValue] = line.split('/');

            let findPlayer = this.invitedPlayers.find(player => player.name === name);

            if(!findPlayer) {
                this.invitedPlayers.push({name: name, age: Number(age), playerValue: Number(playerValue)});
                names.push(name)
            } else {
                if(findPlayer.playerValue < playerValue) {
                    findPlayer.playerValue = playerValue;
                }
            } 
        });
        
       return `You successfully invite ${names.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        let findPlayer = this.invitedPlayers.find(player => player.name === name);

        if(!findPlayer) {
            throw new Error (`${name} is not invited to the selection list!`);
        } else {
            let priceDifference = Math.abs(Number(playerOffer) - findPlayer.playerValue);

            if (findPlayer.playerValue > Number(playerOffer)) {
                throw new Error (`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
            } else {
                findPlayer.playerValue = "Bought";
                return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
            }
        }
    }

    ageLimit(name, age) {
        let findPlayer = this.invitedPlayers.find(player => player.name === name);

        if(!findPlayer){
            throw new Error (`${name} is not invited to the selection list!`);
        } else {
            if (age <= findPlayer.age) {
                return `${name} is above age limit!`;
            } else {
                let ageDifference = age - findPlayer.age;
                if (ageDifference < 5) {
                    return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
                } else {
                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
                }
            }
        }
    }

    transferWindowResult(){
        let outputText = ["Players list:"];

        let sortedList = this.invitedPlayers.sort((a,b) => a.name.localeCompare(b.name));
        sortedList.forEach(player => {
            outputText.push(`Player ${player.name}-${player.playerValue}`);
        });
        return outputText.join('\n');
    }

}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["zylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

console.log(fTeam.transferWindowResult());


