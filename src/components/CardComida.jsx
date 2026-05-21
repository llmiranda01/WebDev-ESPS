import { Link } from 'react-router-dom';

function CardComida({comida}){

    return(
        <article className='card'>
            <div className='card-img'>
                <span>{comida.categoria}</span>
            </div>

            <div className='card-content'>
                <h3>{comida.nome}</h3>
                <p>{comida.descricao}</p>
                <strong>R$ {comida.preco.ToFixed(2)}</strong>


                <Link className='btn' to={`/comidas/${comida.id}`}>
                    Ver detalhes
                </Link>
            </div>
        </article>
    );
};

export default CardComida;