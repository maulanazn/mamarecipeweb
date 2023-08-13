import { Link, useNavigate } from "react-router-dom";
import Elephant from '/images/image-3.webp';
import './../assets/css/styles.css';

export default function Navbar() {
    const navigate = useNavigate();
    function userLogout() {
        localStorage.clear();
        navigate('/');
    }

    return (
        <nav className="navbar navbar-expand-lg mt-3">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5 ms-5 container">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={localStorage.getItem("token") ? '/recipe' : '/'}>{localStorage.getItem("token") ? 'Recipe' : 'Home'}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={localStorage.getItem("token") ? '/add-recipe' : '/auth/login'}>{localStorage.getItem("token") ? 'Add Recipe' : 'Login'}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={localStorage.getItem("token") ? '/account' : '/recipe'}>{localStorage.getItem("token") ? 'Profile' : 'Recipe'}</Link>
                        </li>
                    </ul>
                    {
                        localStorage.getItem('token') ? (
                            <>
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
                            </>
                        ) : undefined
                    }
                </div>
            </div>
        </nav>
    )
}