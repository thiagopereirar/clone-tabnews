function status(request, response) {
  response.status(200).json({ God: "I Love You" });
}

export default status;
