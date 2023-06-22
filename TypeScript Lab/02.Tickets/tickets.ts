

class Ticket {
    destination: string;
    price: string;
    status: string;
    constructor(destination: string, price: string, status:string){
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

    function ticketsSorting (ticketsList: string[], sortingCriteria: string ) :void{

        let splitedArray = ticketsList.map(x => x.split('|'));
        let objArray: Ticket[] = [];

        splitedArray.forEach(function (element) {

                let ticket = new Ticket(element[0], element[1], element[2])
                objArray.push(ticket)
     
      })
        
     const criteria: string = sortingCriteria;

       const sortedArray: Ticket[] = objArray.sort( (a, b) => a[criteria].localeCompare(b[criteria]));

       
     console.log(sortedArray);
    
    }


    ticketsSorting([
'Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'
],
'destination')


    ticketsSorting([
'Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'
],
'status')

