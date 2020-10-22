const pkmn = "alakazam";
/* function getPkmn() {
  fetch(`https://pokeapi.co/api/v2/pokemon/luxray`)
    .then((result) => {
      //console.log(result);
      return result.json();
    })
    .then((data) => {
      console.log(data);
    });
}
getPkmn();
 */
async function getPkmn() {
  try {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn}`);
    const data = await result.json();
    console.log(data);
  } catch (error) {
    alert("Please check spelling");
  }
}
getPkmn();
