import { useState } from "react";
import Card from "./Card";

function Cards() {
    const [items, setItems] = useState([
        { id: 1, img: '/img/arvore.png', stat: "" },
        { id: 1, img: '/img/arvore.png', stat: "" },
        { id: 2, img: '/img/dia-mundial-do-meio-ambiente.png', stat: "" }, 
        { id: 2, img: '/img/dia-mundial-do-meio-ambiente.png', stat: "" }, 
        { id: 3, img: '/img/energia-solar.png', stat: "" }, 
        { id: 3, img: '/img/energia-solar.png', stat: "" },
        { id: 4, img: '/img/escassez-de-agua.png', stat: "" },
        { id: 4, img: '/img/escassez-de-agua.png', stat: "" }, 
        { id: 5, img: '/img/folha.png', stat: "" },
        { id: 5, img: '/img/folha.png', stat: "" },
        { id: 6, img: '/img/lixeira-de-reciclagem.png', stat: "" },
        { id: 6, img: '/img/lixeira-de-reciclagem.png', stat: "" },
        { id: 7, img: '/img/meio-ambiente.png', stat: "" },
        { id: 7, img: '/img/meio-ambiente.png', stat: "" },
        { id: 8, img: '/img/plantar.png', stat: "" },
        { id: 8, img: '/img/plantar.png', stat: "" },
        { id: 9, img: '/img/poluicao-da-agua.png', stat: "" },
        { id: 9, img: '/img/poluicao-da-agua.png', stat: "" },
        { id: 10, img: '/img/turbina.png', stat: "" },
        { id: 10, img: '/img/turbina.png', stat: "" }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)
    const [message, setMessage] = useState("")

    const messages = [
        "Plante uma árvore e ajude a combater a mudança climática.",
        "Reduza, Reutilize e Recicle para proteger o meio ambiente.",
        "Economize água e ajude a preservar nossos recursos hídricos.",
        "A energia solar é uma fonte limpa e renovável.",
        "Evite a poluição do ar optando por transporte sustentável.",
        "A reciclagem ajuda a reduzir o desperdício e conservar recursos.",
        "Preserve a biodiversidade protegendo os habitats naturais.",
        "Participe de campanhas de limpeza e mantenha a natureza limpa.",
        "Reduza o consumo de plástico para proteger os oceanos.",
        "Promova a sustentabilidade adotando práticas ecológicas diárias."
    ]

    function check(current){
        if(items[current].id === items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setMessage(messages[items[current].id -1])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
            {message && <p className="message">{message}</p>}
        </div>
    )
}

export default Cards;