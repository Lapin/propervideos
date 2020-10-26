import styled from 'styled-components';

const Container = styled.div`
  display: ${(props) => {
    if (props.display === 'flex') return 'flex';
    if (props.display === 'inline') return 'inline';
    if (props.display === 'block') return 'block';
  }};

  padding: ${(props) => {
    if (props.size === 'small') return '0.375rem 1rem';
    if (props.size === 'regular') return '1.5rem 1rem';
  }};

  background-color: ${(props) => {
    if (props.dark) return '#EFECDD';
    else return '#FFFEF9';
  }};

  border-top: ${(props) => {
    if (props.borderTop) return '1px solid #E6E3D7';
    else return '0';
  }};

  border-bottom: ${(props) => {
    if (props.borderBottom) return '1px solid #E6E3D7';
    else return '0';
  }};
`;

export default Container;
