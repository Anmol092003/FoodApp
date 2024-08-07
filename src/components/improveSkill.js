export default function improveSkill(){

    const list=[
        "Learn new recepies",
        "Experiment with food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]
    return(
        <div className="section improve-skils">
            <div className="col image">
                <img src="/img/gallery/img_10.jpg" alt="imgShuhsee"/>
                </div>

            <div className="col typography">
                <h1 className="title">Improve Your Culinary Skill</h1>
                {list.map((item,index) => (
                    <p className="skill-item" key={index}>{item}</p>
                ))}
                <button className="btn">SIGNUP NOW</button>
            </div>
            
        </div>
    )
}
