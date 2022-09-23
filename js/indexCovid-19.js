let url = 'https://api.covidtracking.com/v1/us/daily.json';
let datos = '';
fetch(url)
    .then(response => response.json())

    .then(data=> {
        
        let info = document.getElementById('datos');

        info.innerHTML = 
        console.log(data)
    })
    .catch(error => error)