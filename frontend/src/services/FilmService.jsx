import axios from "axios";

const BASE_URL = "http://localhost:8080/api/films";

class FilmService {
  // Tüm filmleri getir
  getAllFilms() {
    return axios.get(BASE_URL);
  }

  // Yeni bir film ekle
  createFilm(film) {
    return axios.post(BASE_URL, film);
  }

  // Film güncelle
  updateFilm(id, film) {
    return axios.put(`${BASE_URL}/${id}`, film);
  }

  // Film sil
  deleteFilm(id) {
    return axios.delete(`${BASE_URL}/${id}`);
  }

  getSortedFilmsByYear() {
    return axios.get(`${BASE_URL}/sort-by-year`)

  }
}

export default new FilmService();
