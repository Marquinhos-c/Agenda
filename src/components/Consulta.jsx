import { Contatos } from "./Contato";

const contatos = [
    {
        nome: 'Marcos Costa',
        endereco: "Av Brasil, 15",
        telefone: "998542589"
    },
     {
        nome: 'Evenlly Lacerda',
        endereco: "Av Bandeirantes, 88",
        telefone: "998523241"
    },
     {
        nome: 'Gabriel Silva',
        endereco: "24 de Março, 44",
        telefone: "999854157"
    },
];

export function Consulta() {
    return(
        <div>
            <h2>Lista de Contatos</h2>
           {contatos.map((contato, index) => {
           return (
                <Contatos
                    key={index}
                    nome={contato.nome}
                    endereco={contato.endereco}
                    telefone={contato.telefone}
                />
                )
            })}
        </div>
    );
}