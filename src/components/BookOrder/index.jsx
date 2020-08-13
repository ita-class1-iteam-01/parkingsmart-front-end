import React from 'react'
import { Card, Row, Col, Empty, Descriptions, Tag, Badge, PageHeader,Tooltip } from 'antd'
import PropTypes from 'prop-types'
import "./BookOrder.css"
import moment from 'moment'
import color from "./color"
import bookOrderApi from "../../api/BookOrderApi"

class BookOrder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bookOrders: []
    }
  }

  componentDidMount() {
    bookOrderApi.getAll().then(response => {
      this.setState({
        bookOrders: response.data.data
      })
    })
  }


  render() {
    let Message
    if (this.state.bookOrders.length === 0) {
      Message = (
        <Empty
          className="empty"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      )
    } else {
      Message = (
        <Row
          className="row"
        >
          {this.state.bookOrders.map((bookOrder) => {
            return (
              <Col
                span={6}
              >
                <Badge.Ribbon 
                  text={bookOrder.status} 
                  color={color[bookOrder.status]} 
                  style={{top:20,width:82}}
                >
                  <Tooltip title={bookOrder.address} color="blue">
                    <Card
                      hoverable
                      style={{ barground: '#ffffff', padding: '0 23px', margin: '20px',
                      textAlign: 'left' }}
                      title={bookOrder.address}
                      extra={(
                        <Tag
                          style={{ right: 30, 
                            display: bookOrder.parkingType ==="lots" ? "none" : "block" }} 
                          color="blue"
                        >
                          {bookOrder.parkingType}
                        </Tag>
          )}
                    >

                      <Descriptions>
                        <Descriptions.Item span={3} label="Total Price">
                          ￥
                          {bookOrder.totalPrice}
                        </Descriptions.Item>
                        <Descriptions.Item span={3}>
                          {moment(bookOrder.reservationStartTime).format(
                            'YYYY-MM-DD HH:mm').toLocaleString()}
                          {' - '}
                          {moment(bookOrder.reservationEndTimenew).format(
                            'YYYY-MM-DD HH:mm').toLocaleString()}
                        </Descriptions.Item>

                      </Descriptions>
                    </Card>
                  </Tooltip>
                </Badge.Ribbon>
              </Col>
            )
          })}
        </Row>
      )
    }
    return (
      <div>
        <div className='Title'>
          <PageHeader onBack={() => this.props.history.push('/book')} title="Back" />
        </div>
        {Message}
      </div>
    )
  }
}

BookOrder.propTypes = {
  history: PropTypes.objectOf(PropTypes.func).isRequired
}

export default BookOrder