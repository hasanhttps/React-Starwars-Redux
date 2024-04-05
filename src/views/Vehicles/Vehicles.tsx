import './Vehicles.scss'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { fetchStarwars } from '../../utils/actions'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'

const Vehicles = () => {

    const {list} = useAppSelector((state) => state.fetchReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchStarwars("vehicles"));
    }, []);

    return (
        <div className='container' id='vehicles-container'>

            <Header/>

            <div className="vehixles" id='list'>
                {list.length == 0 ? <p>Loading ...</p> : <></>}
                {list.map((vehicle, i) => (
                    <div className='vehicles-item' key={i}>
                        <p className='name'>{vehicle.name}</p>
                        <div className="wrapper">
                            <div className="link_wrapper">
                                <Link className='see-details' to={`/vehicles/${i + 1}`} state={{ name:vehicle.name  , cargo_capacity:vehicle.cargo_capacity , consumables:vehicle.consumables , cost_in_credits:vehicle.cost_in_credits , crew:vehicle.crew , length:vehicle.length , manufacturer:vehicle.manufacturer , max_atmosphering_speed:vehicle.max_atmosphering_speed , model:vehicle.model , passengers:vehicle.passengers , vehicle_class:vehicle.vehicle_class }}>See Details</Link>
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

export default Vehicles;