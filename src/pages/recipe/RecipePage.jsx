import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './../assets/css/menurecipe.css';
import Navbar from './../component/Navbar';
import Footer from './../component/Footer';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipeAction, searchRecipeAction, sortingRecipeAction } from '../../redux/actions/RecipeAction.js';

function MappedRecipeData({data}) {
    return (
        <>
        {
            data?.map((item, index) => {
            return (
                <div key={index}>
                    <section className="d-flex single-popular-recipe justify-content-start container">
                        <Link to={`/recipe/${item.id}`} className="col-md-8 mt-5">
                            <img src={item.image_path} className="img-fluid img-thumbnail rounded float-start" loading="eager" decoding="async" width="500" height="350" alt={item.title}/>
                        </Link>
                    </section>
                    <section className="d-flex ingredient-popular-recipe justify-content-end flex-column offset-md-8">
                        <h3>{item.title}</h3>
                        <p className="ingredient text-break">
                            {item.ingredients}
                        </p>
                        <p className="reaction-row bg-warning">10 likes - 12 comments - 3 bookmarks</p>
                        <mark className="account">
                            <img className="rounded-circle" src={item.image_path} loading="eager" decoding="async" width="30" height="30" alt={item.user_name}/>
                            {item.user_name}
                        </mark>
                    </section>
                </div>
            )})
        }
        </>
    )
}

MappedRecipeData.propTypes = {
    data: PropTypes.any.isRequired
}

export default function RecipePage() {
    const dispatch = useDispatch();
    const {recipes} = useSelector(state => state);
    const page = useState(1);
    const {data} = recipes;
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState([]);
    const [sortBy, setSortBy] = useState([]);
    const [sort, setSort] = useState([]);

    useEffect(() => {
        dispatch(sortingRecipeAction(sortBy, sort))
    }, [sortBy, sort])

    useEffect(() => {
        dispatch(getAllRecipeAction(currentPage));
    }, [currentPage])

    useEffect(() => {   
        search.length >= 3 && dispatch(searchRecipeAction(search))
        search == '' && dispatch(getAllRecipeAction())
    }, [search])    

    return (
        <>
            <Navbar firstlink="Home" firstlinkto="/" secondlink="Add Recipe" secondlinkto="/add-recipe" thirdlink="Profile" thirdlinkto="/account" props="account" />

            <header className="title-top container">
                <h1 className="">Discover Recipe</h1>
                <h1>& Delicious Food</h1>
            </header>
            <div className="m-lg-5 p-lg-5 m-sm-5 p-sm-5 second-navigation">
                <div className="input-group mb-1 w-50 mb-sm-3 mb-md-3 mb-lg-3">
                    <i className="bi bi-search input-group-text"></i>
                    <input value={search} onChange={e => setSearch(e.target.value)} name="search" type="text" className="form-control" placeholder="Search Delicious Food" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className='d-flex mt-2 sorted-list'>
                    <select className="form-select" aria-label="Default select example" style={{width: '30vh'}}>
                        <option selected onClick={e => setSortBy(e.target.value)} value="">Sort By</option>
                        <option onClick={e => setSortBy(e.target.value)} value="title">Title</option>
                        <option onClick={e => setSortBy(e.target.value)} value="ingredients">Ingredients</option>
                        <option onClick={e => setSortBy(e.target.value)} value="user_name">User</option>
                        <option onClick={e => setSortBy(e.target.value)} value="created_at">Created At</option>
                    </select>

                    <select className="form-select" aria-label="Default select example" style={{width: '30vh'}}>
                        <option selected onClick={e => setSort(e.target.value)} value="">Sort</option>
                        <option onClick={e => setSort(e.target.value)} value="asc">A-Z</option>
                        <option onClick={e => setSort(e.target.value)} value="desc">Z-A</option>
                        <option onClick={e => setSort(e.target.value)} value="asc">Old - Latest</option>
                        <option onClick={e => setSort(e.target.value)} value="desc">Latest - Old</option>
                    </select>
                </div>
            </div>

            <section className="container category gap-2">
                <a role="button" className="btn btn-warning" href="">Main course</a>
                <a role="button" className="btn btn-warning ms-2" href="">Appetizer</a>
                <a role="button" className="btn btn-success ms-2" href="">Dessert</a>
            </section>
            
            <MappedRecipeData data={data}/>

            <section className="pagination mt-5 ms-5">
                <button
                    className="btn btn-sm btn-warning button-previous"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    hidden={currentPage <= 1}>
                    Prev
                </button>
                <button
                    className="btn btn-sm btn-warning button-next"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    hidden={currentPage >= page?.totalPage}>
                    Next
                </button>
            </section>

            <Footer/>
        </>
    )
}