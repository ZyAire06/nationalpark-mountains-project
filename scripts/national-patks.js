




 // overall, this file should be able to display the national parks infomation through thr nationalParkData.js

     // importing the arrays from different data files 

     //location file
     import {locationsArray} from "./scripts-data/locationData.js";
    //park types file 
    import {parkTypesArray} from "./scripts-data/parkTypeData.js";
    //national park file 
    import {nationalParksArray} from "./scripts-data/nationalParkData.js";


window.onload = () =>{

    
    


        locationsArray.map((locArray) => {
            let statesOptions = new Option(locArray);
            console.log(statesOptions.innerText)
            let statesTag = document.getElementById('states');
            statesTag.appendChild(statesOptions);
            statesTag.addEventListener('change', searchParkArray)

        })
     
        function searchParkArray(){
          
            const newparkArray = [];

            let statesValue = document.querySelector('select');
            // console.log(statesValue)
                 let parkArray = nationalParksArray.filter((items) =>{
                    return items.State == statesValue.value;
                    
                })
                // console.log(parkArray);
                // console.log(nationalParksArray.value)

                let numParkArray = parkArray.length;

                for(let i =0; i<numParkArray; i++){
               
                    
                    let tBodyEle = document.querySelector('tbody');

                    tBodyEle.innerHTML += `
                    <tr>
                        <td>${parkArray[i].LocationID}</td>
                        <td>${parkArray[i].LocationName}</td>
                        <td>${parkArray[i].Address}</td>
                        <td>${parkArray[i].City}</td>
                        <td>${parkArray[i].State}</td>
                        <td>${parkArray[i].ZipCode}</td>
                        <td>${parkArray[i].Phone}</td>
                        <td>${parkArray[i].Fax}</td>
                        <td>${parkArray[i].Visit}</td>
                        <td>${parkArray[i].Latitude}</td>
                        <td>${parkArray[i].Longitude}</td>
                        <td>${parkArray[i].Location.coordinates}</td>
        
    
                    </tr>
                `;
                if(parkArray[i]){
                    newparkArray.splice(0, numParkArray)
                    newparkArray.push(tBodyEle.innerHTML)
                    console.log(newparkArray)
            ;
          
            
            }
        }

        }

    // I want to create an onchange event to search got the parktype(parkTypeData.js)
  
      
        /*  let numParkTypes = parkTypesArray.length;

        for(let i=0; i<numParkTypes; i++){
        
            let parksTypesOptions = new Option(parkTypesArrayi]);
            // console.log(parksTypesOptions);[

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
                `; */

                }
                
                
                  
            

            types.appendChild(parksTypesOptions);
 
            
                //create a table displaying the vaules of the array using map and remove method
             
               
                 
           
        parkTypesArray.map((pkTypesArray) => {
            let  parksTypesOptions = new Option(pkTypesArray);
            console.log( parksTypesOptions.innerText)
            let statesTag = document.getElementById('typesOfParks');
            statesTag.appendChild( parksTypesOptions);
            statesTag.addEventListener('change', () =>{
                let typesValue = document.getElementById('typesOfParks');
                     parkTypesArray.filter((items) =>{
                    return items.LocationName == typesValue.value;
            })

            let numParkArray = nationalParksArray.length;
            for(let i =0; i<numParkArray; i++){
               
                    
                let tBodyEle = document.querySelector('tbody');

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
            `;}

        });
     
    });
        
        
    // I want that to be able to filter through the nationalParksData.js as well 


