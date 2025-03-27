package com.legalconnect.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.legalconnect.model.lawyer;
import com.legalconnect.utility.DataLawyer;

@RestController
@RequestMapping("/api/v1/lawyer")
public class Lawyers {

  @Autowired
  private DataLawyer dataLawyer;

  @GetMapping("/get")
  public ResponseEntity<List<lawyer>> getAllLaws() {
    return new ResponseEntity<>(dataLawyer.getlawyersData(), HttpStatus.OK);

  }

}
