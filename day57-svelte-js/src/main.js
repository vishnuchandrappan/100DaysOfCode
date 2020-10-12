import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
    todos: [
      {
        id: 1,
        text: "Learn Svelte",
        done: false,
      },
      {
        id: 2,
        text: "This is one",
        done: true,
      },
      {
        id: 3,
        text: "Another one",
        done: false,
			},
    ],
  },
});

export default app;
