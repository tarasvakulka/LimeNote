import React from 'react';
import NotesActions from '../actions/NotesActions';
import NotesStore from '../stores/NotesStore';
import NoteEditor from './NoteEditor.jsx';
import NotesGrid from './NotesGrid.jsx';
import './App.scss';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: NotesStore.isLoading(),
            notes: NotesStore.getNotes()
        };
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleNoteDelete = this.handleNoteDelete.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    componentWillMount() {
        NotesActions.loadNotes();
    }
    componentDidMount() {
        NotesStore.addChangeListener(this._onChange);
    }
    componentWillUnmount() {
        NotesStore.removeChangeListener(this._onChange);
    }
    handleNoteAdd(data) {
        NotesActions.createNote(data);
    }
    handleNoteDelete(note) {
        NotesActions.deleteNote(note.id);
    }
    render() {
        return (
            <div className='App'>
                <div className='App__header'>
                    <div className="App_header_icon"/>
                    <h2>LimeNote</h2>
                </div>
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
            </div>
        );
    }
    _onChange() {
        this.setState({
            isLoading: NotesStore.isLoading(),
            notes: NotesStore.getNotes()
        });
    }
}

export default App;