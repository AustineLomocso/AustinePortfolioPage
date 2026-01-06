package org.example.deveros;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactRequestService {
    @Autowired
    private JavaMailSender emailSender;

    @Value("${spring.mail.username}")
    private String myEmail;

    public void sendEmail(ContactRequest request){
        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(myEmail);
        message.setFrom(myEmail);
        message.setReplyTo(request.getEmail());
        message.setSubject("Portfolio Contact: "+request.getSubject());
        String body = "Name: " + request.getName() + "\n" +
                "Email: " + request.getEmail() + "\n\n" +
                "Message:\n" + request.getMessage();

        message.setText(body);
        emailSender.send(message);
    }
}
