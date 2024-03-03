// Precondition:
//
// pathname: "companies/[id]",
// query: {
//   "id": "foo",
// },

import { useGetRouteCompanyId } from "./use-get-route-company-id";

const Page = () => {
  const { companyId } = useGetRouteCompanyId();

  companyId; // "foo"

  return <main />;
};

export default Page;
