package com.example.FilmBackend.service;

import com.example.FilmBackend.model.Film;
import com.example.FilmBackend.repository.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.stream.Collectors;


import java.util.List;

@Service
public class FilmService {

    private final FilmRepository filmRepository;

    @Autowired
    public FilmService(FilmRepository filmRepository) {
        this.filmRepository = filmRepository;
    }

    // Tüm filmleri getir
    public List<Film> getAllFilms() {
        return filmRepository.findAll();
    }

    // Yeni bir film kaydet
    public Film saveFilm(Film film) {
        return filmRepository.save(film);
    }

    // ID ile bir filmi getir
    public Film getFilmById(Long id) {
        return filmRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Film bulunamadı: " + id));
    }

    // Bir filmi güncelle
    public Film updateFilm(Long id, Film filmDetails) {
        Film film = getFilmById(id);

        film.setTitle(filmDetails.getTitle());
        film.setGenre(filmDetails.getGenre());
        film.setRelease_year(filmDetails.getRelease_year());
        film.setDirector(filmDetails.getDirector());
        film.setRating(filmDetails.getRating());
        film.setImage_url(filmDetails.getImage_url());

        return filmRepository.save(film);
    }

    // Bir filmi sil
    public void deleteFilm(Long id) {
        filmRepository.deleteById(id);
    }

    public List<Film> getFilmsSortedByYear() {
        return filmRepository.findAll()
                .stream()
                .sorted((f1, f2) -> Integer.compare(f2.getRelease_year(), f1.getRelease_year())) // Yıla göre azalan sırala
                .collect(Collectors.toList());
    }
}
