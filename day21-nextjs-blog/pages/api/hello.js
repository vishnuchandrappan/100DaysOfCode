export default (req, res) => {
  res.status(200).json({
    status : "OK",
    message : "Hello World!"
  });
}