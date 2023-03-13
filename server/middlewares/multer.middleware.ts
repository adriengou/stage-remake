import multer from "multer";
import path from "path";

//multer settings

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix} - ${file.originalname}`);
  },
});

const limits = {
  fileSize: 10000000,
};

const upload = multer({
  storage,
  limits,
}).any();
export default upload;
