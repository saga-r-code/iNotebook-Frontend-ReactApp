import React, { useContext, useEffect } from "react";
import ContextNote from "../Context/notes/contextNote";

const About = () => {
  // Access the context value which contains both `change` and `update`
  const {change, update, val} = useContext(ContextNote); // using destructing get value

  //same as component mount 
  useEffect(() => {
    update()
    // eslint-disable-next-line
  }, []) //empty array run it only runs once
  
  

  return (
    <div>
      This is the About page {change.name} is {change.age} years old.
      This is the About page {val.name} is {val.age} years old.
    </div>
  );
};

export default About;
