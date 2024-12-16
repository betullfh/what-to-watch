import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";
import filmService from "../services/FilmService";
import { toast } from "react-toastify";

function UpdateFilm() {
  const navigate = useNavigate();
  const location = useLocation(); // ID'yi al
  const [film, setFilm] = useState({
    title: "",
    genre: "",
    release_year: "",
    director: "",
    rating: "",
    image_url: "",
  });

  const filmId = location.state?.id;


useEffect(() => {
  if (filmId) {
    fetchFilm();
  }
}, [filmId]);

const fetchFilm = async () => {
  try {
    const response = await filmService.getFilmById(filmId);
    setFilm(response.data);
  } catch (error) {
    toast.error(error.message)  }
};
   

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilm({ ...film, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await filmService.updateFilm(filmId, film);
      toast.success("Film başarıyla güncellendi!");
      navigate("/films");
    } catch (error) {
      toast.error("Film güncellenirken hata oluştu!");
    }
  };

  return (
    <Card sx={{ maxWidth: 500, margin: "auto", mt: 5, padding: 2 ,backgroundColor:"#71acff"}}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Film Güncelle
        </Typography>
        <form onSubmit={handleUpdate}>
          <TextField
            fullWidth
            label="Başlık"
            name="title"
            value={film.title}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Tür"
            name="genre"
            value={film.genre}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Yıl"
            name="release_year"
            value={film.release_year}
            onChange={handleChange}
            margin="normal"
            type="number"
          />
          <TextField
            fullWidth
            label="Yönetmen"
            name="director"
            value={film.director}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Puan"
            name="rating"
            value={film.rating}
            onChange={handleChange}
            margin="normal"
            type="number"
          />
          <TextField
            fullWidth
            label="Resim URL"
            name="image_url"
            value={film.image_url}
            onChange={handleChange}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Güncelle
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default UpdateFilm;
