
export default function ItemResume({title, resumo, Icon}){
    return(
        <div className="resItem">
            <div className="header-item">
                <p>
                    {title}
                </p>
                {Icon}
            </div>
            <span>
                {resumo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
            </span>
        </div>
    )
}