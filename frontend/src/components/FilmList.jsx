import React, { useEffect, useState } from "react";
import filmService from "../services/FilmService";
import MovieCard from "./MovieCard";
import { toast } from "react-toastify";

function FilmList() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchFilms();
  }, []);

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
      {films.map((film) => (
        <MovieCard key={film.id} film={film} />
      ))}
    </div>
  );
}

export default FilmList;
