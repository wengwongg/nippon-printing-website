// Map
const map = L.map("map").setView([5.4240757, 100.3166152], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

const marker = L.marker([5.4240757, 100.3166152]).addTo(map);

marker.bindPopup("We are here!").openPopup();
