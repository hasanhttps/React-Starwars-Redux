import './People.scss'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header'
import { fetchStarwars } from '../../utils/actions';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

const People = () => {

    const {list, isLoading} = useAppSelector((state) => state.fetchReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchStarwars("people"));
    }, []);

    return (
        <div className='container' id='people-container'>

            <Header/>

            <div className="people" id='list'>
                {isLoading ? <p>Loading ...</p> : <></>}
                {list.map((person, i) => (
                    <div className='person-item' key={i}>
                        <p className='name'>{person.name}</p>
                        <div className="wrapper">
                            <div className="link_wrapper">
                                <Link className='see-details' to={`/people/${i + 1}`} state={{ name:person.name,birth_year:person.birth_year, eye_color:person.eye_color, gender:person.gender, hair_color:person.hair_color, height:person.height, mass:person.mass , skin_color:person.skin_color }}>See Details</Link>
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

export default People;