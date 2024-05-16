// export const useToggleSearch = () =>
//   useState(() => ({
//     open: false,
//     content: 0,
//     // 0 - all, 1 - store, 2 - blog
//   }));

export const useInstant = () => useState(() => false);
export const useMenu = () => useState(() => false);

export const useVideoModal = () =>
  useState(() => ({
    open: false,
    src: null,
  }));

export const useUSMap = () =>
  useState(() => ({
    state: "california",
  }));
