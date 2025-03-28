import React, { Suspense } from 'react';
import PublicRoutes from 'routes/PublicRoutes';
// import PrivateRoutes from 'routes/PrivateRoutes';

function App() {
  return (
    <>
      <Suspense fallback={'Loading...'}>
        <PublicRoutes />
        {/* <PrivateRoutes /> */}
      </Suspense>

    </>
  );
}

export default App;
