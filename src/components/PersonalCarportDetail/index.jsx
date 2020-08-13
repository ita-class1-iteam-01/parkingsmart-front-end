import React from 'react'
import { LeftOutlined, CheckOutlined } from '@ant-design/icons/lib'
import { Card, Row, Col, Form, Button, Popconfirm, message, Badge } from 'antd'
import PropTypes from 'prop-types'
import './PersonalCarportDetail.css'
import parkingLot from '../../static/picture/parkingLot.png'
import { getOrderById } from '../../api/RentOrder'
import { newPersonalBookOrder } from '../../api/index'

class PersonalCarportDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      parkingLotInfo: {}
    }
  }

  componentDidMount() {
    // this.setState({
    //   parkingLotInfo: {
    //     carport: 'A101',
    //     contact: 'Miss Yang',
    //     contactPhone: '13766',
    //     price: 300,
    //     address: 'ZHA, Southern Software Park',
    //     rentStartDate: '2020-08-11',
    //     rentEndDate: '2020-09-11'
    //   }
    // })

    const personalId = 4
    getOrderById(personalId).then((res)=>{
      if(res.status === 200){
        this.setState({
          parkingLotInfo: res.data.data
        })
      }
    })
  }

  confirm = () => {
    const bookOrder = {
      userId: 9,
      parkingId: this.state.parkingLotInfo.id,
      parkingType: 'personal',
      reservationStartTime: this.props.startTime,
      reservationEndTime: this.props.endTime,
      status: this.state.parkingLotInfo.status,
      carPort: this.state.parkingLotInfo.personCarport,
      address: this.state.parkingLotInfo.address,
      totalPrice: 0
    }
    newPersonalBookOrder(bookOrder,this.state.parkingLotInfo.id).then((res) => {
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
                    <Form.Item label="Carport">{ this.state.parkingLotInfo.personCarport }</Form.Item>
                    <Form.Item label="Price">
                      ￥
                      { this.state.parkingLotInfo.price }
                      /month
                    </Form.Item>
                    <Form.Item label="Contact">{ this.state.parkingLotInfo.contactPerson }</Form.Item>
                    <Form.Item label="Carport Phone">
                      { this.state.parkingLotInfo.contactNumber}
                    </Form.Item>
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
        <Popconfirm 
          placement="top" 
          title="Are you sure this information is correct ?" 
          onConfirm={this.confirm} 
          okText="Yes" 
          cancelText="No"
        >
          <Button type="primary" icon={<CheckOutlined />} size="large" style={{ marginLeft: 500 }}>
            Book
          </Button>
        </Popconfirm>
      </div>
    )
  }
}

PersonalCarportDetail.propTypes = {
	startTime: PropTypes.number.isRequired,
	endTime: PropTypes.number.isRequired
}

export default PersonalCarportDetail