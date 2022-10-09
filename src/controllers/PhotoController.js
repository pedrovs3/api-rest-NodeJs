import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Photo from '../models/Photo';

const upload = multer(multerConfig).single('photo');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) res.status(400).json({ errors: [error.code] });

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;
      const foto = await Photo.create({ originalname, filename, aluno_id });

      return res.status(200).json(foto);
    });
  }
}

export default new PhotoController();
