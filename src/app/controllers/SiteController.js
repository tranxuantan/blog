class SiteController {
    // [GET] /
    index(req, res) {
        res.render('home');
    }

              // [GET] /search
              search(req, res) {
                  res.render('search');
              }

    // [POST] /search
    searchAction(req, res) {
        res.send(req.body.name);
    }
}

module.exports = new SiteController();
