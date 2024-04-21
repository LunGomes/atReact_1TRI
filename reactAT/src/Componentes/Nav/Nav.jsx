import { Link } from 'react-router-dom';

function Nav(){
  
    return(
        <>
        <div className="container4">
            <Link to="/" className="pags">Home</Link>
            <Link to="/sobre" className="pags">Sobre</Link>
            <Link to="/contato" className="pags">Contato</Link>
        </div>
        </>
    )
}
 
export default Nav

/*
const botaoHome = screen.getByTestId(botao-Home);
    async await userEvent.click(botaoHome);
    expect(window.location.pathname).toEqual('/Home')

    const navigate = useNavigate();
    const irHome = () => {
        navigate('/');
    }
*/