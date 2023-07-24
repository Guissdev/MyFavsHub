import './Colaborador.css'

const Colaborador = ({nome, imagem, corDeFundo, onDelete }) => {                            //opcional no lugar de props
    return (
    <div className='colaborador'>
        
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
        </div>
        <button onClick={onDelete} className="botao">Excluir Card</button>
    </div>
    )
}

export default Colaborador