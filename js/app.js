// Create map centered on the US
const map = L.map('map').setView([37.8, -96], 4);

// Base map tiles
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  maxZoom: 19,
  subdomains: 'abcd',
  attribution: '© OpenStreetMap © CARTO'
}).addTo(map);

// GeoJSON for US states
const geojsonUrl =
  "data/us-states.json";

// Simple static style
function style(feature) {
  return {
    fillColor: "#1f1f1f",
    weight: 1,
    color: "#3a3a3a",
    fillOpacity: 0.75
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
      const icon = L.divIcon({
          className: "",
          iconSize: [34, 34],
          iconAnchor: [17, 0],
          html: `
          <div style="
          width:45px;
          height:45px;
          border-radius:50%;
          background:${p.primary};
          border:4px solid ${p.secondary};
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:10px;
          font-weight:900;
          color:#ffffff;
          ">
          ${p.abbr}
          </div>
          `
      });

      L.marker([p.lat, p.lon], { icon })
        .addTo(map)
        .bindPopup(`<b>${p.team}</b>`);
    });
  });