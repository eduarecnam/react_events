const App = () => {
  const handleLinkClick = (event) => {
    event.preventDefault();
    console.log("Link click prevented!");
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    console.log("Form submission prevented!");
    const formData = new FormData(event.target);
    const name = formData.get("message");
    console.log("submitted Data:", { name });
  };
  
  return (
    <div>
       <a 
          href="https://example.com"
          onClick={handleLinkClick}  
        > 
          Link 
        </a>

        <form
          style={{ display: "flex", gap: "10px", marginTop: "20px" }}
          onSubmit={handleFormSubmission}
        >
          <input
            type="text"
            name="message"
            placeholder="Enter your message"
            style={{padding: "5px"}}
          />
          <button type="submit">Submit</button>
        </form>
    </div>
    );
};


export default App;
