interface Props {
  test: boolean;
}

function App() {
  const Hello = ({ test }: Props) => <div>{test && 'aaa'}</div>;

  return (
    <div className="App">
      <Hello test />
    </div>
  );
}

export default App;
