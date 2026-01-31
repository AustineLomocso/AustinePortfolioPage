package org.example.deveros;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins = "${app.frontend.url}") // Reference property file
public class ContactRequestController {

    private final ContactRequestService emailService;

    // Constructor injection (recommended over @Autowired on fields)
    public ContactRequestController(ContactRequestService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/send")
    public ResponseEntity<String> sendEmail(@RequestBody ContactRequest request) {
        try {
            emailService.sendEmail(request);
            return ResponseEntity.ok("Message sent! I'll get back to you soon.");
        } catch (Exception e) {
            // Log the error on the server side
            System.err.println("Email failed: " + e.getMessage());
            return ResponseEntity.status(500).body("Sorry, the mail server is having a moment. Please try again later.");
        }
    }
}