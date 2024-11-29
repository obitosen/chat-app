// Initialize the map and set its view
const map = L.map('map').setView([20, 0], 2);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Landmarks: Ancient Wonders and Additional Wonders
const landmarks = [
  // Ancient Wonders
  {
    name: 'Great Pyramid of Giza',
    coords: [29.9792, 31.1342], // Egypt
    description: 'The Great Pyramid of Giza is the only surviving wonder of the ancient world.'
  },
  {
    name: 'Hanging Gardens of Babylon',
    coords: [32.5363, 44.4203], // Iraq (approximate location)
    description: 'The Hanging Gardens of Babylon were an extraordinary series of tiered gardens.'
  },
  {
    name: 'Statue of Zeus at Olympia',
    coords: [37.6373, 21.63], // Greece
    description: 'The Statue of Zeus at Olympia was a giant seated figure made by the sculptor Phidias.'
  },
  {
    name: 'Temple of Artemis at Ephesus',
    coords: [37.9497, 27.3639], // Turkey
    description: 'The Temple of Artemis was a large temple dedicated to the goddess Artemis.'
  },
  {
    name: 'Mausoleum at Halicarnassus',
    coords: [37.0387, 27.4241], // Turkey
    description: 'The Mausoleum at Halicarnassus was a tomb built for Mausolus, a satrap of the Persian Empire.'
  },
  {
    name: 'Colossus of Rhodes',
    coords: [36.4516, 28.2235], // Greece
    description: 'The Colossus of Rhodes was a giant statue of the sun god Helios at the harbor entrance of Rhodes.'
  },
  {
    name: 'Lighthouse of Alexandria',
    coords: [31.2135, 29.8853], // Egypt
    description: 'The Lighthouse of Alexandria guided sailors safely into the busy harbor of Alexandria.'
  },

  // Additional Wonders
  {
    name: 'Taj Mahal',
    coords: [27.1751, 78.0421], // Agra, India
    description: 'The Taj Mahal is an ivory-white marble mausoleum and a symbol of love.'
  },
  {
    name: 'Leaning Tower of Pisa',
    coords: [43.7230, 10.3966], // Pisa, Italy
    description: 'The Leaning Tower of Pisa is a freestanding bell tower known for its unintended tilt.'
  },
  {
    name: 'Great Wall of China',
    coords: [40.4319, 116.5704], // China
    description: 'The Great Wall of China is a historic series of fortifications built across northern China.'
  }
];

// Add markers for each landmark
landmarks.forEach(landmark => {
  const marker = L.marker(landmark.coords).addTo(map);
  marker.bindPopup(`
    <h3>${landmark.name}</h3>
    <p>${landmark.description}</p>
  `);
});
