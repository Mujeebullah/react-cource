import React from 'react'
import {Card, Button} from 'react-bootstrap'

const Post = (props) => {    
    const {id, title, body} = props.data;
    return (
        <Card style={{ width: '18rem' }}>            
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>Unique Id: {id}</Card.Subtitle>
                <Card.Text>
                    {body}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Post;