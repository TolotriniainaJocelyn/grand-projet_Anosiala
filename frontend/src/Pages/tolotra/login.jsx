import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div>
                <h2>login</h2>
                <form>
                    <div className='mb-3'>
                          <label htmlFor="email"><strong>Email</strong></label>
                          <input type="email" placeholder='Entrer Email' name ='email' className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                          <label htmlFor="password"><strong>password</strong></label>
                          <input type="password" placeholder='Entrer password' name ='password' className='form-control rounded-0' />
                    </div>
                    <button type='submit' className='btn btn-succes w-100 rounded-0'>Connexion</button>
                    <p>bonjour</p>
                    {/* Remplacez la balise d'ancrage <a> par un composant Link */}
                    <Link to="/" className='btn btn default w-100 bg-light rounded-0 text-decoration'>Accueil</Link>
                </form>
            </div>

            {/* Utilisez le composant Link de React Router pour la navigation */}
            <Link to="/Bureau_entree" className='btn btn-default w-100 bg-light rounded-0 text-decoration'>Bureau_entree</Link>
        </>
    )
}

export default Login;
