const logger = (req, res, next) => {
  //Specs:
  //Req method, req url, timestamp
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.ip}`);

  next();
}

module.exports = logger;