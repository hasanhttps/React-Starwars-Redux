import './Species.scss'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { fetchStarwars } from '../../utils/actions'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'

const Species = () => {

    const {list} = useAppSelector((state) => state.fetchReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchStarwars("species"));
    }, []);

    return (
        <div className='container' id='species-container'>

            <Header/>

            <div className="species" id='list'>
                {list.length == 0 ? <p>Loading ...</p> : <></>}
                {list.map((specie, i) => (
                    <div className='person-item' key={i}>
                        <p className='name'>{specie.name}</p>
                        <div className="wrapper">
                            <div className="link_wrapper">
                                <Link className='see-details' to={`/species/${i + 1}`} state={{ name:specie.name , classification:specie.classification , average_lifespan:specie.average_lifespan , average_height:specie.average_height , designation:specie.designation , eye_colors:specie.eye_colors , hair_colors:specie.hair_colors , language:specie.language , skin_colors:specie.skin_colors }}>See Details</Link>
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

export default Species;