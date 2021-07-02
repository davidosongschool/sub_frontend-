
const InventoryItem = (props) => {
return (
    <div>
    <div className="row">
        <div className="col-3 text-center">
        <img src={props.image} className="img-general-style-thumbnail" alt={props.name} desc={props.desc}/>
    </div>
    <div className="col-9">
        <h3>{props.name}</h3>
        <p className="text-muted">{props.desc}</p>
    </div>
    </div>
    <hr />
    </div>
    
)
}

export default InventoryItem;