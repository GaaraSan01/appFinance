import { useState } from "react"
import Grid from "./grid"

export default function Form({handleAdd, transactionList, setTransactionList}){
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const [option, setOption] = useState()

    const generateId = () => Math.round(Math.random() * 1000)

    const conditionValidate = () =>{
        if(!description || !amount){
            alert("Informe a descrição e o valor!")
            return
        }else if(amount < 1){
            alert("O valor deve ser positivo!")
            return
        }
        const transaction = {
            id: generateId(),
            desc: description,
            amount: amount,
            options: option 
        }
        handleAdd(transaction)
        setDescription("")
        setAmount("")
    }
    return(
        <>
            <div className="form">
                <div className="input-content">
                    <label htmlFor="text">
                        Descrição
                    </label>
                    <input 
                        type="text" 
                        id="text" 
                        placeholder="Digite uma descrição..."
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className="input-content">
                    <label htmlFor="number">
                        Valor
                    </label>
                    <input 
                        type="number" 
                        id="number" 
                        placeholder="Digite o valor..."
                        onChange={e => setAmount(e.target.value)}
                    />
                </div>
                <div className="radius-group">
                    <input 
                        type="radio" 
                        name="radio" 
                        id="receita"
                        onChange={() => setOption(true)}
                    />
                    <label htmlFor="receita">
                        Receita
                    </label>
                    <input 
                        type="radio"
                        name="radio" 
                        id="Despesa"
                        onChange={() => setOption(false)}
                    />
                    <label htmlFor="Despesa">
                        Despesa
                    </label>
                </div>
                <button onClick={conditionValidate}>Aplicar</button>
            </div>
         <Grid itens={transactionList} setItens={setTransactionList}/>
        </>
    )
}