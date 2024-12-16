import React, { useEffect, useState } from "react";
import filmService from "../services/FilmService";
import MovieCard from "./MovieCard";
import { toast } from "react-toastify";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function FilmList() {
  const [films, setFilms] = useState([]);
  const navigate = useNavigate();
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Dialog kontrolü

  useEffect(() => {
    fetchFilms();
  }, []);

  // Film ekleme sayfasına yönlendirme
  const toAdd = () => {
    navigate("/addMovie"); 
  };

  // Tüm filmleri getir
  const fetchFilms = async () => {
    try {
      const response = await filmService.getAllFilms();
      setFilms(response.data);
    } catch (error) {
      toast.error("Filmleri yüklerken hata oluştu!");
    }
  };

  // Yıllara göre sıralı filmleri getir
  const fetchSortedFilms = async () => {
    try {
      const response = await filmService.getSortedFilmsByYear();
      setFilms(response.data);
      toast.success("Filmler yıllara göre sıralandı!");
    } catch (error) {
      toast.error("Filmleri sıralarken hata oluştu!");
    }
  };

  // Sil butonuna tıklayınca dialog açılır
  const handleDeleteClick = (film) => {
    setSelectedFilm(film);
    setIsDialogOpen(true);
  };

  // Dialog onayı ile film silme
  const handleDeleteConfirm = async () => {
    if (selectedFilm) {
      try {
        await filmService.deleteFilm(selectedFilm.id);
        toast.success(`"${selectedFilm.title}" başarıyla silindi!`);
       
        setFilms(films.filter((f) => f.id !== selectedFilm.id)); // Listeyi güncelle
      } catch (error) {
        toast.error("Film silinirken hata oluştu!");
      } finally {
        handleCloseDialog();
      }
    }
  };

  // Dialog kapatma
  const handleCloseDialog = () => {
    setSelectedFilm(null);
    setIsDialogOpen(false);
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
          onClick={fetchSortedFilms}
          variant="contained"
          color="primary"
          sx={{ marginRight: "6px" }}
        >
          Yıllara Göre Sırala
        </Button>
        <Button variant="contained" color="primary" onClick={toAdd}>
          Film Ekle
        </Button>
      </div>
      {films.map((film) => (
        <div key={film.id} style={{ position: "relative", margin: "10px" }}>
          <MovieCard film={film} />
          <Button
            variant="contained"
            color="error"
            style={{
              position: "absolute",
              bottom: "26px",
              right: "20px",
              backgroundColor: "#f44336",
            }}
            onClick={() => handleDeleteClick(film)}
            size="small"
          >
            Sil
          </Button>
        </div>
      ))}

      {/* Silme onay dialog'u */}
      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Silme İşlemini Onayla"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            "{selectedFilm?.title}" adlı filmi silmek istediğinize emin misiniz? Bu işlem geri alınamaz.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            İptal
          </Button>
          <Button onClick={handleDeleteConfirm} color="secondary" autoFocus>
            Sil
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FilmList;
