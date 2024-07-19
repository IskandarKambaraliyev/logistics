export const useInstant = () => useState(() => false);
export const useMenu = () => useState(() => false);

export const useVideoModal = () =>
  useState(() => ({
    open: false,
    src: null,
    internal: false,
  }));

export const useUSMap = () =>
  useState(() => ({
    state: "california",
  }));
