import React, { useEffect, useState } from "react";
import filmService from "../services/FilmService";
import MovieCard from "./MovieCard";
import { toast } from "react-toastify";
import { Button } from "@mui/material";

function FilmList() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchFilms();
  }, []);

  // Yıllara göre sıralı filmleri çek
  const fetchSortedFilms = async () => {
    try {
      const response = await filmService.getSortedFilmsByYear();
      setFilms(response.data); // Sıralı filmleri state'e kaydet
      toast.success("Filmler yıllara göre sıralandı!");
    } catch (error) {
      console.error("Hata oluştu:", error.response ? error.response.data : error.message);
      toast.error("Filmleri sıralarken hata oluştu!");
    }
  };

  // Tüm filmleri çek
  const fetchFilms = async () => {
    try {
      const response = await filmService.getAllFilms();
      setFilms(response.data);
    } catch (error) {
      toast.error("Filmleri yüklerken hata oluştu!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "#0e3056",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <div style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}>
        <Button
          onClick={fetchSortedFilms} // Burada doğru fonksiyon kullanılıyor
          variant="contained"
          color="primary"
        >
          Yıllara Göre Sırala
        </Button>
      </div>
      {films.map((film) => (
        <MovieCard key={film.id} film={film} />
      ))}
    </div>
  );
}

export default FilmList;
