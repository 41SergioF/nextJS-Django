import { HeaderContainer, Logo } from "./Header.style";

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <Logo src="/image/logo.png" ></Logo>
            </div>
            <p>Encontre uma professor perfeito!</p>
        </HeaderContainer>
    )
}

export default Header;
