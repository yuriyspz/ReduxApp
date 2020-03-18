import React from 'react'
import {connect} from "react-redux";
import {createBook} from "../actions";

class AddBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            description: '',
            published: ''
        };
    }


    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleReset() {
        this.titleInput.value = '';
        this.authorInput.value = '';
        this.descriptionInput.value = '';
        this.publishedInput.value = '';
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim() && this.state.author.trim() && this.state.description.trim() && this.state.published.trim()) {
            this.props.onAddBook(this.state);
            this.handleReset();
        }
    };

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Название:
                        <input type="text"
                               name="title"
                               placeholder='Название'
                               value={this.state.title}
                               onChange={this.handleInputChange}
                               ref={(input) => {
                                   this.titleInput = input;
                               }}
                        />
                    </label>
                    <label>
                        Автор:
                        <input type="text"
                               name="author"
                               placeholder='Автор'
                               value={this.state.author}
                               onChange={this.handleInputChange}
                               ref={(input) => {
                                   this.authorInput = input;
                               }}
                        />
                    </label>
                    <label>
                        Описание:
                        <input type="text"
                               name="description"
                               placeholder='Описание'
                               value={this.state.description}
                               onChange={this.handleInputChange}
                               ref={(input) => {
                                   this.descriptionInput = input;
                               }}
                        />
                    </label>
                    <label>
                        Дата публикации:
                        <input type="number"
                               name="published"
                               placeholder='Дата публикации'
                               value={this.state.published}
                               onChange={this.handleInputChange}
                               ref={(input) => {
                                   this.publishedInput = input;
                               }}
                        />
                    </label>

                    <input type="submit" value="Отправить"/>
                </form>
            </div>
        );
    }

}

// const mapStateToProps = (state) => {
//     return {
//         books: state.book
//     }
// };
//
const mapDispatchToProps = (dispatch) => {
    return {
        onAddBook: (book) => {
            console.log(book);
            dispatch(createBook(book));
        }
    }
};

export default connect(null, mapDispatchToProps)(AddBook)