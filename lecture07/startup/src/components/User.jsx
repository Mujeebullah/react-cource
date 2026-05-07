import Card from "./Card"
import {v4 } from 'uuid'

const User = () => {
    const cards = [
        {            
            logo: 'https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg',
            company: 'Amazon',
            name: 'Mujeebullah Khan',            
            time: '5 days age',
            skill: 'Senior UI/UX Designer',
            slots: ['Part time', 'Senior desinger'],
            wages: '$120/hr',
            address: 'Chenab Nagar, PK',
        },
        {
            logo: 'https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg',
            company: 'Google',
            name: 'Hashir Mahmood',
            time: '2 days age',
            skill: 'Google Senior Developer',
            slots: ['Full time', 'Senior developer'],
            wages: '$100/hr',
            address: 'Karachi, PK',
        },
        {
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2nsmXzQYfwhhBZWtdD-vs03bVDarB3nxaA&s',
            company: 'Meta',
            name: 'Jazib Ahmad',
            time: '3 days age',
            skill: 'Meta Developer',
            slots: ['Full time'],
            wages: '$250/hr',
            address: 'Chenab Nagar, PK',
        },
        {
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3e8KjXvj0yUg_NOhWF244FulLIxvXWtnZCg&s',
            company: 'Airbnb',
            name: 'Danish Mahmood',
            time: '4 days age',
            skill: 'Airbnb Accountant',
            slots: ['HR Department'],
            wages: '$125/hr',
            address: 'Lahore, Gulbard, PK',
        },
        {
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vEg6o2nk17GktbEDVsDakEaYGIhJXVMA2g&s',
            company: 'IPL',
            name: 'Babar Azam',
            time: '3 days age',
            skill: 'IPL Batter',
            slots: ['PSL', 'PCB'],
            wages: '$1050/match',
            address: 'Karachi, Lighthouse',
        }
    ]

    console.log(cards)


  return (
    <>
        {cards.map((item) => {
            console.log(item)
            return <Card card={item} key={v4()} />
        })}        
    </>
  )
}

export default User