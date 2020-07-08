package com.bk.mostlybooks.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bk.mostlybooks.entity.Book;
import com.bk.mostlybooks.repository.BookCategoryRepository;
import com.bk.mostlybooks.repository.BookRepository;

@RestController
public class BooksController {

	@Autowired
	private BookRepository bookRepository;

	@Autowired
	private BookCategoryRepository bookCategoryRepository;
	
	@GetMapping( path="/allbooks")
	public List<Book> helloWorld() {
		return bookRepository.findAll();
	}
}
