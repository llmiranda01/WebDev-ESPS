import { useEffect, useState } from "react";
import CardComida from "../components/CardComida";

const API_URL = "https://raw.githubusercontent.com/proflucassousa/api-comida/main/apicomida.json"

function Comidas() {
    const [comidas, setComidas] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState("")

    useEffect(() => {
        async function buscarComidas(){
            try{
                const resposta = await fetch(API_URL)
                const dados = await resposta.json()

                setComidas(dados)
            } catch(error){
                setErro(`${error} Não foi possível carregar as comidas`)
            } finally {
                setCarregando(false)
            }
        }
        buscarComidas()
    }, [])

    if(carregando){
        return <p>Carregando comidas...</p>
    }if(erro){
        return <p>{erro}</p>
    }

    return(
        <section className="page">
            <h2>Lista de Comidas</h2>
            <p>Veja algumas opções retornadas pela API.</p>

            <div className="grid">
                {comidas.map((comida) => (
                    <CardComida key={comida.id} comida={comida}/>
                ))}
            </div>
        </section>
    );
};

export default Comidas;