const seperateIsostring = (dateTime?: string) => {
  if (dateTime && dateTime.includes("T")) {
    const [date, time] = dateTime.split("T");
    return { date, time };
  }
  return { date: "", time: "" };
};

export { seperateIsostring };
