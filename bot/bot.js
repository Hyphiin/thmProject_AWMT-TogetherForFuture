const fs  = require('fs');
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true })

function run(){
    let urls = [
        'https://fridaysforfuture.de/allefuer1komma5/?pk_campaign=nomoreemptypromises'
    ]
    
    nightmare
     .goto(urls[0])
     .click('.su-spoiler-title')
     .wait(3000)
     .evaluate(() => {
         let table = document.getElementsByName('tbody')
         let cities = document.getElementsByTagName('td')
         console.log(table)
         
        let results = []

        
        
        for(var i= 0; i < cities.length; i++){
            let start = cities[i].innerHTML.search('</b>')+5;
            let end = cities[i].innerHTML.search('<a');
            let time = cities[i].innerHTML.slice(start, end);
            var url = '';
            if(cities[i].children.length > 1){
                url = cities[i].children[1].getAttribute('href'); 
            }
            
            
        results.push( {
            index: i,
            city: cities[i].children[0].innerText,
            place: time,
            link: url,
         });
        }
        
        
        return results;
       })
       .end()
       .then((results) => {
        fs.writeFileSync(__dirname+'/result/places.json', JSON.stringify(results));
     })
     .catch(error => {
     console.error('Search failed:', error)
     })
}
run()

