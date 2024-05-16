import { useState } from "react";

function UpdateUseState(shouldUpdate?: boolean) {
  const [update, setUpdate] = useState(true);
  if (shouldUpdate) setUpdate(true);
  else setUpdate(false);

  return { update, setUpdate };
}
export default UpdateUseState;
