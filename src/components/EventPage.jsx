function EventPage(props){
    return(
        <section id="evt_box">
            <img src={`${import.meta.env.BASE_URL}/images/event_detail${props.evtId}.jpg`} alt="" />
        </section>
    )
}

export default EventPage;