import React, { Suspense } from 'react';

const Chart = React.lazy(() => import('./Chart'));

export default function AnalyticsPanel({ showChart }) {
  return (
    <div>
      <h2>Analytics</h2>
      {showChart && (
        <Suspense fallback={<div>Loading chart...</div>}>
          <Chart />
        </Suspense>
      )}
    </div>
  );
}
