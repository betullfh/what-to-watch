package com.example.FilmBackend.repository;

import com.example.FilmBackend.model.Film;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilmRepository extends JpaRepository<Film, Long> {
}
