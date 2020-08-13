/* eslint-disable react/jsx-indent */
import React from 'react'
import { Card, Row, Col, Empty, Descriptions, Badge, Spin ,PageHeader, Tooltip } from 'antd'
import PropTypes from 'prop-types'
import { getOrders } from '../../api/RentOrder'
import color from '../../constant/rentStatusColor'
import "./RentOrderList.css"

class RentOrderList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    // eslint-disable-next-line react/no-deprecated
    componentWillMount(){
      getOrders().then((res) => {
        this.setState({
          rentOrderList : res.data.data
        })
      }) 
    }

    render() {
        let Message
        if(this.state.rentOrderList === undefined)
          return <Spin />

        if (this.state.rentOrderList.length === 0) {
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
                id="motion"
              >
                {this.state.rentOrderList.map((rentOrder) => {
                  return (
                    <Col
                      span={6}
                      key={rentOrder.id}
                    >
                      <Badge.Ribbon text={rentOrder.status} color={color[rentOrder.status]}>
                      <Tooltip title={rentOrder.address} color="blue">
                      <Card  
                        hoverable 
                        style={{barground: '#ffffff', margin: '20px', textAlign: 'left'}}
                        title={rentOrder.address}
                      >
                        <Descriptions>
                          <Descriptions.Item span={3} label="Renter Name">
                            {rentOrder.contactPerson}
                          </Descriptions.Item>
                          <Descriptions.Item span={3} label="Phone Number">
                          {rentOrder.contactNumber}
                          </Descriptions.Item>
                          <Descriptions.Item span={3} label="Carport Number">
                          {rentOrder.personCarport}
                          </Descriptions.Item>
                          <Descriptions.Item span={3} label="Price">
                            {rentOrder.price} ￥/month
                          </Descriptions.Item>
                          <Descriptions.Item span={3} label="Date">
                            {rentOrder.rentStartDate}
                            &nbsp;&nbsp;-&nbsp;&nbsp;
                            {rentOrder.rentEndDate}
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
            <PageHeader onBack={() => this.props.history.push('/rent')} title="Rent Order" />
            {Message}
          </div>  
        )
    }
}

RentOrderList.propTypes = {
  history: PropTypes.objectOf(PropTypes.func).isRequired
}

export default RentOrderList