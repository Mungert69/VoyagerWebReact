import _ from "lodash";

function FormatFlightData() {

    this.airlines = [];
    this.airports = [];
    this.inDates = [];
    this.outDates = [];

    const airlineTemplate =
        { value: '', label: '', color: '#253858' };

    const airportTemplate =
        { value: '', label: '', color: '#0052CC' };

    const outDateTemplate =
        { value: '', label: '', color: '#5243AA' };

    const inDateTemplate =
        { value: '', label: '', nighttotal: '', nightaddremove: '', color: '#FF5630' };

   
    this.setAirlines = function (data) {
        this.airlines = [];
        data.map( (row) => {
           
            var airline = airlineTemplate;
            airline.label = row.airline;
            airline.value = row.supplierID;
            this.airlines.push(airline);

         } );
        
        
    }
   

    this.setAirports = function (data) {
        this.airports = [];
        data.map((row) => {
           
            var airport = airportTemplate;
            airport.label = row.airportName;
            airport.value = row.airportName;
            
            this.airports.push(airport);

         } );
      
}
    
    this.setOutDates = function (data){
        this.outDates = [];
        data.map((row) => {
           
            var outDate = outDateTemplate;
    outDate.label = row.flightDepartureShortDate;
    outDate.value = row.outFlightID;
           
            this.outDates.push(outDate);

         } );
       
      

    } 

   
    this.setInDates = function (data){
        this.inDates = [];
        data.map( (row) => {
           
            var inDate = inDateTemplate;
            inDate.label = row.inFlightID;
            inDate.value = row.flightDepartureShortDate;
            inDate.nighttotal = '5 NIGHTS';
            inDate.nightaddremove = '-3';
            inDate.color = '#FF5630';
           
           
            this.inDates.push(inDate);

         } );
       
    } 



    this.colourOptions = [
        { value: 'a1', label: 'Ocean', color: '#00B8D9', isFixed: true },
        { value: 'a2', label: 'Blue', color: '#0052CC', disabled: true },
        { value: 'a3', label: 'Purple', color: '#5243AA' },
        { value: 'a4', label: 'Red', color: '#FF5630', isFixed: true },
        { value: 'a5', label: 'Orange', color: '#FF8B00' },
        { value: 'a6', label: 'Yellow', color: '#FFC400' },
        { value: 'a7', label: 'Green', color: '#36B37E' },
        { value: 'a8', label: 'Forest', color: '#00875A' },
        { value: 'a9', label: 'Slate', color: '#253858' },
        { value: 'a10', label: 'Silver', color: '#666666' },
        { value: 'a11', label: 'Slate', color: '#253858' },
        { value: 'a12', label: 'Silver', color: '#666666' },
    ];

    this.flavourOptions = [
        { value: 'b1', label: 'Ocean', color: '#00B8D9', isFixed: true },
        { value: 'b2', label: 'Blue', color: '#0052CC', disabled: true },
        { value: 'b3', label: 'Purple', color: '#5243AA' },
        { value: 'b4', label: 'Red', color: '#FF5630', isFixed: true },
        { value: 'b5', label: 'Orange', color: '#FF8B00' },
        { value: 'b6', label: 'Yellow', color: '#FFC400' },
        { value: 'b7', label: 'Green', color: '#36B37E' },
        { value: 'b8', label: 'Forest', color: '#00875A' },
        { value: 'b9', label: 'Slate', color: '#253858' },
        { value: 'b10', label: 'Silver', color: '#666666' },
        { value: 'b11', label: 'Slate', color: '#253858' },
        { value: 'b12', label: 'Silver', color: '#666666' },
    ];


    this.tripFlightsReturn = [
        { value: 'b1', label: 'Blue', color: '#0052CC' },
        { value: 'b2', label: 'Slate', color: '#253858' },
    ];

    this.optionLength = [
        { value: 1, label: 'general' },
        {
            value: 2,
            label:
                'Evil is the moment when I lack the strength to be true to the Good that compels me.',
        },
        {
            value: 3,
            label:
                "It is now an easy matter to spell out the ethic of a truth: 'Do all that you can to persevere in that which exceeds your perseverance. Persevere in the interruption. Seize in your being that which has seized and broken you.",
        },
    ];

    // let bigOptions = [];
    // for (let i = 0; i < 10000; i++) {
    // 	bigOptions = bigOptions.concat(colourOptions);
    // }

    this.groupedOptions = [
        {
            label: 'group1',
            options: this.colourOptions,

        },
        {
            label: 'group2',
            options: this.flavourOptions,
        },
    ];

}

export default FormatFlightData;
