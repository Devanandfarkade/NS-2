import WhoWeAreClient from "./WhoWeAreClient";

export default function WhoWeAre({ data }) {
  if (!data) return null;
  return <WhoWeAreClient data={data} />;
}
