import iconDIS from '../../assets/iconDIS.svg'
import iconTWT from '../../assets/iconTWT.svg'
import iconINSTA from '../../assets/iconINSTA.svg'
import linha from '../../assets/linha.svg'
 
function TextoCTT(){
    return(
        <>
            <div className="container2">
                
                    <div className='caixaTextos2'>
                        <h1 className="titulo">Dúvidas e suporte, entre em contato:</h1>
                            <div className="containerIcons">
                                <img src={iconTWT} className="icons"></img>
                                <img src={iconINSTA} className="icons"></img>
                                <img src={iconDIS} className="icons"></img>
                            </div>
                    </div>  
                    <img src={linha} className='linha'></img>
                    <div className='caixaTextos'>
                        <div className='containerForm'>
                            <label className="nameForm2">Nome:</label>
                            <input className="form" type="email" id="email"/>
                        </div>
                        <div className='containerForm'>
                            <label className="nameForm">E-mail:</label>
                            <input className="form" type="email" id="email"/>
                        </div>
                        <div className='DIVcaixaMSG'>
                            <label className="nameForm">Mensagem:</label>
                            <input className="caixaMSG" type="email" id="email"/>
                            
                        </div>
                        <div className='botaoLado'>
                            <button className='botaoForm'>Enviar</button>
                        </div>
                    </div>  
                </div>
        </>
    )
}
 
export default TextoCTT