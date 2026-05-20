import React, { Suspense } from 'react';

const Quiz = React.lazy(() => import('./Quiz'));

export default function CoursePage() {
  const [showQuiz, setShowQuiz] = React.useState(false);
  return (
    <div>
      <h2>Course Content</h2>
      <button onClick={() => setShowQuiz(true)}>Take Quiz</button>
      {showQuiz && (
        <Suspense fallback={<div>Loading quiz...</div>}>
          <Quiz />
        </Suspense>
      )}
    </div>
  );
}
