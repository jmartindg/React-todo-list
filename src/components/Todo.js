import React from "react";
import { Flex, VStack, Button, Badge, Center, Text } from "@chakra-ui/react";
import { RiTodoLine } from "react-icons/ri";

const Todo = ({ todos, deleteTodo }) => {
  // If there's no todo return 'You have no todos'
  if (!todos.length) {
    return (
      <Center mt={10}>
        <Badge p={5} borderRadius={10} textTransform="capitalize" fontSize="md">
          <Center mb={2}>
            <RiTodoLine />
          </Center>
          You Have no Todos
        </Badge>
      </Center>
    );
  }

  return (
    // Map todos in App.js
    <VStack my={10} align="stretch">
      {todos.map((todo) => (
        <Flex key={todo.id} alignItems="center" justifyContent="space-between" columnGap={4}>
          <Text fontWeight="medium">{todo.name}</Text>
          <Button onClick={() => deleteTodo(todo.id)} colorScheme="red">
            Delete
          </Button>
        </Flex>
      ))}
    </VStack>
  );
};

export default Todo;
