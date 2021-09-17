import { Link } from 'react-router-dom';
import styled from 'styled-components'

function ShowDisplay(props) {

  return (
    <ShowStyled>
      <div className="cover-img">
        <img src={props.data.image.original} alt={props.data.name + " cover image"}/>
      </div>

      <div className="content">
        <h2>{props.data.name}</h2>
        <div dangerouslySetInnerHTML={{__html: props.data.summary}}></div>
        {props.episodes && props.episodes.length > 0 ? 
            props.episodes.map((data, i)=>(
              <Link 
                to={{
                  pathname: `/episode-details`,
                  search: "?id=" + data.id
                }}
                key={'episode ' + i}>S{data.season}E{data.number}. {data.name}</Link>
            ))
          :
            <p>No episodes</p>
        }
      </div>
    </ShowStyled>
  );
}

export default ShowDisplay;

const ShowStyled = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  margin: 20px 0;
  padding: 30px;
  border: 2px solid #ffffff;
  display: flex;
  color: white;
  text-decoration: none;
  .cover-img{
    position: relative;
    min-width: 230px;
    width: 230px;
    img{
      height: 340px;
      width: 100%;
      object-fit: cover;
    }
  }
  .content{
    margin-left: 30px;
    flex: 1;
    overflow: auto;
    a{
      display: block;
      margin-top: 1rem;
      color: #ffffff;
    }
  }

  @media only screen and (max-width: 800px){
    flex-direction: column;
    height: unset;
    .cover-img{
      margin: 0 auto;
    }
    .content{
      margin: 30px 0;
    }
  }
`