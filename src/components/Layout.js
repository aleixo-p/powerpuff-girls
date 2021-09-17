import styled from 'styled-components'

function Layout(props) {
  return (
    <LayoutStyled>
      <h1 className="page-title">Powerpuff Girls Search Page</h1>
      {props.children}
    </LayoutStyled>
  );
}

export default Layout;

const LayoutStyled = styled.div`
  position: relative;
  background-color: #282c34;
  width: clamp(300px, 80%, 1000px);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
  margin: 0 auto;
  .page-title{
    margin: 30px;
  }
`