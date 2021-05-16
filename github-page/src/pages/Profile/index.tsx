import React  from 'react';
import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab } from './style';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';


const Profile: React.FC = () =>  {
    const TabContent = () =>  (
        <div className="content">
            <RepoIcon />
            <span className="label">Repositorios</span>
            <span className="number">23</span>
        </div>
    )

    return (
        <Container>
            <Tab className="desktop">
                <div className="wrapper">
                    <span className="offset" />
                    <TabContent />
                </div>

                <span className="line" />
            </Tab>
            <Main>
                <LeftSide>
                    <ProfileData 
                        username={'Irrigador'}
                        name={'Odrenion Fordematic'}
                        avatarUrl={'https://i.pinimg.com/564x/b6/fd/03/b6fd03155cfc00cc3ef65e2c22a27409.jpg'}
                        followers={100}
                        following={7}
                        company={'Nome da empresa'}
                        location={'Mossoró/Natal, Brasil'}
                        email={'email@email.com'}
                        blog={'https://irrigador.github.io/ProjetOng/'}
                    />
                </LeftSide>

                <RightSide>
                    <Tab className="mobile">
                        <TabContent />
                        <span className="line" />
                    </Tab>

                    <Repos>
                        <h2>Repositorios Aleatorios</h2>

                        <div>
                            {[1, 2, 3, 4, 5, 6].map (n => (
                                <RepoCard
                                    key={n}
                                    username={'Odrenion Fordematic'}
                                    reponame={'Repo cabeça de dragão'}
                                    description={'Nesse repositorio existe a cabeça de um dragão'}
                                    language={n % 3 === 0 ? 'Typescript' : 'Javascript'}
                                    stars={8}
                                    forks={4}
                                />
                            ))}
                        </div>
                    </Repos>
                    <CalendarHeading>
                        Calendario aleatorio (Não representa os dados atuais)
                    </CalendarHeading>

                    <RandomCalendar />
                </RightSide>
            </Main>
        </Container>

    )
};

export default Profile;