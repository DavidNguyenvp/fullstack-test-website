export const getEnv = (key: string) => {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem(`env.${key}`) || " ";
  } else {
    return " ";
  }
};
