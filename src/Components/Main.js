import select from "../assets/select.svg"

const Main = () => {
    return (
        <>
            <div className="main">
                <h1>Reservation</h1>
                <div className="select">
                    <p>Date</p>
                    <img src={select} alt="select" />
                </div>
                <div className="select">
                    <p>Time</p>
                    <img src={select} alt="select" />
                </div>
                <div className="select">
                    <p>Party Size</p>
                    <img src={select} alt="select" />
                </div>
                <div className="select">
                    <p>Table Number</p>
                    <img src={select} alt="select" />
                </div>
                <div className="select">
                    <p>Table Capacity</p>
                    <img src={select} alt="select" />
                </div>
            </div>
        </>
    );
}

export default Main;