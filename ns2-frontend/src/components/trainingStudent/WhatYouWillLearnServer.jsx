import WhatYouWillLearnClient from "@/components/trainingStudent/WhatYouWillLearnClient";

export default function WhatYouWillLearnServer({ data }) {
  const sections = Array.isArray(data)
    ? data.filter((section) => section.section_type === "WHAT_YOU_WILL_LEARN")
    : [];

  if (!sections || sections.length === 0) return null;

  return <WhatYouWillLearnClient data={sections} />;
}
