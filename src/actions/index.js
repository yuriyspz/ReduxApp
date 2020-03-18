import axios from 'axios'
const url= `https://spring-boot-mysql-server-part0.herokuapp.com/api/books`;


export const getAllBooksSuccess = (books) => {
    return {
        type: 'GET_ALL',
        payload: books
    }
};

export const createBookSuccess = (data) => {
    return {
        type: 'CREATE_BOOK',
        payload: {
            id:data.id,
            title:data.title,
            author:data.author,
            description:data.description,
            published:data.published
    }
    }
};

export const getAllBooks = () => {
    return (dispatch) => {
        return axios.get(url)
            .then((response) => {
                dispatch(getAllBooksSuccess(response.data))
            })
    }
};

export const createBook = (book) => {
    console.log('333333'+JSON.stringify(book));
    return (dispatch) => {
        return axios.post(`${url}/create`, book)
            .then((response) => {
                dispatch(createBookSuccess(response.data))
            })
    }
};