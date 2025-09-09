import WhyChooseUsClient from "@/components/trainingCorporate/WhyChooseUsClient";

export default function WhyChooseUsServer({ data }) {
  if (!data) return null;
  return <WhyChooseUsClient data={data} />;
}
