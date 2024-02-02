function App() {
  return (
    <div className="wrapper">
      {/* APP */}
      <div className="ghost">
        <div className="toolbar " />
        <div className="sidebar">
          <div className="w-full h-full flex flex-col">
            <div className="bar" />
            <div className="w-full h-full p-2" />
          </div>
        </div>
        <div className="display">
          <div className="rooms">
            <div className="container">
              <div className="bar" />
              <div className="messages" />
              <div className="handler" />
            </div>
            <div className="sidebar">
              <div className="w-full h-full flex flex-col">
                <div className="bar" />
                <div className="w-full h-full p-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
