package org.example.deveros;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins = "https://austineportfoliopage.onrender.com")
public class ContactRequestController {
    @Autowired
    private ContactRequestService emailService;

    @PostMapping("/send")
    public ResponseEntity<String> sendEmail(@RequestBody ContactRequest request){
        try{
            emailService.sendEmail(request);
            return ResponseEntity.ok("Email sent successfully");
        }catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error sending email: " + e.getMessage());
        }
    }
}
