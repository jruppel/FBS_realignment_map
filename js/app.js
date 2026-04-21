// Create map centered on the US
const map = L.map('map').setView([37.8, -96], 4);

// Base map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '© OpenStreetMap'
}).addTo(map);

// GeoJSON for US states
const geojsonUrl =
  "data/us-states.json";

// Simple static style
function style(feature) {
  return {
    fillColor: "#ffffff",
    weight: .1,
    color: "black",
    fillOpacity: 0.5
  };
}

// Load and draw GeoJSON
fetch(geojsonUrl)
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      style: style
    }).addTo(map);
  });

fetch("data/teams.json")
  .then(res => res.json())
  .then(points => {
    points.forEach(p => {
      L.marker([p.lat, p.lon])
        .addTo(map)
        .bindPopup(p.team);
    });
  });