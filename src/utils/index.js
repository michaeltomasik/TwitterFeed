import { backendUrl } from "../consts/index";

export const getFormatedURL = (count = 10, id) => {
  const url = new URL(backendUrl);
  url.searchParams.append("count", count);
  if (id) url.searchParams.append("afterId", id);

  return url.href;
};
