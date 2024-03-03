import { useRouter } from "next/router";
import type { UrlObject } from "url";

/**
 * A hook for handling client-side transitions without running data fetching methods again
 *
 * @return `shallowPush` function
 *
 * ---
 *
 * @example
 *  const { shallowPush } = useShallowPush();
 *  shallowPush("/foo");
 */
export const useShallowPush = () => {
  const router = useRouter();

  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `locale`, `scroll` and `unstable_skipClientCache`
   */
  const shallowPush = (
    url: UrlObject | string,
    as?: string | undefined,
    options?: {
      locale?: string | false;
      scroll?: boolean;
      unstable_skipClientCache?: boolean;
    },
  ) => {
    void router.push(url, as, { ...options, shallow: true });
  };

  return { shallowPush };
};
