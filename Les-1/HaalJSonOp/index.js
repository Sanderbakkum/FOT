const url = 'https://gist.githubusercontent.com/Theo-denBlanken/ed9551298618eb05ad01b838b3bf32b5/raw/c8c1fed36793bdd6fd69ba6ee815c263a61118c3/boekenTheo.json'

const verwerkData = (obj) => {
    let uitvoer = "";
    obj.map(item => {
        uitvoer += `<img style="width: 100px" src="${item.cover}" alt="${item.titel}">`
    })
    document.body.innerHTML = uitvoer
}

const aanvraagServer = new XMLHttpRequest();

aanvraagServer.onreadystatechange = () => {
    console.log(`Ready State: ${aanvraagServer.readyState}, Status: ${aanvraagServer.status}`);
    if(aanvraagServer.readyState === 4 && aanvraagServer.status === 200) {
        console.log(aanvraagServer.responseText)
        let data = JSON.parse(aanvraagServer.responseText)
        console.log(data)
        verwerkData(data)
    }
}

aanvraagServer.open('GET', url, true);

aanvraagServer.send();

console.log(`Dit Wordt Uitgevoerd NADAT send is verzonden`);