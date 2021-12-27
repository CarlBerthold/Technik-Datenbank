// src/api/service.js

import axios from "axios";

const service = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: "http://localhost:5005/api/techniks"
  // withCredentials: true // => you might need this when having the users in the app
});

const errorHandler = (err) => {
  throw err;
};

const handleUpload = (file) => {
  return service
    .post("/upload", file)
    .then((res) => res.data)
    .catch(errorHandler);
};

const saveNewTechnik = (newTechnik) => {
  return service
    .post("/add", newTechnik)
    .then((res) => res.data)
    .catch(errorHandler);
};

// async function handleUpload(file) {
//   try {
//     const res = await service
//       .post("/upload", file);
//     return res.data;
//   } catch (err) {
//     return errorHandler(err);
//   }
// }

// async function saveNewTechnik(newTechnik) {
//   try {
//     const res = await service
//       .post("/add", newTechnik);
//     return res.data;
//   } catch (err) {
//     return errorHandler(err);
//   }
// }

export default {
  service,
  handleUpload,
  saveNewTechnik
};
