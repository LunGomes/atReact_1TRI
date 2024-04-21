import imgBanner from '../../assets/Hero image.svg'
 
function Banner(){
    return(
        <>
            <div className="container2">
                <div className='caixaTextos'>
                    <h1 className="titulo">Crie seus vídeos online</h1>
                    <p className="texto">Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
                    <button className='botao' >Começar Agora</button>
                </div>  
                <img src={imgBanner}></img>
            </div>
        </>
    )
}
 
export default Banner