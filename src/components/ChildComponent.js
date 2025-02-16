export const ChildComponent = (props) =>{
    return <div>
        <button onClick={() => props.greetHandler('child')}>Greet Parent</button>   {/* using arrow function we are passing values from child to parent */}
    </div>
}