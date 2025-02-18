import {Greet} from './components/Greet';  /* component to be used is imported here */
import { Message } from './components/Message';
/* import { Mother } from './components/Mother';
import { ClickHandler } from './components/ClickHandler';
import { ConditionalStat } from './components/ConditionStat';
import { Namelist } from './components/Namelist';
import { StyleSheet } from './components/StyleSheet';
import { Inline } from './components/Inline'; */
import './appStyles.css';
/* import styles from './appStyles.module.css';
import { Form } from './components/Form';
import { PostList } from './components/PostList';
import { PostForm } from './components/PostForm'; */

import NAMES from './components/data.json';
import { useState,useTransition } from 'react';


import './App.css';

function App() {

  const [query,setQuery] = useState('');
  const [inputValue,setInputValue] = useState('');
  const [isPending,startTransition] = useTransition(); /* returns two values */
  const changeHandler = (event)=>{
    setInputValue(event.target.value);
    startTransition(()=> setQuery(event.target.value))
  }
  const filterNames = NAMES.filter(item=>{
    return item.firstName.includes(query) || item.lastName.includes(query);
  })

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
          
        {/* <ConditionalStat /> */}
        {/* <Namelist /> */}
        {/* <StyleSheet />
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
        <Inline /> */}
        {/* <Form />
        <PostList /> */}
        {/* <PostForm /> */}


          <input type="text" value={inputValue} onChange = {changeHandler}></input>
          {isPending && <p>Updating list...</p>}
        {
          filterNames.map((item)=>(
            <p key ={item.id}>{item.firstName} {item.lastName}</p>
            
          ))
        }

        
    </div>
  );
}

export default App;
