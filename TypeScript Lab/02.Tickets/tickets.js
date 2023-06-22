var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function ticketsSorting(ticketsList, sortingCriteria) {
    var splitedArray = ticketsList.map(function (x) { return x.split('|'); });
    var objArray = [];
    splitedArray.forEach(function (element) {
        if (objArray.some(function (x) { return x.destination === element[0]; })) {
            return;
        }
        else {
            var ticket = new Ticket(element[0], element[1], element[2]);
            objArray.push(ticket);
        }
    });
    var criteria = sortingCriteria;
    var sortedArray = objArray.sort(function (a, b) { return a[criteria].localeCompare(b[criteria]); });
    console.log(sortedArray);
}
//output
//     [ Ticket { destination: 'Boston',
// price: 126.20,
// status: 'departed' },
// Ticket { destination: 'New York City',
// price: 95.99,
// status: 'available' },
ticketsSorting([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
ticketsSorting([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status');
