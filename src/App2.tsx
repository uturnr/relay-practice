function App() {
  return (
    <div>
      <Controls>
        <Options />
        <Categories />
        <Filter />
      </Controls>
      <Projects>
        {
          projects.map((project) => <Project />)
        }
      </Projects>
    </div>
  );
}

export default App
