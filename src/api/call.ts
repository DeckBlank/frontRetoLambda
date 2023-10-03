import axios from "axios";

interface fetcherProps {
  url: string;
  data: any;
  method?: string;
  headers?: any;
}
export const callFetch = async ({
  url,
  data,
  method,
  headers,
}: fetcherProps) => {
  const response = await fetch(url, {
    method: method || "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
      ...headers,
    },
  });
  const status = response.status === 200 ? "success" : "error";

  const json = await response.json();

  return {
    status,
    ...json,
  };
};

export const callAxios = async ({
  url,
  data,
  method,
  headers,
}: fetcherProps) => {
  try {
    const response = await axios({
      method: method || "POST",
      url: url,
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
        ...headers,
      },
    });
    return {
      status: "success",
      ...response.data,
    };
  } catch (error: any) {
    console.log(error);

    return {
      status: "error",
      ...error.response.data,
    };
  }
};
