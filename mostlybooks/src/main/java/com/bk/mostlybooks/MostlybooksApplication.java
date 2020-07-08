package com.bk.mostlybooks;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.bk.mostlybooks.repository")
@EntityScan("com.bk.mostlybooks.entity")
public class MostlybooksApplication {

	public static void main(String[] args) {
		SpringApplication.run(MostlybooksApplication.class, args);
	}

}
