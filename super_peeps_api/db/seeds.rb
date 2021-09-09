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
charsArr1 = []
charsArr2 = []
charsArr3 = []
urls = ['https://superheroapi.com/api.php/10225229547146375/search/a', 'https://superheroapi.com/api.php/10225229547146375/search/e', 'https://superheroapi.com/api.php/10225229547146375/search/i', 'https://superheroapi.com/api.php/10225229547146375/search/o', 'https://superheroapi.com/api.php/10225229547146375/search/u', 'https://superheroapi.com/api.php/10225229547146375/search/y']
chr = urls.map{|url| RestClient.get(url)}
charsArr1 = chr.map{|p|JSON.parse(p)}
charsArr1[0]['results'].map{|c|charsArr2.push(c)}
charsArr1[1]['results'].map{|b|charsArr2.push(b)}
charsArr1[2]['results'].map{|b|charsArr2.push(b)}
charsArr1[3]['results'].map{|b|charsArr2.push(b)}
charsArr1[4]['results'].map{|b|charsArr2.push(b)}
charsArr1[5]['results'].map{|b|charsArr2.push(b)}
charsArr3 = charsArr2.uniq
charsArr3.each do |c|
Character.create(name: c['name'], alignment: c['biography']['alignment'], publisher: c['biography']['publisher'], gender: c['appearance']['gender'], image: c['image']['url'], intelligence: c['powerstats']['intelligence'], strength: c['powerstats']['strength'], speed: c['powerstats']['speed'], durability: c['powerstats']['durability'], power: c['powerstats']['power'], combat: c['powerstats']['combat'], full_name: c['biography']['full-name'], first_appearance: c['biography']['first-appearance'], occupation: c['work']['occupation'], affiliations: c['connections']['group-affiliation'], relatives: c['connections']['relatives'])
end
