export default (req, res) => {
  if (req.method === "POST") {
    res.status(200).json({
      status: "OK",
      message: "POST Request",
    });
  } else {
    res.status(200).json({
      status: "OK",
      message: "GET Request",
    });
  }
};
