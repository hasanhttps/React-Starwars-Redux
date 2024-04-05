import './Films.scss'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchStarwars } from '../../utils/actions'
import Header from '../../components/Header/Header'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'

const Films = () => {

    const {list, isLoading} = useAppSelector((state) => state.fetchReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchStarwars("films"));
    }, []);

    return (
        <div className='container' id='films-container'>

            <Header/>

            <div className="films" id='list'>
                {isLoading ? <p>Loading ...</p> : <></>}
                {list.map((film, i) => (
                    <div key={i} className='film-item'>
                        <p>{film.title}</p>
                        <div className="wrapper">
                            <div className="link_wrapper">
                                <Link className='see-details' to={`/films/${i + 1}`} state={{ title: film.title, director: film.director,release_date:film.release_date,episode_id:film.episode_id,producers:film.producer }}>See Details</Link>
                                <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                    <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                                </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))};
            </div>
        </div>
    );
};

export default Films;