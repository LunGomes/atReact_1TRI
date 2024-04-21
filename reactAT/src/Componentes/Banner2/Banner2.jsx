import cll1 from '../../assets/cll1.svg'
import cll2 from '../../assets/cll2.svg'
 
function Banner2(){
    return(
        <>
            <div className="container2">
                <div className='caixaTextos'>
                    <h1 className="titulo">Bem-vindo à revolução dos vídeos!</h1>
                    <p className="texto">Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.</p>
                    <button className='botao'>Baixe o App</button>
                </div>  
                <img src={cll1} className="imgCll"></img>
                <img src={cll2} className="imgCll"></img>
            </div>
        </>
    )
}
 
export default Banner2