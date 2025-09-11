import ProgramStructureClient from "@/components/trainingStudent/ProgramStructureClient";

export default function ProgramStructureServer({ data }) {
  if (!data) return null;
  return <ProgramStructureClient data={data} />;
}
