import React from 'react'
import { LeftOutlined, CheckOutlined } from '@ant-design/icons/lib'
import { Card, Row, Col, Form, Button, Popconfirm, message } from 'antd'
import moment from 'moment'
import PropTypes from 'prop-types'
import './index.css'
import parkingLot from '../../static/picture/parkingLot.png'
import { newBookOrder } from '../../api'

class ParkingLotInfo extends React.Component {
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
        name: 'OOCL parking lot NO.1',
        size: 10,
        price: '3￥/h',
        address: 'ZHA, Southern Software Park'
      }
    })
      // getBookOrderById(this.state.id).then((res) => {
      //   this.setState({
      //     bookOrder: res.data
    //   })
    // })
  }

  confirm = () => {
    const bookOrder = {
      userId: 1,
      parkingId: this.state.id,
      parkingType: 'Lots',
      reservationStartTime: this.props.startTime,
      reservationEndTime: this.props.endTime,
      status: 'UnReservate'
    }
    newBookOrder(bookOrder).then((res) => {
      if (res.data.code === 1) {
        message.error('Book fail, the selected time slot parking space is full!')
      } else {
        message.success(`Book successfully, the car port is ${res.data.data.carPort}`)
      }
    })
  }

  render() {
    const startTime = moment(this.props.startTime).format('YYYY-MM-DD HH:00')
    const endTime = moment(this.props.endTime).format('YYYY-MM-DD HH:00')
    const threeSpace = '\u00A0\u00A0to\u00A0'
    return (
      <div className='ParkingLotInfo'>
        <div className='Title'>
          <LeftOutlined style={{ height: 50 }} />
          {'  '}
          Parking Lot Information
          {this.state.id}
        </div>
        <div className='InfoDiv'>
          <Row gutter='70'>
            <Col>
              <img style={{ width: 500, height: 350 }} src={parkingLot} alt=' ' />
            </Col>
            <Col>
              <Card style={{ width: 600, height: 350 }}>
                <Form labelAlign='left' labelCol={{ span: 7 }}>
                  <Form.Item label="Parking Lot Name">{ this.state.parkingLotInfo.name }</Form.Item>
                  <Form.Item label="Remain Park Spaces">
                    { this.state.parkingLotInfo.size }
                  </Form.Item>
                  <Form.Item label="Address">{ this.state.parkingLotInfo.address }</Form.Item>
                  <Form.Item label="Appointment">
                    { startTime }
                    { threeSpace }
                    { endTime }
                  </Form.Item>
                  <Form.Item label="Price">{ this.state.parkingLotInfo.price }</Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
        <Popconfirm placement="top" title="Sure?" onConfirm={this.confirm} okText="Yes" cancelText="No">
          <Button type="primary" icon={<CheckOutlined />} size="large" style={{ marginLeft: 500 }}>
            Book
          </Button>
        </Popconfirm>
      </div>
    )
  }
}

ParkingLotInfo.propTypes = {
	startTime: PropTypes.number.isRequired,
	endTime: PropTypes.number.isRequired
}

export default ParkingLotInfo