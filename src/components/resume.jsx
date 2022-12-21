import {FaArrowAltCircleDown, FaArrowAltCircleUp, FaDollarSign}  from "react-icons/fa"
import ItemResume from "./ItemResume"


export default function Resume({income, expense, total}){
    return(
        <div className="resume">
            <ItemResume title={"Receitas"} resumo={income} Icon={<FaArrowAltCircleUp/>}/>
            <ItemResume title={"Despesas"} resumo={expense} Icon={<FaArrowAltCircleDown />}/>
            <ItemResume title={"Total"} resumo={total} Icon={<FaDollarSign />}/>
        </div>
    )
}