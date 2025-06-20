import { Link } from "react-router-dom";

function DirectBtn(){
    return(
        <section className="direct_btns">
            <Link to="/"><img src={`${import.meta.env.BASE_URL}/images/mid-item1.png`} alt="" /></Link>
            <Link to="/"><img src={`${import.meta.env.BASE_URL}/images/mid-item2.png`} alt="" /></Link>
            <Link to="/"><img src={`${import.meta.env.BASE_URL}/images/mid-item3.png`} alt="" /></Link>
            <Link to="/"><img src={`${import.meta.env.BASE_URL}/images/mid-item4.png`} alt="" /></Link>
            <Link to="/"><img src={`${import.meta.env.BASE_URL}/images/mid-item5.png`} alt="" /></Link>
        </section>
    )
}

export default DirectBtn;