import IndustriesServedClient from "@/components/trainingCorporate/IndustriesServedClient";

export default function IndustriesServedServer({ data }) {
  if (!data) return null;
  return <IndustriesServedClient data={data} />;
}
