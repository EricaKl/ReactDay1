import React, {useState} from "react";

function Display({props})
{
    const [values, setValues] = useState(props);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };

    return (
        <form>
          <input 
            value={values.Name}
            onChange={handleInputChange}
            name="Name"
          />
          <input
            value={values.Address}
            onChange={handleInputChange}
            name="Address"
          />
         <input 
            value={values.Score}
            onChange={handleInputChange}
            name="Score"
          />
        </form>
  );
}


export default Display;
