import './Card.css'
import {Bookmark} from 'lucide-react'
const Card = (props) => {
    return (
            <div className='card'>
                <div className="top">
                    <img src={props.card.logo} />
                    <button>Save <Bookmark color='#dadada' size={15} /></button>
                </div>
                <div className="center">
                    <h3>{props.card.company} <span>{props.card.time}</span></h3>
                    <h2>{props.card.skill}</h2>
                    <div>
                        {props.card.slots.map((slot) => {
                            return <h4>{slot}</h4>
                        })}                        
                    </div>
                </div>
                <div className="bottom">
                    <div>
                        <h3>{props.card.wages}</h3>
                        <p>{props.card.address}</p>
                    </div>
                    <button>Apply now</button>
                </div>
            </div>
    )
}

export default Card;
