import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const API_URL = "https://raw.githubusercontent.com/proflucassousa/api-comida/main/apicomida.json"

function Detalhes(){
    const { id } = useParams()

    const [comida, setComida] =useState(null)
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState('')

    useEffect(() => {
        async function buscarComida() {
            try{
                const resposta = await fetch(API_URL)
                const dados = await resposta.json()

                const comidaEncontrada = dados.find((item) => item.id === Number(id))

                if(!comidaEncontrada){
                    setErro("Comida não encontrada.")
                    return
                }

                setComida(comidaEncontrada)
            }catch (error){
                setErro({error})
            }finally{
                setCarregando(false)
            }
        }
        buscarComida()
    }, [id])

    if(carregando){
        return <p>Carregando detalhes...</p>
    }
    if(erro){
        return <p>{erro}</p>
    }

    return(
        <section className='page detalhes'>
            <Link className="voltar" to='/comidas'>
                Voltar
            </Link>
            <h2>{comida.nome}</h2>
            <p>{comida.descricao}</p>

            <div className='info'>
                <p><strong>Categoria:</strong> {comida.categoria}</p>
                <p><strong>Preço:</strong> {comida.preco.toFixed(2)}</p>
            </div>

            {comida.ingredientes && (
                <div>
                    <h3>Ingredientes</h3>
                    <ul>
                        {comida.ingredientes.map((ingrediente,index) => (
                            <li key={index}>{ingrediente}</li>
                        ))}
                    </ul>
                </div>

            )
            }
            {comida.adicionais && (
                <div>
                    <h3>Adicionais</h3>
                    <ul>
                        {comida.adicionais.map((adicional,index) => (
                            <li key={index}>{adicional}</li>
                        ))}
                    </ul>
                </div>

            )
            }
        </section>
    );
};

export default Detalhes