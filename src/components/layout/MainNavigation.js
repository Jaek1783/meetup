import { Link } from "react-router-dom";
const MainNavigation = ()=>{
    return(
        <header>
            <nav className="navbar navbar-expand-lg bg-danger">
                <div className="container-fluid">
                    <h1 className="navbar-dark">React Meetups</h1>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse d-flex" id="navbarText">
                        <ul className="navbar-dark navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link " aria-current="page" href="#">AllMeetup</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/new-meetup' className="nav-link" href="#">Add Meetup Pages</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/favorites' className="nav-link" href="#">Favorites</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
};
export default MainNavigation;