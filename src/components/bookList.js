import React from 'react'
import {getAllBooks} from "../actions";
import {connect} from "react-redux";
import styled from 'styled-components';
import SingleBook from "./singleBook";

class BookList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getBooks();
    }

    render() {
        return (
            <Container>
                <ul className="list">
                    {
                        this.props.books.map((item, index) =>
                            <SingleBook
                                key={index}
                                bookTitile={item.title}
                                bookAuthor={item.author}
                                bookDescription={item.description}
                                bookPublished={item.published}
                            >
                                {item.title}
                            </SingleBook>
                        )
                    }
                </ul>
            </Container>
        );
    }

}

const Container = styled.div`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`;
const ListElement = styled.li`
	font-size: 24px;
	font-weight: 500;
	color: palevioletred;
`;
const mapStateToProps = (state) => {
    return {
        books: state.book
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: () => {
            dispatch(getAllBooks());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList)