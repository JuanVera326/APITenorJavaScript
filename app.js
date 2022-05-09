const input = document.querySelector('#input');
const container = document.querySelector('#container1');
Sortable.create(container,{});

input.addEventListener('keypress',function enter(params) {
    if (params.keyCode == "13") {
        console.log("Enter!!");
        customGif(input);
    }
});

function customGif(input) {
    const URL = "https://g.tenor.com/v1/search?";
    const key = "SVV3UWEMXHUE";
    const query = `q=${input.value}`;
    const limit = "&limit=16";

    fetch(`${URL}${query}&key=${key}${limit}`)
    .then(response => response.json())
    .then(data => {createGif(data)});
}

function createGif(data) {
    container.textContent = "";
    data.results.map(gif => {
        const imgCard = document.createElement("img");
        imgCard.classList = 'card';
        imgCard.src = gif.media[0].mediumgif.url;
        container.appendChild(imgCard);
    })
}