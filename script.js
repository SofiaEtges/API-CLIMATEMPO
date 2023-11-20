const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://apiadvisor.climatempo.com.br/api/v1/weather/locale/3477/current?token=901c4418eb8f2b8f75ea9b31f284b951", requestOptions, { mode: 'no-cors' })
  .then(response => response.json())
  .then(result => {
    console.log(result);
    render(result);
  })
  .catch(error => console.log('error', error));

function render(result) {
  const ul = document.getElementById("weather-forecast");
  ul.innerHTML = "";

  ul.insertAdjacentHTML("beforeend", `
    <li id="${result.id}>
       <div class="lugar">
          <p>Tempo agora em </p>
          <p class="cidade">${result.name}, ${result.state}</p>
       </div>
       <div class="temperatura">
          <img src= "https://www.climatempo.com.br/dist/images/v2/svg/${result.data.icon}.svg"></img>
          <p class="p-temperatura">${result.data.temperature}°</p>
       </div>
       <div class="condi-sens">
       <div class="condicao">
           <img src= "https://www.climatempo.com.br/dist/images/v2/svg/ic-cloud.svg"></img>
           <p>${result.data.condition}</p>
       </div>
         <div class="sensacao-termica">
           <img src= "https://www.climatempo.com.br/dist/images/v2/svg/ic-sensation.svg"></img>
           <p>Sensação Térmica ${result.data.sensation}°</p>
         </div>
       </div>
       <div class="vento">
           <p>Vento</p>
           <div class="imagemvento">
              <img src= "https://img.freepik.com/vetores-premium/ilustracao-em-vetor-logotipo-do-icone-de-vento_598213-4157.jpg?w=740" class="imagemvento"></img>
              <p>${result.data.wind_velocity}km/h</p>
           </div>
       </div>
       <div class="umidade">
          <p>Umidade</p>
          <div class="imagemumidade">
          <img src= "https://www.climatempo.com.br/dist/images/v2/svg/ic-humidity-max.svg"></img>  
          <p>${result.data.humidity}%</p> 
          </div>
       </div>
    
    </li>
  `);
}