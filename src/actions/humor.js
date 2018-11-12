import * as types from './actions-list'
import {fetchProgrammerHumor} from '../utils/fetchProgrammerHumor'
import {getPosts, extractForStore} from '../utils/parseUtils'

export const getHumor = () => async (dispatch) => {

    const response = await fetchProgrammerHumor()
    const posts = getPosts(response)
    const dataLoad = extractForStore(posts)
    const action = initStore(dataLoad)
    dispatch(action)

}

export const initStore = (dataLoad) => ({type: types.INIT_STORE, dataLoad})
export const setCurrentIndex = (i) => ({type: types.SET_CURRENT_INDEX, i})
export const increaseLikes = (id) => ({type: types.INCREASE_LIKES, id})
export const decreaseLikes = (id) => ({type: types.DECREASE_LIKES, id})
export const setNsfw = (id) => ({type: types.SET_NSFW, id})