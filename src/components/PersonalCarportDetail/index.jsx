import React from 'react'
import { LeftOutlined, CheckOutlined } from '@ant-design/icons/lib'
import { Card, Row, Col, Form, Button, Popconfirm, message, Badge } from 'antd'
// import PropTypes from 'prop-types'
import './PersonalCarportDetail.css'
import parkingLot from '../../static/picture/parkingLot.png'
import { addOrders } from '../../api/RentOrder'

class PersonalCarportDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 1,
      parkingLotInfo: {}
    }
  }

  componentDidMount() {
    this.setState({
      parkingLotInfo: {
        carport: 'A101',
        contact: 'Miss Yang',
        contactPhone: '13766',
        price: 300,
        address: 'ZHA, Southern Software Park',
        rentStartDate: '2020-08-11',
        rentEndDate: '2020-09-11'
      }
    })
  }

  confirm = () => {
    const bookOrder = {
      userId: 1,
      parkingId: this.state.id,
      parkingType: 'personal'
      // reservationStartTime: this.props.startTime,
      // reservationEndTime: this.props.endTime
    }
    addOrders(bookOrder).then((res) => {
      if (res.data.code === 1) {
        message.error('Sorry, the selected time slot parking space is booked!')
      } else {
        message.success(`Book successfully!`)
      }
    })
  }

  render() {
    return (
      <div className='ParkingLotInfo'>
        <div className='Title'>
          <LeftOutlined style={{ height: 50 }} />
        </div>
        <div className='InfoDiv'>
          <Row gutter='70'>
            <Col>
              <img style={{ width: 500, height: 350 }} src={parkingLot} alt=' ' />
            </Col>
            <Col>
              <Badge.Ribbon text="Personal">
                <Card style={{ width: 600, height: 350 }}>
                  <Form labelAlign='left' labelCol={{ span: 7 }}>
                    <Form.Item label="Address">{ this.state.parkingLotInfo.address }</Form.Item>
                    <Form.Item label="Carport">{ this.state.parkingLotInfo.carport }</Form.Item>
                    <Form.Item label="Price">
                      ￥
                      { this.state.parkingLotInfo.price }
                      /month
                    </Form.Item>
                    <Form.Item label="Contact">{ this.state.parkingLotInfo.contact }</Form.Item>
                    <Form.Item label="Carport Phone">{ this.state.parkingLotInfo.contactPhone}</Form.Item>
                    <Form.Item label="Rent Time">
                      { this.state.parkingLotInfo.rentStartDate }
                      &nbsp;-&nbsp;
                      { this.state.parkingLotInfo.rentEndDate }
                    </Form.Item>
                  </Form>
                </Card>
              </Badge.Ribbon>
            </Col>
          </Row>
        </div>
        <Popconfirm placement="top" title="Are you sure?" onConfirm={this.confirm} okText="Yes" cancelText="No">
          <Button type="primary" icon={<CheckOutlined />} size="large" style={{ marginLeft: 500 }}>
            Book
          </Button>
        </Popconfirm>
      </div>
    )
  }
}

// ParkingLotInfo.propTypes = {
// 	startTime: PropTypes.number.isRequired,
// 	endTime: PropTypes.number.isRequired
// }

export default PersonalCarportDetail