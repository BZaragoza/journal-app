import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { trimAndFormatString } from '../../helpers/trimAndFormatString';

const JournalEntry = ({ id, date, title, body, url }) => {

  const dispatch = useDispatch();


  const noteDate = moment(date);

  const handleActiveEntry = () => {
    dispatch( activeNote(id, {date, title, body, url})  )
  }

  return (
    <div 
      className="journal__entry animate__animated animate__fadeIn animate__faster"
      onClick={ handleActiveEntry }
    >
      
      {
        url &&
          <div 
          className="journal__entry-picture"
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${ url })`
          }}
        ></div>
      }

      <div className="journal__entry-body">
        <p className="journal__entry-title">{ title }</p>
        <p className="journal__entry-content">{ trimAndFormatString( body ) }</p>
      </div>

      <div className="journal_entry-datebox">
        <span>{ noteDate.format('dddd') }</span>
        <h4>{ noteDate.format('D') }</h4>
      </div>

    </div>
  )
}

export default JournalEntry
