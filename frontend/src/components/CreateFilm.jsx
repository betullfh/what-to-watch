import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { toast } from "react-toastify";
import FilmService from "../services/FilmService";

function CreateFilm() {
  const [film, setFilm] = useState({
    title: "",
    genre: "",
    release_year: "",
    director: "",
    rating: "",
    image_url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilm({ ...film, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await FilmService.createFilm(film);
      toast.success("Film başarıyla eklendi!");
      setFilm({
        title: "",
        genre: "",
        release_year: "",
        director: "",
        rating: "",
        image_url: "",
      });
    } catch (error) {
      toast.error("Film eklenirken hata oluştu!");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#0e3056",
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          width: "90%",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(22, 54, 128, 0.51)",
          backgroundColor: "#71acff",
        }}
      >
        <CardContent>
          <Typography variant="h4" component="div" textAlign="center" mb={3}>
            Film Ekle
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Başlık"
              name="title"
              value={film.title}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Tür"
              name="genre"
              value={film.genre}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Yıl"
              name="release_year"
              value={film.release_year}
              onChange={handleChange}
              variant="outlined"
              type="number"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Yönetmen"
              name="director"
              value={film.director}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Rating"
              name="rating"
              value={film.rating}
              onChange={handleChange}
              variant="outlined"
              type="number"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Resim URL"
              name="image_url"
              value={film.image_url}
              onChange={handleChange}
              variant="outlined"
            />
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ width: "48%" }}
              >
                Kaydet
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ width: "48%" }}
                onClick={() =>
                  setFilm({
                    title: "",
                    genre: "",
                    release_year: "",
                    director: "",
                    rating: "",
                    image_url: "",
                  })
                }
              >
                Temizle
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CreateFilm;
