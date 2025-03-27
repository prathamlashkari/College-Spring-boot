package com.legalconnect.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class Home {

  @GetMapping
  public ResponseEntity<String> homePage() {
    return new ResponseEntity<>("WELL-COME TO LEGAL CONNECT WEB-APP", HttpStatus.OK);
  }

}
