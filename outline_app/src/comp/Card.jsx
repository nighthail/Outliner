
function Card(){
    let characters = ["Rebecca", "Philemina"]
    let title = "Title Scene as Variable"
    let scene_text = "Some text goes here"

    return(
        <div className="card">
            <h1 className="card-title">{title}</h1>
            <p className="card-text">{scene_text}</p>
            <p className="card-characters">{characters}</p>
        </div>
    )

}

export default Card