import React from 'react';
import Header from './Header';
import DataCollection from './DataCollection';
import DataAnalysis from './DataAnalysis';
import DataVisualization from './DataVisualization';

function App() {
  return (
    <div className="app">
      <Header />
      <DataCollection />
      <DataAnalysis />
      <DataVisualization />
    </div>
  );
}

export default App;
