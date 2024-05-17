import { useState, useCallback } from "react";

export function useUpdateState() {
  const [update, setUpdate] = useState(false);

  const triggerUpdate = useCallback((shouldUpdate: boolean) => {
    setUpdate(shouldUpdate);
  }, []);

  return { update, triggerUpdate };
}
