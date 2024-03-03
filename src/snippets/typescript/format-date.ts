export const formatDate = (date: Date) => {
  if (!date) {
    return "";
  }

  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  } catch (e) {
    console.error(e);

    return "";
  }
};
