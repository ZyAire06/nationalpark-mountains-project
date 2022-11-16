// importing the mountainsData.js 
import {mountainsArray} from "./scripts-data/mountainData.js";


window.onload = () =>{
    // creating a dropdown of the mountains name 

    mountainsArray.map((mounNames) =>{
        console.log(mounNames.name)
        let namesOption = new Option(mounNames.name);
        let optionEle = document.getElementById('mountainNames');
        optionEle.appendChild(namesOption);
        optionEle.addEventListener('change', () => {
            if(mounNames.name == optionEle.value ){
                console.log(`it works`);
                console.log(mounNames);
                let divEle = document.getElementById('displayMountInfo');

                 () => {
                   
                    divEle.innerHTML += `
                    <tr>
                    <h2>${mounNames.name}</h2>
                    <p>${mounNames.desc}</p>
                    <img>${mounNames.img}</img>

                    
                    `;
                }
                
            }
        });
      

        
    
    });
    

}