/*Chennai : population = 4646732 
           literacyRate = 90.20
           language = Tamil
      
  Bangaluru : population = 8443675
           literacyRate = 88.71
           language = 'kannada' 
           
    mumbai : population = 12444k2373
           literacyRate = 89.73
           language = 'Marathi' 
    Delhi: population = 16787941
           literacyRate = 86.20
           language = 'Hindi'                 
           
           
           */

      const button = document.querySelector('button');
      let resultdiv = document.createElement('div')

        resultdiv.id="result"
        document.getElementById('wrapper').appendChild(resultdiv);
      
      //event listener

      button.addEventListener('click',displayStats)

      function displayStats(){

        const input = document.getElementById('input');
        const city = input.options[input.selectedIndex].value;



        let population =0, literacyRate=0, language=0;
        switch(city){
           case'Bengaluru': 

            population = 8443675
           literacyRate = 88.71
           language = 'kannada' 
           break;

           case'Chennai':
           population = 4646732 
           literacyRate = 90.20
           language = 'Tamil'
           break;
           case'Mumbai':
           population = 124442373
           literacyRate = 89.73
           language = 'Marathi'
           break;
           case'Delhi':
           population = 16787941
           literacyRate = 86.20
           language = 'Hindi' 
           break;

           default:
            "Please select valuable city"
           
        }

        let text= `The Indian city of ${city} has a population of ${population}. Language spoken is  ${language} and literacy rate is ${literacyRate}%`

        
        document.getElementById('result').innerHTML = text;

     



      }
