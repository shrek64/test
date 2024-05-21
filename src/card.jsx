import KJ from './assets/DefPfp.jpeg'

function Card(){
    return(
        <div className="card">
            <img className="cardImg" src={KJ} alt="Profile Pic"></img>
            <h2 className='cardTitle'>KJ</h2>
            <br></br>
            <p className='cardTxt'>I eat lard</p>
            <br></br>
            <a className='cardTxt' href='https://youtube.com' target='_blank'>More About Me</a>
        </div>
    );
}
export default Card