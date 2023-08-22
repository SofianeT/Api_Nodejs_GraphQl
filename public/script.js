const query = `{ allTodos { id , text , finished} }`;

const reponse = await fetch("http://localhost:3000/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query: query }),
});

console.log(await reponse.json());
