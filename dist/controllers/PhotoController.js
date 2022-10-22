"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single('photo');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) res.status(400).json({ errors: [error.code] });

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await _Photo2.default.create({ originalname, filename, aluno_id });

        return res.status(200).json(foto);
      } catch (error) {
        res.status(404).json({ errors: ['Esse aluno nao existe.'] });
      }

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;
      const foto = await _Photo2.default.create({ originalname, filename, aluno_id });

      return res.status(200).json(foto);
    });
  }
}

exports. default = new PhotoController();
