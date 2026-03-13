export function Card() {

    return <>

        <a className="card" href="#">
            <img src="./assets/img/p1.jpg" alt="Project 1 preview" />
            <div className="card-body">
                <div className="tag">UI/UX</div>
                <h3>Project One</h3>
                <p>Short description that sounds confident and clean.</p>
            </div>
        </a>
                <a className="card" href="#">
                    <img src="./assets/img/p2.jpg" alt="Project 2 preview" />
                    <div className="card-body">
                        <div className="tag">Research</div>
                        <h3>Project Two</h3>
                        <p>What problem you solved + 1 outcome line.</p>
                    </div>
                </a>

                <a className="card" href="#">
                    <img src="./assets/img/p3.jpg" alt="Project 3 preview" />
                    <div className="card-body">
                        <div className="tag">Interaction</div>
                        <h3>Project Three</h3>
                        <p>Micro-interactions, motion, prototype thinking.</p>
                    </div>
                </a>
    </>

}