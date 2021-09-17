import { Link } from 'react-router-dom';
import styled from 'styled-components'

function ShowCard(props) {
  return (
    <CardStyled 
      to={{
        pathname: "/show-details",
        search: "?id=" + props.data.show.id
      }}
    >
      <div className="cover-img">
        <img src={props.data.show.image.original} alt={props.data.show.name + " cover image"}/>
      </div>

      <div className="content">
        <p>{props.data.show.premiered!==null ? props.data.show.premiered : 'Now'}</p>
        <h2>{props.data.show.name}</h2>
        <div dangerouslySetInnerHTML={{__html: props.data.show.summary}}></div>
      </div>
    </CardStyled>
  );
}

export default ShowCard;

const CardStyled = styled(Link)`
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
    p{
      margin-top: 1rem;
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
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