var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

const getCountryData = () =>{
    fetch("https://corona.lmao.ninja/v2/countries")
    .then((response)=> {
        return response.json()
    }).then((data)=>{
        showDataOnMap(data);
    })
}

const showDataOnMap = (data) => {
    
}