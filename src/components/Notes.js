import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import '../../src/style/styles.css';
import axios from "axios";
function Notes() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
    const newNotes = {
      title:notes.title,
      content:notes.content
    }
   
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (<div>
    <div>
    <div>
    {/* <Header /> */}
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
      
      <div className="footer">
            
            <div className="bottomnav">
                <a href="#premium" className="bott">Premium</a>
                <a href="#blog" className="bott">Blog</a>
                <a href="#features" className="bott">Features</a>
                <a href="#resources" className="bott1">Resources</a>
                <a href="#about" className="bott1">About</a>
                <a href="http://127.0.0.1:5500/page_login.html" className="bott1">Support</a>
            </div>
            <hr/>
            <h2>Day2Day</h2>
        </div>
    </div>
  
    </div>
  );
}

export default Notes;
