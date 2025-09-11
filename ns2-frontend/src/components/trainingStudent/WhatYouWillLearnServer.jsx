// import WhatYouWillLearnClient from "./WhatYouWillLearnClient";

// export default function WhatYouWillLearnServer({ data }) {
//   if (!data) return null;
//   return <WhatYouWillLearnClient data={data} />;
// }

// app/components/trainingStudent/WhatYouWillLearnServer.jsx
import WhatYouWillLearnClient from "./WhatYouWillLearnClient";

export default function WhatYouWillLearnServer({ data }) {
  // filter all WHAT_YOU_WILL_LEARN sections
  const sections = Array.isArray(data)
    ? data.filter((section) => section.section_type === "WHAT_YOU_WILL_LEARN")
    : [];

  if (!sections || sections.length === 0) return null;

  return <WhatYouWillLearnClient data={sections} />;
}
