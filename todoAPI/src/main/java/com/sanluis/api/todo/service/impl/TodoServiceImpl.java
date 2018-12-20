package com.sanluis.api.todo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sanluis.api.todo.repository.TodoRepository;
import com.sanluis.api.todo.service.TodoService;
import com.sanluis.api.todo.vo.Todo;

@Service
public class TodoServiceImpl implements TodoService {
	
	@Autowired
	TodoRepository todoRepository;

	@Override
	public List<Todo> getAll() {
		return todoRepository.findAll();
	}

}
