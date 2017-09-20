// services.js

import axios from 'axios';

export default function getTrucks() {
  return axios.get('https://swapi.co/api/vehicles/')
}
