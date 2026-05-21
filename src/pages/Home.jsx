import { Link } from 'react-router-dom'

function Home(){

    return (
        <section className="page home">
            <h2>Bem-vindo ao App Comidas</h2>
            <p>

                Nesta aplicação, vamos consumir uma API de comidas usando React,
                React Router Dom e Vite.

            </p>

            <Link className='btn' to='/comidas'>
                Ver Comidas
            </Link>
        </section>
    );
};

export default Home;