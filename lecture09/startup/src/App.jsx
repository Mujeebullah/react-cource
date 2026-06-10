import React, { useEffect, useState, useTransition } from 'react'
import { Card, Col, Container, Form, FormControl, FormGroup, FormLabel, Row, Button, CardBody } from 'react-bootstrap'
import note_with_background from './assets/images/note-with-background.png'
import note_without_background from './assets/images/note-without-background.png'



const App = () => {
  const [noteTitle, setNoteTitle] = useState('')
  const [noteDetail, setnoteDetail] = useState('')
  const [noteList, setNoteList] = useState([]);
  const [formValidate, setFormValidate] = useState(false)

  useEffect(() => {
    console.log('notelist updated', noteList)
  }, [noteList])


  const handleFormSubmit = (e) => {
    e.preventDefault()
    const newNote = { noteTitle, noteDetail }
    setNoteList(prevNotes => [...prevNotes, newNote])
    setFormValidate(prev => true)
    setTimeout(() => {
      setNoteTitle(prev => '')
      setnoteDetail(prev => '')
      setFormValidate(prev => false)
    }, 1000)
  }

  const deleteNote = (deletedIndex) => {
    // first way using splice method of javascript

    // const copyNoteList = [...noteList]
    // copyNoteList.splice(index, 1);
    // setNoteList(prev => copyNoteList)

    // second way using filter method of javascript
    // const filteredNoteList = noteList.filter((_, index) => index != deletedIndex);
    // setNoteList(prev => filteredNoteList)    

    // both methods working well

    
  }



  return (
    <div className='main'>
      <Container className='p-3'>
        <Row className='vh-100'>
          <Col className='p-3 col-4'>
            <h3 className='text-muted'>Add Notes</h3>
            <Form onSubmit={(e) => handleFormSubmit(e)} noValidate validated={formValidate}>
              <FormGroup className='mb-3'>
                <FormControl
                  type='text'
                  required
                  value={noteTitle}
                  onChange={(e) => setNoteTitle(prev => e.target.value)}
                  placeholder='Enter note title'
                />
              </FormGroup>
              <FormGroup className='mb-3'>
                <FormControl
                  type='text'
                  required
                  value={noteDetail}
                  onChange={(e) => setnoteDetail(prev => e.target.value)}
                  placeholder='Write Detail'
                />
              </FormGroup>
              <div className='d-grid'>
                <Button variant='light' type='submit'>Add Note</Button>
              </div>
            </Form>
          </Col>
          <Col className='d-flex col-8'>
            <Row className='p-3 gap-4'>
              {noteList.map((element, index) => {
                return (
                  <div className='d-flex flex-column' key={`key-${index}`} style={{
                    backgroundImage: `url(${note_without_background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center', width: '250px', height: '300px', border: 'none'
                  }}>
                    <div className='mt-5 mb-3'>
                      <h5 className='pt-3 mb-3'>{element.noteTitle}</h5>
                      <p>{element.noteDetail}</p>
                    </div>
                    <Button className='w-50' variant='danger' onClick={() => deleteNote(index)}>Delete Note</Button>
                  </div>)
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App