// services.js

import axios from 'axios'

export default function getVehicles() {
  return axios.get('https://swapi.co/api/vehicles/')
}
