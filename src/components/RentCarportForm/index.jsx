import React from 'react'
import { Button,Form, Input, DatePicker, Row, Col, Card} from 'antd'
import CityPosition from '../CityPosition'
import SearchCity from '../SearchCity'

const {RangePicker} = DatePicker


class RentCarportForm extends React.Component{
    constructor(props) {
		super(props)
		this.state = {
            city: '',
            price: 0
		}
	}

    chooseCity = (data) => {
		this.setState({
			city: data
		})
    }

    chooseDestination = () => {
		
    };

    resetDestination = () => {
		
    };

    handlePriceChange = (event) => {
        this.state.price = Number(event.target.value)
    }
    
    validatePrice = (rule, value, callback) => {
        const numberPattern = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/
        if(numberPattern.test(value)){
            callback('Please type a number to hold two decimal places')
        } 
        callback()
    }

    render() {
        return (
          <Row>
            <Col span={10} offset={7}>
              <Card title="Rent out your carport for a commission" className="rent-card">
                <Form labelAlign="right" labelCol={{span:4}}>
                  <Form.Item label="Address">
                    <Row>
                      <Col span={6}>
                        <CityPosition chooseCity={this.chooseCity} />
                      </Col>
                      <Col span={6}>
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
                  >
                    <Input placeholder="Please type your carport, eg: X1Y2" />
                  </Form.Item>
        
                  <Form.Item label="Rent period" style={{ marginBottom: 0 }}>
                    <RangePicker showTime format="YYYY/MM/DD" />
                  </Form.Item>
    
                  <Form.Item label="Price" hasFeedback rules={[{validator: this.validatePrice}]}>
                    <Input suffix=" /per month" placeholder="Please type monthly rent" onChange={this.handlePriceChange} />
                  </Form.Item>    
                  <Form.Item label="Contact" hasFeedback validateStatus="">
                    <Input allowClear placeholder="Please type your name" />
                  </Form.Item>    
                  <Form.Item label="Contact Phone" hasFeedback validateStatus="">
                    <Input allowClear placeholder="Please type your telphone number" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        )
    }
}

export default RentCarportForm