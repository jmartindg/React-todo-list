import React, { useState, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import Header from "./components/Header";
import Form from "./components/Form";
import Todo from "./components/Todo";
import Footer from "./components/Footer";

const App = () => {
  // Main todo lists
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || []);

  // Delete todos
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  // Add todos
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // Set localstorage item KEY:'todos'
  }, [todos]);

  return (
    <>
      <Container minH="100vh">
        <Header />
        <Form addTodo={addTodo} />
        <Todo todos={todos} deleteTodo={deleteTodo} />
      </Container>
      <Footer />
    </>
  );
};

export default App;
