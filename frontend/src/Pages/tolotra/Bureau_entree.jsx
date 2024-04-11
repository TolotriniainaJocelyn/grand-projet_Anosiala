import { Link } from "react-router-dom";

function Bureau_entree(){
    return(
        <>
            <Link role="button" to="/">
                acceuil
            </Link>
            <Link role="button" to="/login">
                login
            </Link>
        </>
    )
}

export default Bureau_entree;