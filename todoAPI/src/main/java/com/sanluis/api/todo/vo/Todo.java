package com.sanluis.api.todo.vo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="todos")
public class Todo {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String todo;
	private boolean importante;
	private boolean terminada;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTodo() {
		return todo;
	}
	public void setTodo(String todo) {
		this.todo = todo;
	}
	public boolean isImportante() {
		return importante;
	}
	public void setImportante(boolean importante) {
		this.importante = importante;
	}
	public boolean isTerminada() {
		return terminada;
	}
	public void setTerminada(boolean terminada) {
		this.terminada = terminada;
	}
	
	
}
