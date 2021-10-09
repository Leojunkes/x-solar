export default (request, response) => {
  const {email}=request.body;

  return response.json({message:`hi ${email}`});
};
