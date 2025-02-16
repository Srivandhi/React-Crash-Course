import {Greet} from './components/Greet';  /* component to be used is imported here */
import { Message } from './components/Message';
import { Mother } from './components/Mother';
import { ClickHandler } from './components/ClickHandler';
import { ConditionalStat } from './components/ConditionStat';


import './App.css';

function App() {
  return (
    <div className="App">
        {/* <Greet name='first' userName='sri' />  we can use this component as many times by simply copying the tag
        <Greet name='first' userName='Ssss'>
           <button>Action</button>
          </Greet>  
        <Greet name="second" userName='aaa'> here name is the property specified as an attribute
            <p>This is the children Props</p>
        </Greet>   */}
        {/* <Message /> */}
        {/*   <Mother /> */}
          
        <ConditionalStat />

        
    </div>
  );
}

export default App;
