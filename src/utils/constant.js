export const truncate = (text, n) =>
  text?.length > n ? text.substr(0, n - 1) + "..." : text;
