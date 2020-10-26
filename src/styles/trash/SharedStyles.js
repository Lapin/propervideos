import styled from 'styled-components';

export default () => {
  const Logo = styled.logo`
    margin: 0;
    font-size: 1.375rem;
    font-weight: bold;
  `;

  const Divider = styled.divider`
    border-bottom: ${(props) =>
      props.placement === 'bottom' ? '1px solid #e6e3d7' : 'none'};
    border-top: ${(props) =>
      props.placement === 'top' ? '1px solid #e6e3d7' : 'none'};
  `;

  const Wrapper = styled.wrapper`
    padding: ${(props) =>
      props.size === 'small' ? '0.2rem 2rem' : '1rem 2rem'};
  `;

  const Navigation = styled.nav`
    .logo {
    }

    .flexR {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .navJust {
      justify-content: space-between;
    }

    background-color: #fffef9;
  `;
};
