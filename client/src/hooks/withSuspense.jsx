import React, { Suspense } from "react";

const WithSuspense = ({ Childern }) => {
  return <Suspense fallback={<p>Loading...</p>}>{Childern}</Suspense>;
};

export default WithSuspense;
