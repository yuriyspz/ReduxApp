import React from 'react'
import {createBook, deleteBook, updateBook} from "../actions";
import {connect} from "react-redux";

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.book.title,
            author: this.props.book.author,
            description: this.props.book.description,
            published: this.props.book.published,
            id: this.props.book.id
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
            this.props.onUpdateBook(this.state.id, this.state);
            this.handleReset();
            this.props.onHideModal();
        }
    };

    handleDelete = e=>{
        e.preventDefault();
        this.props.onDeleteBook(this.state.id);
        this.props.onHideModal();
    };

    render() {
        return (
            <div>
                <div className={this.props.show ? "modal display-block" : "modal display-none"}>
                    <section className="modal-main">
                        <div>Название: {this.props.book.title}</div>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Название:
                                <input type="text"
                                       name="title"
                                       placeholder={this.props.book.title}
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
                                       placeholder={this.props.book.author}
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
                                       placeholder={this.props.book.description}
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
                                       placeholder={this.props.book.published}
                                       value={this.state.published}
                                       onChange={this.handleInputChange}
                                       ref={(input) => {
                                           this.publishedInput = input;
                                       }}
                                />
                            </label>


                        </form>
                        <button onClick={this.handleSubmit}>Edit</button>
                        <button onClick={this.handleDelete}>Delete</button>
                        <button onClick={this.props.onHideModal}>Close</button>
                    </section>
                </div>
            </div>
        );
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateBook: (id, book) => {
            dispatch(updateBook(id, book));
        },
        onDeleteBook: (id)=>{
            dispatch(deleteBook(id));
        }
    }
};

export default connect(null, mapDispatchToProps)(Modal);