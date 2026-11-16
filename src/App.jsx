import  Button from "./Button";
const handleClick = () => console.log("Button clicked!");
let count = 0;
const handleIncrement = () => {
  count++;
  console.log(count);
}
const App = () => {
  const changeToGreen = () => {
    document.body.style.backgroundColor = "lightGreen";
  }
  const changeToBlue = () => {
    document.body.style.backgroundColor = "lightBlue";
  }
  return (
    <>
      <Button onClick={()=>console.log("Button Clicked!")}>
        Log Message
      </Button>

      <Button onClick={changeToGreen}>
        Change to Green
      </Button>

      <Button onClick={changeToBlue}>
        Change to Blue
      </Button>
    </>
    );
}
 export default App;
