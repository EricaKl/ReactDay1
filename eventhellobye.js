function DisplayEvent()
{
   

    const showAlertHi = () => {
        
        alert("Hello");
      }

      const showAlertBye = () => {
        alert("Bye");
      }

    return(
    <div>

        <div>
        {/* <button onClick={() => alert("Hello!")}>Say Hello</button> */}
            <button  type = "button" onClick={showAlertHi}>Click Me!!</button>
        </div>

         <div>
            <button  type= "button" onClick={showAlertBye}>Click Me!!</button>
         </div>

    </div>
        
    );

    
}


export default DisplayEvent;