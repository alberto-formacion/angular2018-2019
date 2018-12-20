package com.sanluis.api.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sanluis.api.todo.service.TodoService;
import com.sanluis.api.todo.vo.Todo;

@RestController
@RequestMapping("/todos")
public class TodoController {
	
	@Autowired
	TodoService todoService;

	@GetMapping
	public List<Todo> getAll(){
		return todoService.getAll();
	}
}
