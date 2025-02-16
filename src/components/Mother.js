import { ChildComponent } from "./ChildComponent";

export const Mother = () =>{
    const greetParent = (childName)=>{      /* childName is passed as an argument in the parent component */
       alert(`Hello parent ${childName}`);      /* Here interpolating the string from the parent */
    }
    return <ChildComponent greetHandler = {greetParent} />  /* Passing function as a props among components */
}