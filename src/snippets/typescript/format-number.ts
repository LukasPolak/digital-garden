export const formatNumber = (number: number) => {
  if (!number) {
    return "";
  }

  try {
    return new Intl.NumberFormat("en-US", {
      notation: "compact",
    }).format(number);
  } catch (e) {
    console.error(e);

    return "";
  }
};
