export async function errorHandler(err, req, res, next) {
  console.log("In errorhandler");
  res.status(500);
  res.send(`Something went wrong on our end.`);
}
