// First fetch call to display object-properties as <option> elements
fetch(`/api/`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const muscleNames = Object.keys(data);

        for (let i = 0; i < muscleNames.length; i++) {
            const optionTags = document.createElement('option');
            optionTags.innerText = muscleNames[i];
            optionTags.value = muscleNames[i];
            document.querySelector('select').appendChild(optionTags);
        }
    })

// Calls function and passes in drop-menu-option as an argument
document.querySelector('select').addEventListener('change', event => {
    getImage();
    makeFetch(event.target.value);
});

async function getImage() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.querySelector('img').src = data.message
    } catch(error) {
        console.error(error);
    }
}
async function makeFetch(string) {
    try {
        const response = await fetch(`/api/${string}`);
        const data = await response.json();

        document.querySelector('.stretchName').textContent = data.name;
        document.querySelector('.stretchMuscle').textContent = data.muscle;
        // document.querySelector('.stretchDifficulty').textContent = data.difficulty;
        document.querySelector('.stretchDirections').textContent = data.instructions;
    } 
    catch(error) {
        console.error(error);
    }
}