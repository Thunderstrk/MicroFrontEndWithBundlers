import { useLocalStorageSync } from "./useLocalStorageSync";

function useDrawer() {
  const { value, setItem } = useLocalStorageSync(
    "@micro-frontend-poc-2/appdrawer/open"
  );

  return {
    open: value,
    closeDrawer() {
      setItem(false);
    },
    openDrawer() {
      setItem(true);
    },
  };
}

export {useDrawer}
