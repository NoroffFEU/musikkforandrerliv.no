export interface ModalStore {
  isModalOpen: boolean;
  toggleModal: () => void;
  openModal: () => void;
  closeModal: () => void;
}

export interface SidebarStore {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export interface DarkmodeStore {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  enableDarkMode: () => void;
  disableDarkMode: () => void;
}

export interface RequestStore {
  isLoading: boolean;
  error: string | null;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}