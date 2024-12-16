package com.example.FilmBackend.controller;

import com.example.FilmBackend.model.Film;
import com.example.FilmBackend.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/films")
public class FilmController {

    private final FilmService filmService;

    @Autowired
    public FilmController(FilmService filmService) {
        this.filmService = filmService;
    }

    // Tüm filmleri getir
    @GetMapping
    public List<Film> getAllFilms() {
        return filmService.getAllFilms();
    }

    // Yeni bir film ekle
    @PostMapping
    public ResponseEntity<Film> createFilm(@RequestBody Film film) {
        Film createdFilm = filmService.saveFilm(film);
        return ResponseEntity.ok(createdFilm);
    }

    // Bir filmi ID ile getir
    @GetMapping("/{id}")
    public ResponseEntity<Film> getFilmById(@PathVariable Long id) {
        Film film = filmService.getFilmById(id); // FilmService'ten filmi al
        return ResponseEntity.ok(film);
    }

    // Bir filmi güncelle
    @PutMapping("/{id}")
    public ResponseEntity<Film> updateFilm(@PathVariable Long id, @RequestBody Film filmDetails) {
        Film updatedFilm = filmService.updateFilm(id, filmDetails); // FilmService ile güncelle
        return ResponseEntity.ok(updatedFilm);
    }

    // Bir filmi sil
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteFilm(@PathVariable Long id) {
        filmService.deleteFilm(id); // FilmService ile sil
        return ResponseEntity.ok("Film başarıyla silindi.");
    }

    @GetMapping("/sort-by-year")
    public ResponseEntity<List<Film>> getFilmsSortedByYear() {
        List<Film> sortedFilms = filmService.getFilmsSortedByYear();
        return ResponseEntity.ok(sortedFilms);
    }



}
