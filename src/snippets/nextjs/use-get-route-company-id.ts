import { useRouter } from "next/router";

export type UseGetRouteParameter = (options: {
  parameter: string;
  onError?: () => void;
}) => {
  value: string | string[] | undefined;
};

/**
 * A hook for getting the value of a specified route parameter.
 * @param options.parameter The name of the route parameter to get.
 * @param options.onError A callback function to be called if the parameter is not found.
 *
 * @returns The value of the route parameter, or undefined if the parameter is not found.
 *
 * ---
 *
 * @example
 * const { value } = useGetRouteParameter({
 *  parameter: "id",
 * });
 */
export const useGetRouteParameter: UseGetRouteParameter = ({
  parameter,
  onError,
}) => {
  const router = useRouter();
  const value = router.query[parameter];

  if (!value && router.isReady) {
    onError?.();
  }

  return { value };
};

// To achieve the DRY principle and improve developer experience, we can create a specialized hook to retrieve a specific path parameter
export type SpecializedOptions = {
  onError?: () => void;
};

export const useGetRouteCompanyId = (options?: SpecializedOptions) => {
  const { value: companyId } = useGetRouteParameter({
    parameter: "company-id",
    ...options,
  });

  return { companyId };
};

export const useGetRouteWorkspaceId = (options?: SpecializedOptions) => {
  const { value: workspaceId } = useGetRouteParameter({
    parameter: "workspace-id",
    ...options,
  });

  return { workspaceId };
};

export const useGetRouteUserId = (options?: SpecializedOptions) => {
  const { value: userId } = useGetRouteParameter({
    parameter: "user-id",
    ...options,
  });

  return { userId };
};
