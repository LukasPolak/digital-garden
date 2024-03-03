import { useShallowPush } from "./use-shallow-push";

const Page = () => {
  const { shallowPush } = useShallowPush();
  shallowPush("/foo");

  return <main />;
};

export default Page;
