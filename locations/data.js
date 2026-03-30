const COUNTRY_CENTROIDS = {
  "Andorra":           [42.5063,   1.5218],
  "Austria":           [47.5162,  14.5501],
  "Belgium":           [50.5039,   4.4699],
  "Canada":            [56.1304, -106.3468],
  "Czech Republic":    [49.8175,  15.4730],
  "Denmark":           [56.2639,   9.5018],
  "Dominican Republic":[18.7357, -70.1627],
  "Egypt":             [26.8206,  30.8025],
  "France":            [46.2276,   2.2137],
  "Germany":           [51.1657,  10.4515],
  "Greece":            [39.0742,  21.8243],
  "Ireland":           [53.1424,  -7.6921],
  "Italy":             [41.8719,  12.5674],
  "Mauritius":         [20.2744,  57.5520],
  "Netherlands":       [52.1326,   5.2913],
  "Oman":              [21.5129,  55.9233],
  "Portugal":          [39.3999,  -8.2245],
  "Spain":             [40.4637,  -3.7492],
  "Sweden":            [62.0,     15.0   ],
  "Tanzania":          [-6.3690,  34.8888],
  "Thailand":          [15.8700, 100.9925],
  "United Kingdom":    [52.3555,  -1.1743],
  "United States":     [37.0902, -95.7129],
};

const LOCATIONS = [
  { city: "Rome", country: "Italy", lat: 41.9028, lng: 12.4964, visits: [
    { date: "2025-12-21", notes: "Until the 28th, christmas trip alone to parents/nils" },
    { date: "2025-05-23", notes: "To the 27th, Nils' graduation" },
    { date: "2024-12-18", notes: "Until the 28th, christmas trip with Devangini to parents/nils" },
    { date: "2024-08-17", notes: "To the 24th" },
    { date: "2024-03-24", notes: "To the 31st" },
    { date: "2023-09-08", notes: "To the 15th" },
  ]},
  { city: "Barcelona", country: "Spain", lat: 41.3874, lng: 2.1686, visits: [
    { date: "2025-09-04", notes: "Until the 8th, escape room trip with Avish, Daniel, Oliver" },
  ]},
  { city: "Southampton", country: "United Kingdom", lat: 50.9097, lng: -1.4044, visits: [
    { date: "2025-06-28", notes: "SOTON trash quizbowl tournament" },
  ]},
  { city: "Oxford", country: "United Kingdom", lat: 51.7520, lng: -1.2577, visits: [
    { date: "2025-06-21", notes: "Christchurch May Ball" },
  ]},
  { city: "Alton Towers", country: "United Kingdom", lat: 52.9836, lng: -1.8920, visits: [
    { date: "2024-06-03", notes: "To the 6th with Devangini" },
  ]},
  { city: "Amsterdam", country: "Netherlands", lat: 52.3676, lng: 4.9041, visits: [
    { date: "2024-04-11", notes: "To the 15th, Eurovision in Concert trip with Avish, Oliver, Tai" },
    { date: "2023-04-12", notes: "To the 16th, Eurovision in Concert trip with Oliver/Avish" },
    { date: "2022-08-12", notes: "Interrailing trip, 2 days" },
  ]},
  { city: "Sweden", country: "Sweden", lat: 62.0, lng: 15.0, visits: [
    { date: "2022-07-30", notes: "To the 8th" },
  ]},
  { city: "Norrköping", country: "Sweden", lat: 58.5877, lng: 16.1924, visits: [
    { date: "2024-04-16", notes: "To the 17th, for Gunvor's 90th birthday" },
  ]},
  { city: "Manchester", country: "United Kingdom", lat: 53.4808, lng: -2.2426, visits: [
    { date: "2023-12-22", notes: "To the 27th, christmas with Devangini and family at Linus/Sinead" },
  ]},
  { city: "Norrtälje", country: "Sweden", lat: 59.7583, lng: 18.7058, visits: [
    { date: "2023-09-04", notes: "To the 6th, visiting mormor (alone)" },
  ]},
  { city: "Limerick", country: "Ireland", lat: 52.6638, lng: -8.6267, visits: [
    { date: "2023-07-07", notes: "To the 10th, with dad/Nils, O'Casey trilogy and granny" },
  ]},
  { city: "Greece", country: "Greece", lat: 39.0742, lng: 21.8243, visits: [
    { date: "2022-07-12", notes: "To the 22nd" },
  ]},
  { city: "Paris", country: "France", lat: 48.8566, lng: 2.3522, visits: [
    { date: "2022-08-10", notes: "Interrailing trip, 2 days" },
  ]},
  { city: "Brussels", country: "Belgium", lat: 50.8503, lng: 4.3517, visits: [
    { date: "2022-08-12", notes: "Interrailing trip, lunchtime" },
  ]},
  { city: "Berlin", country: "Germany", lat: 52.5200, lng: 13.4050, visits: [
    { date: "2022-08-14", notes: "Interrailing trip, 2 days" },
  ]},
  { city: "Prague", country: "Czech Republic", lat: 50.0755, lng: 14.4378, visits: [
    { date: "2022-08-16", notes: "Interrailing trip, 2 days" },
  ]},
  { city: "Jasper", country: "Canada", lat: 52.8737, lng: -118.0814, visits: [
    { date: null },
  ]},
  { city: "New York", country: "United States", lat: 40.7128, lng: -74.0060, visits: [
    { date: null },
  ]},
  { city: "Santo Domingo", country: "Dominican Republic", lat: 18.4861, lng: -69.9312, visits: [
    { date: null },
  ]},
  { city: "Punta Cana", country: "Dominican Republic", lat: 18.5601, lng: -68.3725, visits: [
    { date: null },
  ]},
  { city: "Mauritius", country: "Mauritius", lat: 20.2744, lng: 57.5520, visits: [
    { date: null },
  ]},
  { city: "Zanzibar", country: "Tanzania", lat: -6.1659, lng: 39.2026, visits: [
    { date: null },
  ]},
  { city: "Dar es Salaam", country: "Tanzania", lat: -6.7924, lng: 39.2083, visits: [
    { date: null },
  ]},
  { city: "Oman", country: "Oman", lat: 21.5129, lng: 55.9233, visits: [
    { date: null },
  ]},
  { city: "Egypt", country: "Egypt", lat: 26.8206, lng: 30.8025, visits: [
    { date: null },
  ]},
  { city: "Phuket", country: "Thailand", lat: 7.8804, lng: 98.3923, visits: [
    { date: null },
  ]},
  { city: "Lisbon", country: "Portugal", lat: 38.7169, lng: -9.1399, visits: [
    { date: null },
  ]},
  { city: "Andorra", country: "Andorra", lat: 42.5063, lng: 1.5218, visits: [
    { date: null },
  ]},
  { city: "Carcassonne", country: "France", lat: 43.2130, lng: 2.3491, visits: [
    { date: null },
  ]},
  { city: "Naples", country: "Italy", lat: 40.8518, lng: 14.2681, visits: [
    { date: null },
  ]},
  { city: "Bologna", country: "Italy", lat: 44.4949, lng: 11.3426, visits: [
    { date: null },
  ]},
  { city: "Ferrara", country: "Italy", lat: 44.8353, lng: 11.6193, visits: [
    { date: null },
  ]},
  { city: "Milan", country: "Italy", lat: 45.4654, lng: 9.1859, visits: [
    { date: null },
  ]},
  { city: "Austria", country: "Austria", lat: 47.5162, lng: 14.5501, visits: [
    { date: null },
  ]},
  { city: "Copenhagen", country: "Denmark", lat: 55.6761, lng: 12.5683, visits: [
    { date: null },
  ]},
  { city: "Malmö", country: "Sweden", lat: 55.6050, lng: 13.0038, visits: [
    { date: null },
  ]},
  { city: "Leiden", country: "Netherlands", lat: 52.1601, lng: 4.4970, visits: [
    { date: null },
  ]},
];
