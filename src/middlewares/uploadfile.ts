import * as multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { NextFunction, Request, Response } from "express";

cloudinary.config({
  cloud_name: "dr3gcbz2k",
  api_key: "617779829249993",
  api_secret: "H1OLeZ-Eckg9-I-MB-DNiCWtlPs",
});

export const upload = (fieldName: string) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, file.fieldname + "-" + uniqueSuffix + ".png");
    },
  });

  const uploadFile = multer({ storage: storage });

  return (req: Request, res: Response, next: NextFunction) => {
    uploadFile.single(fieldName)(req, res, function (error: any) {
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: "GAGAL UPLOAD FILE" });
      }
      try {
        cloudinary.uploader.upload(file.path, (error, result) => {
          if (error) {
            return res
              .status(500)
              .json({ error: "FAILED UPLOAD FILE CLOUDINARY" });
          }

          console.log("cloudynary result:", result);

          res.locals.filename = result.secure_url;
          next();
        });
      } catch (err) {
        return res.status(400).json({ error: err });
      }
    });
  };
};
