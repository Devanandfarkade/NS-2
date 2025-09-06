import AboutCorporateClient from "@/components/trainingCorporate/AboutCorporateClient";

export default function AboutCorporateServer({ data }) {
  if (!data) return null;
  return <AboutCorporateClient data={data} />;
}
