package com.bk.mostlybooks.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bk.mostlybooks.entity.BookCategory;

@Repository
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long> {

}
