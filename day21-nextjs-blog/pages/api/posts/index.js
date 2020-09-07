const posts = [
  {
    id: 1,
    title: "Haha",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel reprehenderit distinctio voluptatum ducimus accusamus provident in commodi reiciendis? Impedit necessitatibus autem esse beatae, provident odit expedita quo in ad!",
  },
  {
    id: 2,
    title: "Tin-tin",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel reprehenderit distinctio voluptatum ducimus accusamus provident in commodi reiciendis? Impedit necessitatibus autem esse beatae, provident odit expedita quo in ad!",
  },
  {
    id: 3,
    title: "Tik-tok",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel reprehenderit distinctio voluptatum ducimus accusamus provident in commodi reiciendis? Impedit necessitatibus autem esse beatae, provident odit expedita quo in ad!",
  },
];

export default (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({
      status: "OK",
      data: posts,
    });
  } else {
    res.status(200).json({
      status: "OK",
      message: "Post Created Successfully",
    });
  }
};