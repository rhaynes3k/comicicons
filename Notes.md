



filteredList = () => {
   this.props.hero.filter( (c) => c.name.includes(this.state.text))



   displayState: state.heros.filter( (h) => h.name.includes(action.payload))}
 }else{
   return state
 }



 The .map() method can of course be used in far more sophisticated cases like mapping over strings to creates promises that are run in parallel.

 const urlsToFetch = [
   'https://swapi.dev/api/people/',
   'https://stats.nba.com/stats/playerindex',
   'https://api.github.com/users/benmvp/repos',
 ]
 const fetchPromises = urlsToFetch.map((url) => fetchJson(url))

 Promise.all(fetchPromises).then(
   ([starWarsPeople, nbaPlayers, myRepositories]) => {
     // Use fetched data
   },
 )
 Check out my past post on Exploring the JavaScript Promise API methods  (https://www.benmvp.com/blog/exploring-javascript-promise-api-methods/) to learn more about how Promise.all and other methods work.





 # response = RestClient.get('https://superheroapi.com/api.php/10225229547146375/search/a')
 # chrArr = response.map{|r|JSON.parse(r)}
 # chrArr.map{|n|n.map{|p|charsArray.push(p)}}
 # charsArray['results'].each do |c|
 charsArray['results'].each do |c|
   Character.create(siteid: c['id'], name: c['name'], alignment: c['biography']['alignment'], publisher: c['biography']['publisher'], gender: c['appearance']['gender'], image: c['image']['url'], intelligence: c['powerstats']['intelligence'], strength: c['powerstats']['strength'], speed: c['powerstats']['speed'], durability: c['powerstats']['durability'], power: c['powerstats']['power'], combat: c['powerstats']['combat'], full_name: c['biography']['full-name'], first_appearance: c['biography']['first-appearance'], occupation: c['work']['occupation'], affiliations: c['connections']['group-affiliation'], relatives: c['connections']['relatives'])
 end



 fetch(`${this.endpoint}/colors`,
       {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         Accept: 'application/json'
           },
         body: JSON.stringify(colorPic)
       })
         .then(response => response.json())
         .then(result => {
           colorService.getColor()
         })
         .catch((error) => {
         console.log('Error:', error);
         })
   }
