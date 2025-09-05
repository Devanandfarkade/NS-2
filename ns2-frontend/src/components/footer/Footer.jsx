import { fetchNavbarData } from "@/lib/api";
import FooterClient from "./FooterClient";

export default async function Footer() {
  const data = await fetchNavbarData();
  const footer = data?.footer || null;

  return <FooterClient data={footer} />;
}
