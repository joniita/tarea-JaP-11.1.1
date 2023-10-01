fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data => listCharacters(data));

function listCharacters (arr) {
    let divCharacters = document.getElementById("characters");
    let characters = arr.results;
    characters.forEach(character => {
        //console.log(character.image);
        divCharacters.innerHTML+= `
        <div class="card">
            <img src="${character.image}" alt="">
        </div>
        `;
    });
}