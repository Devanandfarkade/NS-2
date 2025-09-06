import VisionSectionClient from "./VisionSectionClient";

export default function VisionSection({ data }) {
  if (!data) return null;

  return <VisionSectionClient data={data} />;
}
