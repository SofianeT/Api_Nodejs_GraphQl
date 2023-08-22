import fs from "fs/promises";

const readFile = async (path) => JSON.parse(await fs.readFile(path, "utf-8"));

export default {
  async allTodos() {
    return await readFile("todos.json");
  },
  async oneTodo({ id }) {
    const todos = await readFile("todos.json");
    const todo = todos.find((todo) => todo.id === id);
    return todo;
  },
  async filterTodo({ finished }) {
    const todos = await readFile("todos.json");
    const filterd = todos.filter((todo) => todo.finished === finished);
    return filterd;
  },

  async createTodo({ text }) {
    const todos = await readFile("todos.json");
    const newTodo = { id: todos.length + 1, text, finished: false };
    todos.push(newTodo);
    await fs.writeFile("todos.json", JSON.stringify(todos));
    return newTodo;
  },

  async updateTodo({ id }) {
    const todos = await readFile("todos.json");
    const todo = todos.find((todo) => todo.id === id);
    todo.finished = !todo.finished;
    await fs.writeFile("todos.json", JSON.stringify(todos));
    return "Todo updated successfully!";
  },
  async deleteTodo({ id }) {
    const todos = await readFile("todos.json");
    const newTodos = todos.filter((todo) => todo.id !== id);
    await fs.writeFile("todos.json", JSON.stringify(newTodos));
    return "Todo deleted successfully!";
  },
};
