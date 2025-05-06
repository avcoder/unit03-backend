export const logger = (req, res, next) => {
  console.log(`MY LOG IS: ${req.method} - ${req.url}`);
  next();
};
