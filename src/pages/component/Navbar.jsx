import { Link, useNavigate } from "react-router-dom";
import Elephant from '/images/image-3.webp';
import './../assets/css/styles.css';

export default function Navbar() {
    const navigate = useNavigate();
    let firstlink, firstlinkto, secondlink, secondlinkto, thirdlink, thirdlinkto;
    function userLogout() {
        localStorage.clear();
        navigate('/');
    }

    if (!localStorage.getItem('token')) {
        firstlink = 'Register';
        firstlinkto = '/auth/register';
        secondlink = 'Login';
        secondlinkto = '/auth/login';
        thirdlink = 'Recipe';
        thirdlinkto = '/recipe';
    }

    if (localStorage.getItem('token')) {
        firstlink = 'Recipe';
        firstlinkto = '/recipe';
        secondlink = 'Add Recipe';
        secondlinkto = '/add-recipe';
        thirdlink = 'Profile';
        thirdlinkto = '/account'
    }


    if (localStorage.getItem("token")) {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5 ms-5 container">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={firstlinkto}>{firstlink}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={secondlinkto}>{secondlink}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={thirdlinkto}>{thirdlink}</Link>
                            </li>
                        </ul>
                        <div className="vr bg-warning profile d-flex"></div>
                            <mark className="col bg-transparent profile-wrapper me-2">
                                <a href="../profile/detailprofile.html">
                                    <img loading="eager" width="50" height="50" className="ms-5" decoding="async" id="photo-profile" src={Elephant} alt="Elephant profile"/>
                                </a>
                            </mark>
                            <mark className="col bg-transparent logout-detail me-5">
                                <p className="col">Mr. Elephant</p>
                                <a className="fw-bold" role="button" id="logout-btn" onClick={userLogout}>Logout</a>
                            </mark>
                        </div>
                    </div>
            </nav>
        )
    }

    if (!localStorage.getItem("token")) {
        return (
            <nav className="navbar navbar-expand-lg mt-5">
                <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse container-fluid ms-5 gap-2" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={firstlinkto}>{firstlink}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={secondlinkto}>{secondlink}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={thirdlinkto}>{thirdlink}</Link>
                    </li>
                    </ul>
                </div>
            </div>
            </nav>
        )
    }
}