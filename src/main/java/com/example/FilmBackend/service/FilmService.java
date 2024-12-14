package com.example.FilmBackend.service;

import com.example.FilmBackend.model.Film;
import com.example.FilmBackend.repository.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmService {
    private final FilmRepository filmRepository;

    @Autowired
    public FilmService(FilmRepository filmRepository) {
        this.filmRepository = filmRepository;
    }

    public List<Film> getAllFilms() {
        return filmRepository.findAll();
    }

    public Film saveFilm(Film film) {
        return filmRepository.save(film);
    }

    public Film updateFilm(Long id, Film filmDetails) {
        Film film = filmRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Film not found with id: " + id));

        film.setTitle(filmDetails.getTitle());
        film.setGenre(filmDetails.getGenre());
        film.setRelease_year(filmDetails.getRelease_year());
        film.setDirector(filmDetails.getDirector());
        film.setRating(filmDetails.getRating());
        film.setImageUrl(filmDetails.getImageUrl());

        return filmRepository.save(film);
    }

    public void deleteFilm(Long id) {
        filmRepository.deleteById(id);
    }
}
