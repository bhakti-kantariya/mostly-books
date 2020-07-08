package com.bk.mostlybooks.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="tbl_category")
@Setter
@Getter
@ToString
public class BookCategory {
	@JsonManagedReference
	@OneToMany(cascade = CascadeType.ALL, mappedBy="category")
	private Set<Book> book; 
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="category_name")
	private String categoryName;
	
}
