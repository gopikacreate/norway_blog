const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/defzpkljn/image/upload";

export const getOptimizedImage = (imagePath) => {
  return `${CLOUDINARY_BASE_URL}/f_webp/q_auto/${imagePath}`;
};
