import './Starships.scss'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { fetchStarwars } from '../../utils/actions'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'

const Starships = () => {

    const {list} = useAppSelector((state) => state.fetchReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchStarwars("starships"));
    }, []);
    
    return (
        <div className='container' id='starships-container'>

            <Header/>

            <div className="starships" id='list'>
                {list.length == 0 ? <p>Loading ...</p> : <></>}
                {list.map((starship, i) => (
                    <div className='vehicles-item' key={i}>
                        <p className='name'>{starship.name}</p>
                        <div className="wrapper">
                            <div className="link_wrapper">
                                <Link className='see-details' to={`/starships/${i + 1}`} state={{ name:starship.name  , cargo_capacity:starship.cargo_capacity , consumables:starship.consumables , cost_in_credits:starship.cost_in_credits , crew:starship.crew , hyperdrive_rating:starship.hyperdrive_rating , length:starship.length , manufacturer:starship.manufacturer , max_atmosphering_speed:starship.max_atmosphering_speed , model:starship.model , passengers:starship.passengers , starship_class:starship.starship_class }}>See Details</Link>
                                <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                    <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                                </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Starships;