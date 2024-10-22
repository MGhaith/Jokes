package com.challenge.jokes_app;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JokeRepository extends JpaRepository<Joke, Long> {
    List<Joke> findByContentContaining(String keyword);
}
