const Popup = (props) => {
    return ( props.trigger) ? (
        <div className="popup">
            <div className="popup-content">
                <button className="popup-close" onClick={()=>props.setTrigger(false)}>close</button>
                { props.children }
            </div>
        </div>
     ) : "";
}

export default Popup;