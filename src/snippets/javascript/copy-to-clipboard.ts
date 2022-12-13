export const copyToClipboard = async ({
  data,
  onError,
  onSuccess,
}: {
  data: string;
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}) => {
  try {
    await navigator.clipboard.writeText(data);
    onSuccess?.();
  } catch (error: unknown) {
    onError?.(error);
  }
};
