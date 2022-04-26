import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  return (
    <h2>Hello www!</h2>
  )
}

root.render(<App />);
