function MainVisual(){
    return(
        <section id="main_visual">
            <div className="inner">
                <img src={`${import.meta.env.BASE_URL}/images/main_visual.jpg`} alt="" />
            </div>
        </section>
    )
}

export default MainVisual;