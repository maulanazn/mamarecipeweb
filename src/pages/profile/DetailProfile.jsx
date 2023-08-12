import Navbar from './../component/Navbar';
import Footer from './../component/Footer';
import { Link, useNavigate } from 'react-router-dom';
import Elephant from '/images/image-3.webp';
import { useEffect } from 'react';
import './../assets/css/detailprofile.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRecipeAction, getAllRecipeAction } from '../../redux/actions/RecipeAction';

export default function DetailProfile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {recipes} = useSelector(state => state);
    const {data} = recipes;

    useEffect(() => {
        dispatch(getAllRecipeAction());
    }, [])

    return (
        <>
            <Navbar/>
            <section className="navbar second-nav">
            <div className="container-fluid">
                <div className="vr bg-warning" style={{padding: '2px'}}></div>
                <mark className="bg-transparent profile-wrapper">
                    <Link to='#'>
                        <img width="50" height="50" loading="eager" decoding="async" id="photo-profile" src={Elephant} alt="Elephant profile"/>
                    </Link>
                </mark>
                <mark className="col bg-transparent profile-details">
                    <p className="col">Mr. Elephant</p>
                    <p className="fw-bold">10 recipes</p>
                </mark>
                <form className="d-flex" role="search">
                    <mark className="col-2 row bg-transparent reaction-count" style={{textAlign: 'end',  marginLeft: '150vh', marginTop: '-22vh'}}>
                        <p>21 February 2020</p>
                        <p>20 likes - 3 comments</p>
                    </mark>
                </form>
                </div>
            </section>

            <nav className="user-creation-interest d-flex justify-content-center align-items-center gap-2">
                <a className="recipe-button btn fs-5" role="button">Recipes</a>
                <a className="bookmark-button btn fs-5" role="button">Bookmarked</a>
                <a className="like-button btn fs-5" role="button">Liked</a>
            </nav>
            <hr style={{width: '142vh', marginLeft: '35vh', height: '3vh', backgroundColor: '#EFC81A'}}/>
            
            <main id="recipe-content">
                {data?.map((item, index) => {
                    return (
                        <div key={index} className='mt-5'>
                            <section className="d-flex single-popular-recipe justify-content-start container">
                                <a className="col-md-8 mt-5" href="#">
                                    <img src={item.image_path} className="img-fluid img-thumbnail rounded float-start" loading="eager" decoding="async" width="500" height="350" alt={item.title}/>
                                </a>
                            </section>
                            <section className="d-flex ingredient-popular-recipe justify-content-end flex-column offset-md-8">
                                <h3>{item.title}</h3>
                                <p className="ingredient">
                                    {item.ingredients}
                                </p>
                                <p className="reaction-row bg-warning">10 likes - 12 comments - 3 bookmarks</p>
                                <mark className="account">
                                    <Link className="btn btn-primary ms-1" to={`/edit-recipe/${item.id}`}>Edit Menu</Link>
                                    <a className="btn btn-danger ms-5" onClick={() => dispatch(deleteRecipeAction(item.id, navigate))} role="button">Delete Menu</a>
                                </mark>
                            </section>
                        </div>
                    )
                })
                }
            </main>

            <section className="pagination mt-5">
                <a className="btn btn-warning button-previous" style={{color: 'white', fontSize: '12px'}} href="#" role="link">Prev</a>
                Show 6-10 From 20
            </section>

            <Footer/>
        </>
    )
}
