function tickets (arr, sortParam) {

    class Ticket {
        constructor (dest, prc, stat) {
            this.destination = dest;
            this.price = Number(prc)
            this.status = stat
        }
    }

    let myArray = [];

    for (let el of arr) {
        let [dest, prc, stat] = el.split('|');
        myArray.push(new Ticket(dest, prc, stat));
    }

    let sorting = {
        destination: myArray.slice().sort((a,b)=> (a.destination).localeCompare(b.destination)),
        price: myArray.slice().sort((a,b) => a.price - b.price),
        status: myArray.slice().sort((a,b) => (a.status).localeCompare(b.status))
    };
    

return (sorting[sortParam]);
}



tickets (['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price')