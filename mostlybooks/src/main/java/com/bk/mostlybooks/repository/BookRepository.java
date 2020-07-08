package com.bk.mostlybooks.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bk.mostlybooks.entity.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

}
