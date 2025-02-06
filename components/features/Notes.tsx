"use client";

import { useNotesStyles } from "@/styles/components/notes";
import { IconTextPlus, IconTrash } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { Input } from "@mantine/core";
import { useAppDispatch } from "@/store/hooks";
import { notesActions } from "@/store/slices";

const Notes = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { classes } = useNotesStyles();
  const [storedNotes, setStoredNotes] = useState<
    { id: string; text: string }[]
  >([]);
  const dispatch = useAppDispatch();

  function createTheNote() {
    dispatch(
      notesActions.createNewNote({
        id: crypto.randomUUID(),
        text: inputRef?.current?.value,
      })
    );
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
    setStoredNotes(storedNotes.reverse());
  }

  function deleteTheNote(id: string) {
    const filteredNotes = storedNotes.filter(
      (note: { id: string; text: string }) => note.id !== id
    );
    setStoredNotes(filteredNotes);
    localStorage.setItem("Notes", JSON.stringify(storedNotes));
  }

  useEffect(
    () => localStorage.setItem("Notes", JSON.stringify(storedNotes)),
    [storedNotes]
  );

  return (
    <div className={classes.notesWrapper}>
      <div className={classes.head}>
        <Input autoFocus={true} ref={inputRef} placeholder="Save Your Notes" />
        <span onClick={createTheNote}>
          <IconTextPlus />
        </span>
      </div>

      {storedNotes.map((item: { id: string; text: string }) => (
        <div key={item.id} className={classes.noteBody}>
          <div className="text">{item.text}</div>
          <span onClick={() => deleteTheNote(item.id)}>
            <IconTrash />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Notes;
