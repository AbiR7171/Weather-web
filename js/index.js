
let API_KEY = `038205917c7a5bec383d0a8f56b8cb97`;

const loadAPI = (city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => showData(data))
}
const showData =(data) =>{
   console.log(data)
    const tempeture = document.getElementById('temperature');
    tempeture.innerText =`${data.main.temp}`;
    const cityName = document.getElementById('cityName');
    cityName.innerText =`${data.name}`;
    const weather = document.getElementById('weather');
    weather.innerText =`${data.weather[0].main}`;
};
const searchProccess = ()=>{
    const inputFeild = document.getElementById('SearchFeild').value;
    loadAPI(inputFeild);
};
document.getElementById('search-btn'),addEventListener('click', function(){
  searchProccess();
});
document.getElementById('SearchFeild').addEventListener('keypress', function (e) {
    console.log(e.key)
    if (e.key === 'Enter') {
        searchProccess()
    }
});

loadAPI();