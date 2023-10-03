
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault()
    const random = getRandomInt(1, 151);

   fetchData(random)


})


const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const fetchData = async (id) => {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await respuesta.json();

        const pokemon = {
            img: data.sprites.front_default,
            name: data.name,
            hp: data.stats[0].base_stat,
            experience: data.base_experience,
            attack: data.stats[2].base_stat,
            special: data.stats[4].base_stat,
            defence: data.stats[3].base_stat
        }

    



       pintarCard(pokemon)
    } catch (error) {
        console.log(error);
    }
}

const pintarCard = (pokemon) =>{
    console.log(pokemon);
    const container = document.querySelector('.container')
    const template = document.querySelector('#template-card').content;
    const clone = template.cloneNode(true)
    const fragment = document.createDocumentFragment();

    clone.querySelector('.card-img').setAttribute('src', pokemon.img);
    clone.querySelector('.content h2').innerHTML = `<h2>${pokemon.name} <span>${pokemon.hp}</span> hp</h2>`;
    clone.querySelector('.content p').innerHTML = `Exp ${pokemon.experience}`;
    clone.querySelector('.attack').innerHTML = `${pokemon.attack}`;
    clone.querySelector('.special').innerHTML = `${pokemon.special}`
    clone.querySelector('.defence').innerHTML = `${pokemon.defence}`
    fragment.appendChild(clone)
    container.appendChild(fragment);


}