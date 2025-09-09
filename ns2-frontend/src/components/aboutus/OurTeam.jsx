import OurTeamClient from "./OurTeamClient";

export default function OurTeam({ data }) {
  if (!data) return null;
  // This runs on the server (SSR-safe)
  return <OurTeamClient data={data} />;
}
