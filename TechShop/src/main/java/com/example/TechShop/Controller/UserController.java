package com.example.TechShop.Controller;

import com.example.TechShop.Configs.JwtTokenFactory;
import com.example.TechShop.Service.UserService;
import com.example.TechShop.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/shop")
public class UserController {

    @Lazy
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtTokenFactory jwtTokenFactory;


    @PostMapping("/registration")
    public ResponseEntity<String> registration(@RequestBody User user) {
        if (userService.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already exists");
        }

        String token = userService.generateToken(user);
        user.setToken(token);
        System.out.println("User's new token: " + user.getToken());
        userService.saveUser(user);
        userService.sendEmail(user, token);

        return ResponseEntity.ok("User registered successfully, please check your email");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        if (user.getToken() == null)
        {
            SecurityContext contextHolder = SecurityContextHolder.createEmptyContext();

            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            user.getEmail(),
                            user.getPassword()
                    )
            );

            contextHolder.setAuthentication(authentication);
            SecurityContextHolder.setContext(contextHolder);
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            String jwt = jwtTokenFactory.generateToken(userDetails.getUsername());

            return ResponseEntity.ok(jwt);
        }

        return ResponseEntity.status(HttpStatus.CONFLICT).body("User has not been verified");
    }

    @GetMapping("/verify")
    public String verify(@RequestParam("token") String token) {
        User user = userService.findByToken(token);

        if (user != null) {
            user.setToken(null);
            userService.updateUser(user);
            return "Email has been successfully verified";
        }

        return "Something went wrong";
    }
}
