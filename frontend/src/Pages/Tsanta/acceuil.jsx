import { Link } from "react-router-dom";

function acceuil(){
    return(
        <>
           <h1>Bonjour daholo</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo voluptate eius impedit omnis nesciunt recusandae eos sapiente officia cumque aut voluptates deserunt sit, corporis minima vitae nihil, maiores distinctio vel!</p>
            <Link role="button" to="/Bureau_entree">
             Bureau_entree
            </Link>
        </>
    )
}

export default acceuil;