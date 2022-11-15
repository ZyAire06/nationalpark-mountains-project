
 // overall, this file should be able to display the national parks infomation through thr nationalParkData.js

     // importing the arrays from different data files 

     //location file
     import {locationsArray} from "./scripts-data/locationData.js";
    //park types file 
    import {parkTypesArray} from "./scripts-data/parkTypeData.js";
    //national park file 
    import {nationalParksArray} from "./scripts-data/nationalParkData.js";


window.onload = () =>{



    
        // creating a dropdown for the state array

         // assigning a variable for the the length of the location array
        let numsStates = locationsArray.length;


        
        for(let i =0; i < numsStates; i++){

            // assign statesOption to create a dropdown of option from the locationsArray
            let statesOptions = new Option(locationsArray [i]);
            // console.log(statesOptions);

            // assigning the states if as statesTag variable 
            let statesTag = document.getElementById('states');

            // adding event listener to stateTag to start the function 
            statesTag.addEventListener('change', searchNationalParks);

            // pushing statesTag into the document(html)
            statesTag.appendChild(statesOptions);


              // I want that to be able to filter its way through nationalParksData.js 

              nationalParksArray.filter(searchNationalParks);

              function searchNationalParks (nationalParksArray, statesTag){
                  if(  nationalParksArray.State == statesOptions[i]){
                      console.log(`it works`);
                  }
                 
              }
         
        
        }
        
      
    }
  
  
    // I want to create an onchange event to search got the parktype(parkTypeData.js)
/*     function  parkTypes(){
        // console.log('it works');
      
        let numParkTypes = parkTypesArray.length;
        for(let i=0; i<numParkTypes; i++){
        
            let parksTypesOptions = new Option(parkTypesArray[i]);
            // console.log(parksTypesOptions);

            let types = document.getElementById('typesOfParks');
            // types.addEventListener('change', )
            types.appendChild(parksTypesOptions);

           
        } */

    
    // I want that to be able to filter through the nationalParksData.js as well 

    
