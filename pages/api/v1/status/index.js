function status(request, response) {
  response.status(200).json({ key: "Learning a little bit more!" });
}

export default status;
