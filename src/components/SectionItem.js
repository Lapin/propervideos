import React from 'react';
import styled from 'styled-components';

const SectionItemWrap = styled.div`
  margin: 0 0.6875rem;
`;

const SelectionText = styled.div`
  font-size: 1.125rem;
  font-weight: ${(props) => (props.active ? 'bold' : 'regular')};
`;

const UnderLine = styled.div`
  background-color: ${(props) =>
    props.active ? '#e9512a' : '#E6E3D7'};
  height: 4px;
  border-radius: 100px;
  margin-top: 4px;
`;

function SectionItemItem(props) {
  if (props.active === 'true') {
    return (
      <SectionItemWrap href="#">
        <SelectionText active>{props.name}</SelectionText>
        <UnderLine active />
      </SectionItemWrap>
    );
  } else
    return (
      <>
        <SectionItemWrap href="#">
          <SelectionText>{props.name}</SelectionText>
          <UnderLine />
        </SectionItemWrap>
      </>
    );
}

export default SectionItemItem;
