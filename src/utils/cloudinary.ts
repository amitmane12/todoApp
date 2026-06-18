import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryConfig } from '../config/config';
import { unlink } from 'node:fs/promises';

cloudinary.config({
  cloud_name: CloudinaryConfig.Cloudinary_Cloud_Name,
  api_key: CloudinaryConfig.Cloudinary_Api_Key,
  api_secret: CloudinaryConfig.Cloudinary_Api_Secret,
});

export const cloudinaryUploadMedia = async (filepath: string) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(filepath, {
      resource_type: 'auto',
    });
    console.log('file upload result:', uploadResult);
    return uploadResult;
  } catch (error) {
    console.error('Cloudinary upload failed:', error);
    throw error;
  } finally {
    try {
      await unlink(filepath);
    } catch (cleanupError) {
      console.error('Failed to delete local file:', cleanupError);
    }
  }
};

// (async function () {
//   // Configuration

//   // Upload an image
//   const uploadResult = await cloudinary.uploader
//     .upload(
//       'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg',
//       {
//         public_id: 'main-sample',
//       }
//     )
//     .catch((error) => {
//       console.log(error);
//     });

//   console.log(uploadResult);

//   // Transform the image
//   const imageUrl = cloudinary.image('main-sample');

//   console.log(imageUrl);
// })();
