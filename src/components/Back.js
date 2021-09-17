import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

function Back() {
  const history = useHistory();

  return (
    <BackStyled onClick={() => history.goBack()}>Go Back</BackStyled>
  );
}

export default Back;

const BackStyled = styled.button`
  position: relative;
  background: #ffffff;
  border: 2px solid #ffffff;
  padding: 5px 10px;
  cursor: pointer;
`