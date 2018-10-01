import React from 'react'

const ProjectDetails = (props) => {
    // console.log(props)
    const id = props.match.params.id;
    return ( 
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi, illum cum possimus quod maxime, voluptates a expedita debitis praesentium nam porro voluptatum perspiciatis atque voluptatibus. Natus labore animi dolorem!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by The Net Ninja</div>
                     <div>2nd September, 2am</div>
                </div>   
            </div>
        </div>
    )
}

export default ProjectDetails