
function Card(props){
    //props grabbed from the json
    const { title, text, imageURL,githubURL } = props.props;
return(
<div className="card">
    <a href={githubURL} target="_blank"><img className="card-image" alt="profile picture" src={imageURL}></img></a>
    <h2 className="card-title">{title}</h2>
    <p className='card-text'> {text} </p>

</div>

);


}

export default Card