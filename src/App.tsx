interface Props {
  test: boolean;
}

const test = '';

function App() {
  const Hello = ({ test }: Props) => (
    <div>{test && 'Welcome my react settings'}</div>
  );

  return (
    <div className="App">
      <Hello test />
    </div>
  );
}

export default App;
