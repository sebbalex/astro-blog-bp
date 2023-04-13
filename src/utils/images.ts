import path from "path";
export function dynamicViteAssetImport(imageFileName: string) {
  const filename = path.parse(imageFileName);
  
  const {name, ext} = filename;
  switch (ext) {
    case ".webp":
      return import(`../../public/assets/images/${name}.webp`);
    case ".jpg":
      return import(`../../public/assets/images/${name}.jpg`);
    case ".png":
      return import(`../../public/assets/images/${name}.png`);
    case ".svg":
      return import(`../../public/assets/images/${name}.svg`);
    case ".gif":
      return import(`../../public/assets/images/${name}.gif`);
    case ".avif":
      return import(`../../public/assets/images/${name}.avif`);
    case ".jpeg":
      return import(`../../public/assets/images/${name}.jpeg`);
    default:
      return import(`../../public/assets/images/${name}.jpg`);
  }
}