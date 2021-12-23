import naves from "../naves.json"

const Republic = () =>{

    const republic = ["Venator", "Acclamator"];
    console.log(republic);
    
    return(
        <div>
            <ul>
            {naves.map(naves=>(
                <li key={naves.republic}>
                    <h3>{naves.name}</h3>
                    <img>{naves.img_url}</img>
                    <h4>{naves.model}</h4>
                    <p>{naves.description}</p>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Republic