import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Joke {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;
    private String author;
    private LocalDateTime timestamp;
    private int rating;

    // Getters and Setters
}
