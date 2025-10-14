// Initialize map focused on India
var map = L.map("map", {
  zoomControl: false,
  scrollWheelZoom: false,
  doubleClickZoom: false,
  dragging: false,
}).setView([16, 80], 5); // Center over India

// Tile layer
L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution:
    '&copy; <a href="https://carto.com/">CARTO</a> | &copy; OpenStreetMap',
  subdomains: "abcd",
  maxZoom: 19,
}).addTo(map);




// Major Indian sea ports data
var ports = [
  // Major Ports
  { name: "Kandla", coords: [23.03, 70.23] },
  { name: "Mumbai", coords: [18.96, 72.82] },
  { name: "Mormugao", coords: [15.41, 73.83] },
  { name: "Kochi", coords: [9.97, 76.28] },
  { name: "Chennai", coords: [13.09, 80.28] },
  { name: "Visakhapatnam", coords: [17.73, 83.3] },
  { name: "Kolkata", coords: [22.57, 88.36] },
  { name: "Haldia", coords: [22.02, 88.06] },
  { name: "Paradip", coords: [20.32, 86.63] },
  { name: "Tuticorin", coords: [8.76, 78.13] },
  { name: "Ennore", coords: [13.19, 80.33] },

  // Additional High-Traffic / Growing Ports
  { name: "Mundra", coords: [22.73, 69.72] },
  { name: "Sikka", coords: [22.44, 69.84] },
  { name: "Dahej", coords: [21.7, 72.53] },
  { name: "Magdalla", coords: [21.13, 72.68] },
  { name: "Dighi", coords: [18.25, 72.98] },
  { name: "Ratnagiri", coords: [16.98, 73.29] },
  { name: "Karwar", coords: [14.8, 74.13] },
  { name: "Krishnapatnam", coords: [14.25, 80.12] },
  { name: "Machilipatnam", coords: [16.18, 81.13] },
  { name: "Kakinada", coords: [16.93, 82.25] },
  { name: "Gangavaram", coords: [17.68, 83.28] },
  { name: "Dhamra", coords: [20.78, 86.94] },
  { name: "Cuddalore", coords: [11.73, 79.77] },
  { name: "Nagapattinam", coords: [10.77, 79.83] },
  { name: "Manappad", coords: [8.38, 78.03] },
  { name: "Vizhinjam", coords: [8.38, 76.97] },
  { name: "Veraval", coords: [20.91, 70.37] },
  { name: "Porbandar", coords: [21.64, 69.61] },
  { name: "Sundarbans (Kolkata Outer)", coords: [21.95, 88.85] },
  { name: "Mangalore", coords: [12.94, 74.83] },
  { name: "Malpe", coords: [13.34, 74.73] },
  { name: "Kasargod", coords: [12.5, 75.0] },
  { name: "Beypore", coords: [11.17, 75.8] },
  { name: "Alappuzha", coords: [9.5, 76.34] },
  { name: "Kollam", coords: [8.88, 76.59] },
  { name: "Baleshwar", coords: [21.5, 86.94] },
  { name: "Gopalpur", coords: [19.27, 84.9] },
];


// Custom marker icon (optional: aesthetic)
var shipIcon = L.icon({
  iconUrl: "assets/imgs/port-sign.png", // ship icon
  iconSize: [25, 25],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
});

// Info control (tooltip on hover)
var info = L.control();
info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info");
  this.update();
  return this._div;
};
info.update = function (props) {
  this._div.innerHTML =
    "<h4>Indian Sea Ports</h4>" +
    (props ? "<b>" + props + "</b>" : "Hover over a port");
};
info.addTo(map);

// Add port markers
ports.forEach(function (port) {
  var marker = L.marker(port.coords, { icon: shipIcon }).addTo(map);
  marker.on("mouseover", function () {
    info.update(port.name);
  });
  marker.on("mouseout", function () {
    info.update();
  });
});

// Optional: legend
var legend = L.control({ position: "bottomright" });
legend.onAdd = function (map) {
  var div = L.DomUtil.create("div", "info legend");
  div.innerHTML = "<i style='background:#9b1003'></i> 100+ Ports Served";
  return div;
};
legend.addTo(map);
