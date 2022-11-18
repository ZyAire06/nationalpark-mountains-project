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
                let divEle = document.querySelector('div');
               /*  let pEle = document.createElement('p');
                pEle.textContent = `${mounNames.desc}`;
                divEle.appendChild(pEle); */
                 divEle.innerHTML += `
                    
                    <h2 class = 'mountname'>${mounNames.name}</h2>
                    <p class =' descripOfMount'>${mounNames.desc}</p>
                    <img src="/assests/images/${mounNames.img}" alt= "mountain pics" class = "imgs">
                    <br>
                    <tr class ="table">
                    <td>${mounNames.elevation}</td>
                    <td>${mounNames.effort}</td>
                    <td>${mounNames.coords.lat}</td>
                    </tr>

                    
                    `; 
                
                
            }
        });
      

        
    
    });
    

}