const App = () => {
  const handleParentClick = () => console.log("Parent clicked!");
  const handleChildClick = (e) => {
    e.stopPropagation();
    console.log("Child clicked!");
  };
  
  return (
    <div
      onClick={handleParentClick}
      style={{
        padding: "30px",
        background: "lightgreen",
        textAlign: "center",
      }}
    >

      Parent
      <div
        onClick={handleChildClick}
        style={{
          marginTop: "20px",
          padding: "20px",
          background: "lightblue",
          textAlign: "center",
        }}
      >   
        Child
      </div>
    </div>
    );
};


export default App;
