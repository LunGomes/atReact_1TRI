import imgYT from '../../assets/imgYT.svg' 
import imgTTK from '../../assets/imgTTK.svg' 
import imgFACE from '../../assets/imgFACE.svg' 
import imgINSTA from '../../assets/imgINSTA.svg' 

export default function Card(){
    return(
        <>
            <div className='container'>
                <div className='card1'>
                    <div className='cardTop'>
                        <h1 className='cardNum'>01</h1>
                        <img className='cardImgs' src={imgYT}></img>
                    </div>
                    <h1 className='tituloCard'>Youtube</h1>
                    <p className='textoCard'>Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.</p>
                </div>
                <div className='card2'>
                    <div className='cardTop'>
                        <h1 className='cardNum'>02</h1>
                        <img className='cardImgs' src={imgTTK}></img>
                    </div>
                    <h1 className='tituloCard'>Tiktok</h1>
                    <p className='textoCard'>Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.</p>
                </div>
                <div className='card3'>
                    <div className='cardTop'>
                        <h1 className='cardNum'>03</h1>
                        <img className='cardImgs' src={imgFACE}></img>
                    </div>
                    <h1 className='tituloCard'>Facebook</h1>
                    <p className='textoCard'>Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.</p>
                </div>
                <div className='card4'>
                    <div className='cardTop'>
                        <h1 className='cardNum'>04</h1>
                        <img className='cardImgs' src={imgINSTA}></img>
                    </div>
                    <h1 className='tituloCard'>Instagram</h1>
                    <p className='textoCard'>Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.</p>
                </div>
            </div>
        </>
    )
}