import imgSeta from '../../assets/seta.svg'
import imgCorporativo from '../../assets/imgCorporativo.svg'
function Planos(){
    return(
        <>
        <section className="secao">
            <div className="cardIndv">
                <div className="headerCheio">
                    <h2>Individual</h2>
                </div>
                <div className='usuariosDiv'>
                    <p className='usuariosTxt'>1 Usuário</p>
                </div>
                <div className="opcao">
                    <p className="opcaoTxt">10 vídeos <strong>R$15</strong></p>
                    <img src={imgSeta} className='imgSeta'></img>
                </div>  
                <img src={imgSeta} className='imgSeta2'></img>
                <button className="botaoCheio">Cadastrar</button>
            </div>

            <div className="cardIndv">
                <div className="header">
                    <h2>Profissional - Times</h2>
                </div>
                <div className='usuariosDiv'>
                    <p className='usuariosTxt2'>1-10 Usuários</p>
                </div>
                <div className="opcao">
                    <p className="opcaoTxt">Vídeos Ilimitados<strong>R$40</strong></p>
                    <img src={imgSeta} className='imgSeta3'></img>
                </div>  

                <div className='usuariosDiv'>
                    <p className='usuariosTxt2'>+10 Usuários</p>
                </div>
                <div className="opcao">
                    <p className="opcaoTxt">Vídeos Ilimitados<strong>R$20</strong></p>
                    <img src={imgSeta} className='imgSeta3'></img>
                </div>  

                <img src={imgSeta} className='imgSeta4'></img>
                <button className="botaoVazio">Cadastrar</button>
            </div>

            <div className="cardIndv">
                <div className="header">
                    <h2>Corporativo</h2>
                </div>
                <img src={imgCorporativo} className='imgCorp'></img>
                <button className="botaoVazio">Entre em Contato</button>
            </div>
        </section>
        </>
    )   
}

export default Planos
