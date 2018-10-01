import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() =>this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }
    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}
const mapStateToProps = (state) => {
    //whatever it return will show up as props inside of BookList
    return {
        books: state.books
    };
}
//any thing return from this function will end up as props on the book list container
const mapDispatchToProps = (dispatch) => {
    //whenever select book is called, the result should be passed to all of our reducer
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//pramote bookList from a component - it needs to know about this new dispatch method, select book.
//make it avilable as a props.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);