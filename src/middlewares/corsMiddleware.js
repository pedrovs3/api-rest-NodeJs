const whiteList = ['http://165.22.36.29', 'http://localhost:3000'];

export default (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  });
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
};
