import React from 'react';
import styled, { css } from 'styled-components';
import Container from '../styles/Container';
import Flex from '../styles/Flex';
import SectionItem from './SectionItem';

const Logo = styled.h1`
  font-size: 1.375rem;
`;

const MenuItem = styled.div`
  color: ${(prop) => (prop.submit ? '#e9512a' : 'inherit')};
  margin-right: ${(prop) => (prop.submit ? '1rem' : '0')};
  font-weight: ${(prop) => (prop.submit ? 'bold' : '0')};
`;

function Header() {
  return (
    <div>
      <Container size="regular" borderBottom>
        <Flex>
          <Flex flexOne>
            <Logo>properVideos</Logo>
          </Flex>

          <Flex flexOne contentCenter justifyCenter>
            <SectionItem name="Documentaries" active="true" />
            <SectionItem name="Interviews" />
            <SectionItem name="Music" />
            <SectionItem name="Everything" />
          </Flex>

          <Flex flexOne justifyEnd>
            <MenuItem submit>Submit Video</MenuItem>
            <MenuItem>About</MenuItem>
          </Flex>
        </Flex>
      </Container>

      <Container dark size="small" borderBottom>
        <Flex justifyBetween>
          <Flex flexOne>Currently Playing: Something video</Flex>

          <Flex flexOne contentCenter justifyCenter>
            toggle
          </Flex>

          <Flex flexOne justifyEnd>
            Up Next: Another some video about something
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}

export default Header;
