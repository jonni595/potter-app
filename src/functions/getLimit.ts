export const getLimit = (text: string) => {
  if (text.length > 150) {
    return text.slice(0, 150) + "...";
  } else {
    return text;
  }
};
