const marvel_heros = ["thor", "Ironman", "Spiderman"];
const dc_heros = ["superman", "flash", "batman"]

// console.log(marvel_heros.push(dc_heros));//4
// console.log(marvel_heros);//[ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]

const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);//[ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros]//spread operator
// console.log(all_new_heros);//[ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);//[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// console.log(Array.isArray("priya"));//false
// console.log(Array.from("made essay"));//['m', 'a', 'd', 'e',' ','e','a', 's', 's','y']
// console.log(Array.from({name: "made eassy"}));//[] if it can't convert into array it return empty array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]








