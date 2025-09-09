import CompanyGalleryClient from "./CompanyGalleryClient";

export default function CompanyGallery({ data }) {
  if (!data) return null;

  return <CompanyGalleryClient data={data} />;
}
