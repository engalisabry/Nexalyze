import { useNotesStyles } from "@/styles/control-panel/Notes";
import {  IconTextPlus, IconTrash } from "@tabler/icons";
import { useEffect, useRef, useState } from "react";
import { Input } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { notesActions } from "@/features/slices";

const Notes = () => {
  const inputRef = useRef<any>();
  const { classes } = useNotesStyles();
  const [storedNotes, setStoredNotes] = useState<any>([]);
  const dispatch = useAppDispatch();
  const {noteData} = useAppSelector(state => state.notes);

  console.log(storedNotes);

  function createTheNote() {
    dispatch(notesActions.createNewNote({ id: crypto.randomUUID(), text: inputRef?.current.value}));
    inputRef.current.value = '';
    setStoredNotes((prev: any)=> [...prev, noteData].reverse());
  }
  
  function deleteTheNote(id: string) {
    const filteredNotes = storedNotes.filter((note: any) => note.id !== id);
    setStoredNotes(filteredNotes);
    localStorage.setItem('Notes', JSON.stringify(storedNotes));
  }

  useEffect(()=> localStorage.setItem('Notes', JSON.stringify(storedNotes)), [storedNotes]);

  return (
    <div className={classes.notesWrapper}>
      <div className={classes.head}>
        <Input autoFocus={true} ref={inputRef} placeholder="Save Your Notes" />
        <span onClick={createTheNote}><IconTextPlus /></span>
      </div>

      {storedNotes.map((item: {id: string, text: string}) => (
        <div key={item.id} className={classes.noteBody}>
            <div className="text">{item.text}</div>
            <span onClick={()=> deleteTheNote(item.id)}><IconTrash /></span>
        </div>))}
    </div>
  )
}

export default Notes;