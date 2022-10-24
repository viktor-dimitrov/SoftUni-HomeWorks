class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle( articleModel, articleName, quantity ) {
        let lowerCaseModel = articleModel.toLowerCase();
        let output ="";
        if (!Object.keys(this.possibleArticles).includes(lowerCaseModel)){
            throw new Error ("This article model is not included in this gallery!");
        }

        let findArt = this.listOfArticles.find(art=> art.articleName === articleName);

        if (!findArt) {
            let newArt = {};
            newArt.articleName = articleName;
            newArt.articleModel = lowerCaseModel;
            newArt.quantity = Number(quantity);
            newArt.artPoints = Number(this.possibleArticles[lowerCaseModel])
            this.listOfArticles.push(newArt);
            output = `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        } else {
            if (findArt.articleModel === lowerCaseModel && findArt.articleName === articleName) {
                findArt.quantity += Number(quantity);
                output = `Successfully added article ${articleName} with a new quantity- ${quantity}.`
            } else {
                let newArt = {};
            newArt.articleName = articleName;
            newArt.articleModel = lowerCaseModel;
            newArt.quantity = Number(quantity);
            newArt.artPoints = this.possibleArticles[lowerCaseModel]
            this.listOfArticles.push(newArt);
            output = `Successfully added article ${articleName} with a new quantity- ${quantity}.`
            }
        }
       
        return output
    }

    inviteGuest (guestName, personality) {

        let points = 50;

        if (personality === 'Vip') {
            points = 500;
        } else if (personality === "Middle") {
            points = 250;
        }
        let findGuest = this.guests.find(guest=> guest.guestName === guestName);

        if(findGuest){
            throw new Error (`${guestName} has already been invited.`);
        }
        let newGuest = {guestName: guestName, points: points, purchaseArticle: 0};
        this.guests.push(newGuest)


       return  `You have successfully invited ${guestName}!`;
    }

    buyArticle ( articleModel, articleName, guestName) {

        let lowerCaseModel = articleModel.toLowerCase();

        let findArt = this.listOfArticles.find(art => art.articleName === articleName);
        let findGuest = this.guests.find(guest => guest.guestName === guestName);
  

        if(!findArt || findArt.articleModel != articleModel) {
            throw new Error ("This article is not found.");
        }

        if (findArt.quantity == 0) {
            return `The ${articleName} is not available.`
        }

        if (!findGuest) {
            throw new Error ("This guest is not invited.");
        }

        if (findGuest.points < findArt.artPoints) {
            return "You need to more points to purchase the article."
        } else {
            findGuest.points -= findArt.artPoints;
            findGuest.purchaseArticle ++;
            findArt.quantity --;
            return `${guestName} successfully purchased the article worth ${findArt.artPoints} points.`
        }
    }

    showGalleryInfo (criteria) {

        let output = []
        if (criteria === "article") {
          output.push("Articles information:");
          this.listOfArticles.forEach(element => {
            output.push(`${element.articleModel} - ${element.articleName} - ${element.quantity}`)
          });
        }
        if (criteria === "guest") {
            output.push("Guests information:");
            this.guests.forEach(element => {
              output.push(`${element.guestName} - ${element.purchaseArticle}`)
            });
          }

          return output.join('\n')
    } 



}


let art = new ArtGallery("Curtis Mayfield");

console.log(art.addArticle('picture', 'Mona Liza', 3));
console.log(art.addArticle('Item', 'Ancient vase', 2));
console.log(art.addArticle('picture', 'Mona Liza', 1));

art.inviteGuest('John', 'Vip');
art.inviteGuest('Peter', 'Middle');

art.buyArticle('picture', 'Mona Liza', 'John');
art.buyArticle('item', 'Ancient vase', 'Peter');


console.log(art.showGalleryInfo('article'))