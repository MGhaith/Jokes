package com.challenge.jokes_app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jokes")
public class JokeController {

    @Autowired
    private JokeRepository jokeRepository;

    @GetMapping
    public List<Joke> getAllJokes() {
        return jokeRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Joke> addJoke(@RequestBody Joke joke) {
        Joke savedJoke = jokeRepository.save(joke);
        return ResponseEntity.ok(savedJoke);
    }

    @GetMapping("/search")
    public List<Joke> searchJokes(@RequestParam String keyword) {
        return jokeRepository.findByContentContaining(keyword);
    }
}
