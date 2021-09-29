import HTTP from 'http-status-codes';

const apiController = {
  notFound(req, res) {
    res.status(HTTP.NOT_FOUND).end();
  },

  setJSON(req, res, next) {
    res.type('json');
    next();
  }
};

export default apiController;
