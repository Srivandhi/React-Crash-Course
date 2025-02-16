export const ConditionalStat = ()=>{
    const isLoggedIn = false
    /* return <div>user {isLoggedIn ? 'logged in' :'not logged in'}</div> */
    return <div> user {isLoggedIn && 'Srivandhi'}</div>
}