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
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

        userService.saveUser(user);

        return ResponseEntity.ok("User was created successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        System.out.println("Password: " + user.getPassword());
//        try {
            System.out.println("Attempting authentication for user: " + user.getEmail());

            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            user.getEmail(),
                            user.getPassword()
                    )
            );

            System.out.println("Auth: " + authentication);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            System.out.println("Auth2: " + authentication.getPrincipal());

            UserDetails userDetails = (UserDetails) authentication.getPrincipal();

            System.out.println("Authentication successful for user: " + userDetails.getUsername());
            System.out.println(userDetails.getUsername());
            System.out.println(userDetails.getPassword());

            String jwt = jwtTokenFactory.generateToken(userDetails.getUsername());
            System.out.println("bebra2");
            return ResponseEntity.ok(jwt);
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Incorrect credentials");
//        }
    }
}
