import { Link } from 'react-router-dom';

function Header() {

    return (
        <header className=''>
            <h1>App Comidas</h1>

            <nav>
                <Link to='/'>Home</Link>
                <Link to='/comidas'>Comidas</Link>
                <Link to='/sobre'>Sobre</Link>
            </nav>

        </header>
    );

}

export default Header;