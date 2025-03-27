package com.legalconnect;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LegalConnectApplication {

	public static void main(String[] args) {
		SpringApplication.run(LegalConnectApplication.class, args);
		System.out.println("Running server");
	}

}
