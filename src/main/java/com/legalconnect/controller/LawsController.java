package com.legalconnect.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.legalconnect.model.laws;
import com.legalconnect.utility.DataLaw;

@RestController
@RequestMapping("app/v1/laws")
public class LawsController {

  @Autowired
  private DataLaw dataLaw;

  @GetMapping("/get")
  public ResponseEntity<List<laws>> getAllLaws() {
    List<laws> laws = dataLaw.getlawsData();
    return new ResponseEntity<>(laws, HttpStatus.OK);
  }
}
