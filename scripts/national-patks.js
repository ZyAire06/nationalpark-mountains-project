
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
            // console.log(statesOptions.innerText);

            // assigning the states if as statesTag variable 
            let statesTag = document.getElementById('states');

            // adding event listener to stateTag to start the function 
            statesTag.addEventListener('change', searchNationalParks);

            // pushing statesTag into the document(html)
            statesTag.appendChild(statesOptions);

              // I want that to be able to filter its way through nationalParksData.js 

              
            function searchNationalParks () {
                console.log(nationalParksArray[i].State, statesTag.value);

                if (nationalParksArray[i].State == statesTag.value) {
                    console.log(`it works `);
                   console.log (nationalParksArray[i]);
                   // trying to push the value in the each obejct  that's inside of nationalParksArray\

                   // assigning insertParkInfo to the div id parksInfo
                   let insertParkInfo = document.getElementById('parksInfo');

                   // creating p element in javascript 
                   const pElement = document.createElement('p');

                   //want to push the objects value using
                   const myArray = Object.values(nationalParksArray[i]);
                   insertParkInfo.appendChild(pElement).innerText = myArray;

                   // display it in a table using map method and add remove method
                   let displayNationalParks = nationalParksArray.map(

                    table = `<tr>`
                   )
                
                }
               
            }
            
            
 
        }
        
  
    // I want to create an onchange event to search got the parktype(parkTypeData.js)
  
      
        let numParkTypes = parkTypesArray.length;

        for(let i=0; i<numParkTypes; i++){
        
            let parksTypesOptions = new Option(parkTypesArray[i]);
            // console.log(parksTypesOptions);

            let types = document.getElementById('typesOfParks');
            types.addEventListener('change', searchByParkTypes)

            types.appendChild(parksTypesOptions);

            function searchByParkTypes() {
              // I want to use the map method to find the parktype in the Locationsname 

              //create a table displaying the vaules of the array using map and remove method

               
            }
           
        } 
    
    
    // I want that to be able to filter through the nationalParksData.js as well 

}
