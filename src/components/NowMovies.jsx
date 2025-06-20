import { Link } from "react-router-dom";

function NowMovies(){
    return(
        <section className="now_movies">
            <ul className="movies_wrap">
                <li><Link to="/"><img src="/images/movie1.jpg" alt="" /></Link></li>
                <li><Link to="/"><img src="/images/movie2.jpg" alt="" /></Link></li>
                <li><Link to="/"><img src="/images/movie3.jpg" alt="" /></Link></li>
                <li><Link to="/"><img src="/images/movie4.jpg" alt="" /></Link></li>
                <li><Link to="/"><img src="/images/movie5.jpg" alt="" /></Link></li>
            </ul>
        </section>
    )
}

export default NowMovies;