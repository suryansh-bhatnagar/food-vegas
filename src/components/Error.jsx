import { useRouteError } from "react-router-dom";

const Error =()=>{

    const err = useRouteError()
    return <>
    
    <h2>Opps!!</h2>
    <div>Something went wront</div>
    <h3>{err.status + " : " + err.statusText}</h3>
    </>
}

export default Error;