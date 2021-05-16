import React from 'react';
import { Container,
    Flex,
    Avatar,
    Row,
    PeopleIcon,
    Colum,
    CompanyIcon,
    LocationIcon,
    EmailIcon,
    BlogIcon } from './style';

interface Props {
    username: string;
    name: string;
    avatarUrl: string;
    followers: number;
    following: number;
    company?: string;
    location?: string;
    email?: string;
    blog?: string;
}

const ProfileData: React.FC<Props> = ({
    username,
    name,
    avatarUrl,
    followers,
    following,
    company,
    location,
    email,
    blog,
}) => {
    return (
        <Container>
            <Flex>
                <Avatar src={avatarUrl} alt={username} />
                <div>
                    <h1>{name}</h1>
                    <h2>{username}</h2>
                </div> 
            </Flex>

            <Row>
                <li>
                    <PeopleIcon />
                    <b>{followers}</b>
                    <span>Followers</span>
                    <span>·</span>
                </li>

                <li>
                    <b>{following}</b>
                    <span>following</span>
                </li>
            </Row>

            
            <Colum>
                {company && (
                    <li>
                        <CompanyIcon />
                        <span>{company}</span>
                    </li>
                )}

                {location && (
                    <li>
                        <LocationIcon />
                        <span>{location}</span>
                    </li>
                )}

                {email && (
                    <li>
                        <EmailIcon />
                        <span>{email}</span>
                    </li>
                )}

                {blog && (
                    <li>
                        <BlogIcon />
                        <span>{blog}</span>
                    </li>
                )}
            </Colum> 
        </Container>
    );  
};

export default ProfileData;