// Here we will export all the stores from Zustand.

import { useModalStore, useSidebarStore, useDarkModeStore } from "./UIStore/useUIStore.js";
import { useRequestStore } from "./store/APIStore/useRequestStore.js";

export { useModalStore, useSidebarStore, useDarkModeStore, useRequestStore };
