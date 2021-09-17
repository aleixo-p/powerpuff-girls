import styled from 'styled-components'

function EpisodeDisplay(props) {

  return (
    <EpisodeStyled>
      <div className="cover-img">
        <img src={props.data.image.original} alt={props.data.name + " cover image"}/>
      </div>

      <div className="content">
        <h2>{props.data.name}</h2>
        <div dangerouslySetInnerHTML={{__html: props.data.summary}}></div>
      </div>
    </EpisodeStyled>
  );
}

export default EpisodeDisplay;

const EpisodeStyled = styled.div`
  position: relative;
  width: 100%;
  margin: 20px 0;
  padding: 30px;
  border: 2px solid #ffffff;
  color: white;
  text-decoration: none;
  .cover-img{
    position: relative;
    img{
      width: 100%;
    }
  }
  .content{
    flex: 1;
    overflow: auto;
    p{
      margin-top: 1rem;
    }
  }
`