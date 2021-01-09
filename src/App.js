

const name = "Miłosz"
const age = 16

function App() {
  return (
    <div className="App">
      <h1>Cześć {name}</h1>
        <h2>Jesteś {age >= 18 ? 'Pełnoletni' : 'Niepełnoletni'}</h2>
    </div>
  );
}

export default App;
