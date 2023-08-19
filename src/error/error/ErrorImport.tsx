import "./css/404.css"


const ErrorImport = () => {
    return (
        <div>
            <div id="tsparticles"></div>
            <div className="denied__wrapper">
                <h1>404</h1>
                <h3>LOST IN <span>SPACE</span> App-Name? Hmm, looks like that page doesn't exist.</h3>
                <img id="astronaut" src="/images/astronaut.svg" />
                <img id="planet" src="/images/planet.svg" />
                <a href="#"><button className="denied__link">Go Home</button></a>
            </div>
        </div>
    )
}

export default ErrorImport