import { Link } from "react-router-dom";

import { HeaderStyled, Menu, LinkMenu } from '../../styles';

function Header(){
    return (
        <HeaderStyled>
            <h2>News Time App</h2>  

            <Menu>
                <Link style={{textDecoration: 'none'}} to="/">
                    <LinkMenu>Home</LinkMenu>
                </Link>
                
                <Link style={{textDecoration: 'none'}} to="/contato">
                    <LinkMenu>Contato</LinkMenu>
                </Link>
            </Menu>
        </HeaderStyled>
    )
}

export default Header;