import React, { useState, useEffect} from 'react';
import About from "./commandOutputs/About.jsx"
import Resume from "./commandOutputs/Resume.jsx"
import Help from "./commandOutputs/Help.jsx"
import Gallery from './commandOutputs/Gallery.jsx';
import Contact from "./commandOutputs/Contact.jsx";
import Game from "./commandOutputs/Game.jsx"

//Import the data from the json in the project. This can be done WAYYY better
//with databases. However, we need a place to set the props for our cards displayed
import personalProjectData from "./commandOutputs/assets/personalProjectData"
import academicProjectData from "./commandOutputs/assets/academicProjectData"


//import all components

function ConsoleNav(){  
    //State of the current command input(empty first)
    const [command, setCommand] = useState('');
    //Terminal output state to dispaly the finished result of command components/fragments
    const [terminalOutput, setTerminalOutput] = useState([]);
    //The command mappings will map to different components
    const commandMappings = {
        help: <Help/>,
        about: <About/>,
        contact: <Contact/>,
        resume: <Resume/>,
        pprojects: <Gallery cards={personalProjectData} galleryType={"personal"}/>,
        aprojects: <Gallery cards={academicProjectData} galleryType={"academic"}/>,
        secret:<Game/>,
        //if clear, you will just be left with an empty terminal
        clear:[] 
      };


const handleKeyPress = (event) => {
    //ON EVERY KEY PRESS IN THE TERMINAL INPUT
    if (event.key === 'Enter') {
      if (command) { //if therre is a command in the input box
        //check if in the command mappings list
        if (commandMappings[command.toLowerCase()]) {
          if (command === 'clear') {
            setTerminalOutput([]);
          } else {
            //Otherwise, if the command exists, add the component in the map to the terminal outpu
            setTerminalOutput([...terminalOutput, commandMappings[command.toLowerCase()]]);
          }
        } else {
          //If the command does not exist, inform the user and maintain the current output state
          setTerminalOutput([...terminalOutput, <div>Command not found: '{command}'--  Type "help" below for a list of commands</div>]);
        }
        //reset that input
        setCommand('');

        //This is just used to autoscroll the screen if the elements fill up the veritcal space
        setTimeout(() => {
            const element = document.documentElement;
            //Smoothly scroll to the END block of the terminal div or output
            element.scrollIntoView({ behavior: 'smooth', block: 'end' });
          }, 140); 
      }
    }
  };
  //keep track of state of input box using props and state 
  const handleChange = (event) => {
    setCommand(event.target.value);
  };


return (
<>
  <div className="terminal">    

  <div> 


  {terminalOutput.map((output, index) => (
          <div key={index}>{output}</div>
        ))}
        
  </div>
  
<p>
<br></br>
<br></br>
ivansDevBox
Type "help" below for a list of commands
<br></br>
<br></br>

</p>
    <input id="input_field"
      type="text"
      autofocus placeholder=">"
      value={command} //bind the input tot he command state
      onChange={handleChange}
      onKeyUp={handleKeyPress}
      
    />


  </div>

    </>
);
}
    



export default ConsoleNav