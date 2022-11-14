window.onload= ()=>{
    const states = [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    let numsStates = states.length;

    for(let i =0; i < numsStates; i++){
        let statesOptions = new Option(states[i]);
        // console.log(statesOptions);

        let statesTag = document.getElementById('states');
        statesTag.addEventListener('change', parkTypes);
        statesTag.appendChild(statesOptions);


        function  parkTypes(){
            // console.log('it works');
            
            // to link the parkTypData.js into this function 
            import {parkTypesArray} from './scripts-data/parkTypeData';
            val = parkTypes();
            
            let types = document.getElementById('typesOfParks');
            types/addEventListener('change', nationalParks)
            types.appendChild();
                
        

        
        }
        function nationalParks(){

        }
    }
}