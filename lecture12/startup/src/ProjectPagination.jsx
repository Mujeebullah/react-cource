import React from 'react'
import { useState } from 'react'
import { Container, Row, Pagination } from 'react-bootstrap'
import Post from './Post'
import Pages from './Pages'

const ProjectPagination = ({data = [], dataLimit, pageLimit, RenderComponent, title}) => {
    const [pages] = useState(Math.round(data.length / dataLimit))
    const [currentPage, setCurrentPage] = useState(1)

    const goToNextPage = () => {
        setCurrentPage((prev) => prev + 1)
    }

    const goToPreviousPage = () => {
        setCurrentPage(prev => prev - 1)
    }

    const chagePage = (event) => {        
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber)
    }

    // return number of posts equals to dataLimit (20)
    const getPaginatedData = () => {        
        const startIndex = ((currentPage - 1) / dataLimit) * dataLimit
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex)
    }

    const getPaginationGroup = () => {
        const start = Math.floor(currentPage / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    }

    return (
        <Container>
            <h1>{title}</h1>
            <Row className='paginated-data'>
                {getPaginatedData().map((d, idx) => {
                    return (<Post key={idx} data={d}></Post>)
                })
                }
            </Row>
            <Row className='pagination'>
                <Pagination>
                    <Pagination.Prev onClick={goToPreviousPage} />
                    {
                        getPaginationGroup().map((item, index) => {
                            return <Pagination.Item key={index} onClick={(e) => chagePage(e)}>{item}</Pagination.Item>
                        })
                    }

                    {/* <Pagination.Item active>{12}</Pagination.Item> */}
                    <Pagination.Next onClick={goToNextPage} />
                </Pagination>
            </Row>
        </Container>
    )
}

export default ProjectPagination