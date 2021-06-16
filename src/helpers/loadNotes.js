import { db } from "../firebase/firebase-config";


export const loadNotes = async ( uid ) => {
  
  const notesSnap = await db.collection( `${ uid }/journal/notes` ).orderBy("date").get()
  const notes = [];

  notesSnap.forEach( childSnap => {
    notes.push({
      id: childSnap.id,
      ...childSnap.data()
    });
  });

  return notes;

};
