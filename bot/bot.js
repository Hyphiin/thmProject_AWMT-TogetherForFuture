const fs  = require('fs');
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true })

function run(){
    let urls = [
        'https://fridaysforfuture.de/allefuer1komma5/?pk_campaign=nomoreemptypromises'
    ]
    //seems like you have to change the URL every week (maybe when covid is over, there is a url for every friday)
    //ask fridaysforfuture to get there json with all the protest places
    nightmare
     .goto(urls[0])
     .click('.su-spoiler-title')
     .wait(3000)
     .evaluate(() => {
         //let table = document.getElementsByClassName('wp-block-table')
         let cities = document.getElementsByTagName('td')  //gets all the table rows
         //console.log(table)
         
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

