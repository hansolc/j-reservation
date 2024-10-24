export const getUserId = async () => {
  try {
    const res = await fetch("https://reserva.free.beeceptor.com/todos");
    return res.json();
  } catch (error) {
    console.error(error);
  }
};
