package com.sanluis.api.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sanluis.api.todo.vo.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Integer>{

}
