import { useOnAppLoad } from "./use-on-app-load";

const Page = () => {
  useOnAppLoad(() => {});

  return <main />;
};

export default Page;
