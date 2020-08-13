import React from 'react'
import { message,Button,Form, Input, DatePicker, Row, Col, Card, Switch, Tooltip} from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import moment from 'moment'
import CityPosition from '../CityPosition'
import SearchCity from '../SearchCity'
import { newRentOrder } from '../../api'
import './index.css'

const {RangePicker} = DatePicker


class RentCarportForm extends React.Component{
    constructor(props) {
		super(props)
		this.state = {
            city: '',
            address:'',
            longitude:'',
            latitude:'',
            carport:'',
            rentPeriod:[],
            price: 0,
            contact:'',
            contactNumber:'',
            seckilling:false,
            formRef: React.createRef()
		}
	}

    chooseCity = (data) => {
		this.setState({
			city: data
		})
    }

    chooseDestination = (data) => {
        this.setState({
          address: `${data.district + data.name  } , ${   data.address}`,
          longitude:data.location.substr(0, data.location.indexOf(',')),
          latitude:data.location.substr(data.location.indexOf(',') + 1, data.location.length)
        })
    };

    resetDestination = () => {
		
    };

    handleDateChange = (mountDate, stringDate) => {
      this.state.rentPeriod = stringDate
    }

    handlePriceChange = (event) => {
        this.state.price = Number(event.target.value)
    }

    handleCarportChange = (event) => {
      this.state.carport = event.target.value
    }

    handleContactChange = (event) => {
      this.state.contact = event.target.value
    }

    handleContactNumberChange = (event) => {
      this.state.contactNumber = event.target.value
    }

    handleseckillChange = (isseckill) => {
      this.setState({seckilling: isseckill})
    }
    
    validatePrice = (rule, value, callback) => {
        const numberPattern = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/
        if(numberPattern.test(Number(value)) || value === '' || value === undefined){
          callback()
        } 
        callback('Please type a number to hold two decimal places')
    }

    validateContactNumber = (rule, value, callback) => {
      const numberPattern = /^((\+|00)86)?((134\d{4})|((13[0-3|5-9]|14[1|5-9]|15[0-9]|16[2|5|6|7]|17[0-8]|18[0-9]|19[0-2|5-9])\d{8}))$/
      if(numberPattern.test(Number(value)) || value === '' || value === undefined){
        callback()
      } 
      callback('Please type a valid phone number')
  }

  disabledDate = (current) => {
		return current < moment().add(0, 'months')
  }

    submit = async () => {
      try {
        await this.state.formRef.current.validateFields()
        const order = {
          userId: 1,
          address: this.state.address,
          longitude:this.state.longitude,
          latitude:this.state.latitude,
          personCarport:this.state.carport,
          rentStartDate: this.state.rentPeriod[0],
          rentEndDate: this.state.rentPeriod[1],
          price: this.state.price,
          contactPerson:this.state.contact,
          contactNumber:this.state.contactNumber,
          seckilling:this.state.seckilling
        }
        newRentOrder(order).then(res => {
          if(res.data.code === 0){
            message.success(res.data.msg)
            this.props.history.push({pathname:'/rentOrder'})
          }else {
            message.error(res.data.msg)
          }
        })
      // eslint-disable-next-line no-empty
      } catch (errorInfo) {

      }
    }

    render() {
        return (
          <Row>
            <Col span={10} offset={7}>
              <Card title="Rent out your carport for a commission" className="rent-card rent-card-title">
                <Form labelAlign="right" labelCol={{span:4}} ref={this.state.formRef}>
                  <Form.Item label="Address" name="address" rules={[{required:true, message:"Please type your carport address"}]}>
                    <Row>
                      <Col span={6} className="rent-card-address-city"> 
                        <CityPosition chooseCity={this.chooseCity} />
                      </Col>
                      <Col span={6} className="rent-card-address-address">
                        <SearchCity
                          chooseDestination={this.chooseDestination}
                          city={this.state.city}
                          resetDestination={this.resetDestination}
                        />
                      </Col>
                    </Row>
                  </Form.Item>
                  <Form.Item
                    label="Carport"
                    name="carport"
                    rules={[{required:true, message:"Please type your carport number"}]}
                  >
                    <Input onChange={this.handleCarportChange} allowClear placeholder="Please type your carport, eg: X1Y2" />
                  </Form.Item>
        
                  <Form.Item label="Rent Time" name="period" style={{ marginBottom: 0 }} rules={[{required:true, message:"Please type rent period"}]}>
                    <RangePicker onChange={this.handleDateChange} disabledDate={this.disabledDate} format="YYYY-MM-01" picker="month" className="rent-card-date" />
                  </Form.Item>
    
                  <Form.Item label="Rent" name="rent" hasFeedback rules={[{required:true,message:"Please type monthly rent"},{validator: this.validatePrice}]}>
                    <Input onChange={this.handlePriceChange} allowClear suffix="RMB / Month" placeholder="Please type monthly rent" />
                  </Form.Item>
                  <Form.Item label="Contact Name" name="contact" hasFeedback rules={[{required:true, message:"Please type your name"}]}>
                    <Input onChange={this.handleContactChange} allowClear placeholder="Please type your name" />
                  </Form.Item>    
                  <Form.Item label="Contact Phone" name="contactPhone" hasFeedback rules={[{required:true, message:"Please type your phone number"},{validator:this.validateContactNumber}]}>
                    <Input onChange={this.handleContactNumberChange} allowClear placeholder="Please type your phone number" />
                  </Form.Item>
                  <Form.Item
                    label={(
                      <span>
                        <Tooltip title="Join the seckill to rent out your carport faster" placement="left" color="blue">
                          <QuestionCircleOutlined />
                        </Tooltip>
&nbsp;&nbsp;&nbsp;Seckill
                      </span>
)}
                    name="seckill"
                  >
                  
                    <Switch onChange={this.handleseckillChange} defaultChecked={false} checkedChildren="On" unCheckedChildren="Off" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={this.submit}>
                      Rent
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        )
    }
}
RentCarportForm.propTypes = {
  history: PropTypes.objectOf(PropTypes.func).isRequired
}

export default RentCarportForm