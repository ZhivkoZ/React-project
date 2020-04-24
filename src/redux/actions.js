import types from './action-types';
import networkClient from './network-client';
import graphQLService from '../network/graphql-service';

export function setNews (news) {
    return {type: types.SET_NEWS, payload: news}
}

export function setError (error) {
    return {type: types.SET_ERROR, payload: error}
}

export const getNews = () => async dispatch => {

    try{
        const res = await networkClient.get(
            "http://newsapi.org/v2/top-headlines.json"
        );
        dispatch(setNews(res.news));
    }catch(ex){
        dispatch(setError({message: 'Error!'}))
    }
};

export const getStudent = (responseFields = "_id") => async dispatch => {

    try{
        const response = await graphQLService.getStudent(responseFields);
        dispatch(setStudents(response.data.students));
    }catch(ex) {
        dispatch(setError({message: "Error"}));
    }
}

export function setStudents (students) {
    return {type: types.SET_STUDENT, payload: students}
}