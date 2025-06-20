import {Link} from 'react-router-dom'

function Special(){
    return(
        <section className='special'>
            <div className='title'>
                <h2>스폐셜관</h2>
            </div>
            <ul className='sp_wrap'>
                <li><Link to="/"><img src="/images/special1.png" alt=""/></Link></li>
                <li><Link to="/"><img src="/images/special2.png" alt=""/></Link></li>
                <li><Link to="/"><img src="/images/special3.png" alt=""/></Link></li>
                <li><Link to="/"><img src="/images/special4.png" alt=""/></Link></li>
                <li><Link to="/"><img src="/images/special5.png" alt=""/></Link></li>
                <li><Link to="/"><img src="/images/special6.png" alt=""/></Link></li>
                <li><Link to="/"><img src="/images/special7.png" alt=""/></Link></li>
                <li><Link to="/"><img src="/images/special8.png" alt=""/></Link></li>
            </ul>
        </section>
    )
}

export default Special;