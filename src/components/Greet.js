export const Greet = (props) =>{         /* if we use export here it is called as named export we have to import with the same name
                                        if we are using this then we need import as {Greet} */
    return (
        <div>
        <h1>Your {props.name} Component {2*2} created by {props.userName} </h1>
        {props.children} 
        </div>/* this is called jsx- it describes how the UI should look like  */
        ) 
}
/* export default Greet;      *//* component to be used is exported to the root component 
                              use of default keyword is we can import the component with any name*/

                            