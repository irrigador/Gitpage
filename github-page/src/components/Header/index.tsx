import React from 'react';

import { Container, GithubLogo, SearchForm } from  './styles';
import {ThemeName} from '../../styles/themes'

interface Props {
    themeName: ThemeName;
    setThemeName: (newName: ThemeName) => void;

}

const Header: React.FC<Props> = ({themeName, setThemeName}) => {
    function toggleTheme (){
        setThemeName(themeName === 'light' ? 'dark' : 'light');
    }
    
    return (
        <Container>
            <GithubLogo onClick={toggleTheme}/>
            <SearchForm>
                <input placeholder="Enter Username or Repo..." />
            </SearchForm>
        </Container>
    );

};
export default Header;