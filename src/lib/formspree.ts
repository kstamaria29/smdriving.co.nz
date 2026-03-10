type FormspreeError = {
  message?: string;
};

export const getFormspreeEndpoint = () =>
  (import.meta.env.VITE_FORMSPREE_ENDPOINT ?? "").trim();

export const submitToFormspree = async (
  endpoint: string,
  payload: Record<string, string>,
) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const isJson = response.headers
    .get("content-type")
    ?.includes("application/json");
  const result = isJson ? await response.json() : null;

  if (!response.ok) {
    const errors = Array.isArray(result?.errors)
      ? (result.errors as FormspreeError[])
      : [];
    const errorMessage =
      errors.map((item) => item.message).filter(Boolean).join(" ") ||
      "Something went wrong while sending your message. Please call or email instead.";

    throw new Error(errorMessage);
  }

  return result;
};
