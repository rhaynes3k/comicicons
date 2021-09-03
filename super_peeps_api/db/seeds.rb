# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# BASE_URL = 'https://superheroapi.com/api.php/10225229547146375'
#
# Index_a = BASE_URL + '/search/a'

response = RestClient.get('https://superheroapi.com/api.php/10225229547146375/search/a')
charsArray = JSON.parse(response)
charsArray['results'].each do |c|
  Character.create(siteid: c['id'], name: c['name'], alignment: c['biography']['alignment'], publisher: c['biography']['publisher'], image: c['image']['url'], intelligence: c['powerstats']['intelligence'], strength: c['powerstats']['strength'], speed: c['powerstats']['speed'], durability: c['powerstats']['durability'], power: c['powerstats']['power'], combat: c['powerstats']['combat'], full_name: c['biography']['full-name'], first_appearance: c['biography']['first-appearance'], occupation: c['work']['occupation'], affiliations: c['connections']['group-affiliation'], relatives: c['connections']['relatives'])
  binding.pry
end
