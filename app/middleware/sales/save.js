module.exports = (req, res, next) => {
  const fields = ["userName", "amount"];

  if (!req.body)
    return res.send(422, {
      status: false,
      message: `Payload Error: ${fields.join(", ")}`,
    });

  const errors = fields.filter((field) => !req.body[field]);

  if (errors.length)
    return res.send(422, {
      status: false,
      message: `Parameter required: ${errors.join(",")} `,
    });

  return next();
};
