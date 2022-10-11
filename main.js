document.querySelector('button').addEventListener('click', getFetch)
let container = document.querySelector('.container')

function getFetch(){
    const choice = document.querySelector('input').value
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${choice.toLowerCase()}`
    
    
      fetch(url)
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            console.log(data)
             return CreatePlayer(data.player[0])
            
          })
          .catch(err => {
              console.log(`error ${err}`)
          });
    }

function CreatePlayer(player) {
  // document.querySelector('header').style.backgroundImage = `url(${player.strRender})`
  const playerDetails = 
      `<div class="split">
        <div class="content">
          <h2>Name: ${player.strPlayer}</h2>
          <h2>Nationality: ${player.strNationality}</h2>
          <h2>BirthLocation: ${player.strBirthLocation}</h2>
          <h2>Team: ${player.strTeam}</h2>
          <h2>Sport: ${player.strSport}</h2>
          <h2>Number: ${player.strNumber}</h2>
        </div>
        <div class="image">
          <img src="${player.strCutout}" alt="">
        </div>
      </div>`


    
      container.innerHTML = playerDetails


}


    
