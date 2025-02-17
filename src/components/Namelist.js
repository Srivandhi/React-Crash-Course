export const Namelist = () =>{
    const names = ['Hello','Good','Morning','All'];
    return <div>
        {
            names.map((name)=>{
                return <h2 key={name}>{name}</h2>
            })
        }
    </div>
}