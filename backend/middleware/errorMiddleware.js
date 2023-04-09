// Adding "err" to the params of a middleware overrides the default express error handler
const errorHandler = (err, req, res, next) => {
  // so if my error already has a statusCode then it is ok, else send 500 INTERNAL SERVER ERR
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = { errorHandler };
