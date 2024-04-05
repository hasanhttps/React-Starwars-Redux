import axios from 'axios'
import { AppDispatch } from './store';
import { fetchActions } from './fetches';



export const fetchStarwars = (category:string) => async (dispatch: AppDispatch) => {
  try{ 
    dispatch(fetchActions.Request());
    const response = await axios.get(`https://swapi.dev/api/${category}/`);
    dispatch(fetchActions.Success(response.data.results))
  } catch (error: any) {
    dispatch(fetchActions.Error(error.messsage))
  }
}