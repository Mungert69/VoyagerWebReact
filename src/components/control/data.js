export const Control_Trip_Flights_Airline_Data = [
  { value: 'a1', label: 'Air France', color: '#253858' },
  { value: 'a2', label: 'virgin', color: '#253858' },
  { value: 'a3', label: 'britsh airways', color: '#253858' },
];

export const Control_Trip_Flights_Airport_Data = [
  { value: 'a1', label: 'London Gatwick', color: '#0052CC' },
  { value: 'a2', label: 'London Stansted', color: '#0052CC' },
  { value: 'a3', label: 'London Luton', color: '#0052CC' },
];

export const Control_Trip_Flights_Departure_Data = [
  { value: 'a1', label: 'WEDNESDAY 2 JUNE 2019 12:30', color: '#5243AA' },
  { value: 'a2', label: 'THURSDAY 3 JUNE 2019 16:30', color: '#5243AA' },
  { value: 'a3', label: 'FRIDAY 4 JUNE 2019 11:30', color: '#5243AA' },
];

export const Control_Trip_Flights_Return_Data = [
  { value: 'a1', label: 'MONDAY 5 JUNE 2019 12:30', nighttotal:'5 NIGHTS', nightaddremove:'-3', color: '#FF5630' },
  { value: 'a1', label: 'TUESDAY 6 JUNE 2019 12:30',  nighttotal:'5 NIGHTS',nightaddremove:'-2', color: '#FF5630' },
  { value: 'a1', label: 'WEDNESDAY 7 JUNE 2019 12:30',  nighttotal:'5 NIGHTS',nightaddremove:'-1', color: '#FF5630' },
  { value: 'a1', label: 'THURSDAY 8 JUNE 2019 12:30',  nighttotal:'5 NIGHTS',nightaddremove:'', color: '#36B37E' },
  { value: 'a1', label: 'FRIDAY 9 JUNE 2019 12:30',  nighttotal:'5 NIGHTS',nightaddremove:'+1', color: '#00B8D9' },
  { value: 'a1', label: 'SATERDAY 11 JUNE 2019 12:30',  nighttotal:'5 NIGHTS',nightaddremove:'+2', color: '#00B8D9' },
  { value: 'a1', label: 'SUNDAY 12 JUNE 2019 12:30',  nighttotal:'5 NIGHTS',nightaddremove:'+3', color: '#00B8D9' },
];




export const colourOptions = [
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
  
  export const flavourOptions = [
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
  

  export const Trip_Flights_Return = [
    { value: 'b1', label: 'Blue', color: '#0052CC' },
    { value: 'b2', label: 'Slate', color: '#253858' },
  ];
  
  export const optionLength = [
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
  
  export const groupedOptions = [
    {
      label: 'group1',
      options: colourOptions,
      
    },
    {
      label: 'group2',
      options: flavourOptions,
    },
  ];
  