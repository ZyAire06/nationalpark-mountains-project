
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

                   // display it in a table using map method and add remove method

                    // creating element for the tbody tag 
                    let tBodyEle = document.querySelector('tbody');

                    // let tBodyEle = document.createElement('tbody');
                    
                   
                    
                    //creating function that will display the table data of the nationalParksArray
                    function onAddnationalPaarks (){
                        
                        
                        // declaring parksData to obtain the values in each object in the nationalParksArray
                     
                            //inserting the the table row and data with parksData
                            tBodyEle.innerHTML += `
                            <tr>
                                <td>${nationalParksArray[i].LocationID}</td>
                                <td>${nationalParksArray[i].LocationName}</td>
                                <td>${nationalParksArray[i].Address}</td>
                                <td>${nationalParksArray[i].City}</td>
                                <td>${nationalParksArray[i].State}</td>
                                <td>${nationalParksArray[i].ZipCode}</td>
                                <td>${nationalParksArray[i].Phone}</td>
                                <td>${nationalParksArray[i].Fax}</td>
                                <td>${nationalParksArray[i].Visit}</td>
                                <td>${nationalParksArray[i].Latitude}</td>
                                <td>${nationalParksArray[i].Longitude}</td>
                                <td>${nationalParksArray[i].Location.coordinates}</td>
                

                            </tr>
                        `;

                        //THINGS TO COMEBACK TOO AFTER I'M FINISH PRODUCT 
                        // add remove method when clicking another state(button maybe)
                        //fix visit when 
                       
                    }
                
                    onAddnationalPaarks();
                }
               
            }
            
            
 
        }
        
  
    // I want to create an onchange event to search got the parktype(parkTypeData.js)
  
      
         let numParkTypes = parkTypesArray.length;

        for(let i=0; i<numParkTypes; i++){
        
            let parksTypesOptions = new Option(parkTypesArray[i]);
            // console.log(parksTypesOptions);

            let types = document.getElementById('typesOfParks');
            types.addEventListener('change', () => {
                // I want to use the map method to find the parktype in the Locationsname 
                     

                    let name = nationalParksArray[i].LocationName;
                    if (name.includes(types.value,1)) {
                        console.log(`it works `);
                    console.log (nationalParksArray[i]);
                    let tBodyEle = document.querySelector('tbody')
                    tBodyEle.innerHTML += `
                    <tr>
                    <td>${nationalParksArray[i].LocationID}</td>
                    <td>${nationalParksArray[i].LocationName}</td>
                    <td>${nationalParksArray[i].Address}</td>
                    <td>${nationalParksArray[i].City}</td>
                    <td>${nationalParksArray[i].State}</td>
                    <td>${nationalParksArray[i].ZipCode}</td>
                    <td>${nationalParksArray[i].Phone}</td>
                    <td>${nationalParksArray[i].Fax}</td>
                    <td>${nationalParksArray[i].Visit}</td>
                    <td>${nationalParksArray[i].Latitude}</td>
                    <td>${nationalParksArray[i].Longitude}</td>
                    <td>${nationalParksArray[i].Location.coordinates}</td>
        

                    </tr>
                `;

                }
                
                
                  
            })

            types.appendChild(parksTypesOptions);
 
            
                //create a table displaying the vaules of the array using map and remove method
             
               
                 
           
        
    
}
    
    // I want that to be able to filter through the nationalParksData.js as well 

}
