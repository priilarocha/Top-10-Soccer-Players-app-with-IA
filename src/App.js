import React from 'react';
import ListPlayers from './listplayers';

const App = () => {
  return (
    <section className="w-1140px">
      <table className="data-table">
      <h1>Top Soccer Players</h1>
      <ListPlayers />
      </table>
    </section>
  );
};

export default App;
