import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Flex, Input, useToast } from "@chakra-ui/react";

const Form = ({ addTodo }) => {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      id: uuidv4(),
      name: todoContent,
    };

    if (!todoContent) {
      toast({
        title: "Empty todo content!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    addTodo(todo);
    setTodoContent("");
  };

  const handleChange = (e) => {
    setTodoContent(e.target.value);
  };

  const [todoContent, setTodoContent] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <Flex flexDirection={["column", "row"]}>
        <Input value={todoContent} onChange={handleChange} placeholder="What's on your mind?" mr={2} />
        <Button type="submit" colorScheme="green" w={["full", "28"]} mt={["2", "0"]}>
          Add
        </Button>
      </Flex>
    </form>
  );
};

export default Form;
