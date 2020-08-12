/* eslint-disable react/jsx-indent */
import React from 'react'
import { Card, Row, Col, Empty, Descriptions, Badge, Spin ,PageHeader, Tooltip } from 'antd'
import { createHashHistory } from 'history'
import { getOrders } from '../../api/RentOrder'
import color from '../../constant/rentStatusColor'
import "./RentOrderList.css"

const history = createHashHistory()

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
                          <Descriptions.Item span={3} label="Total Price">
                            ￥
                            {rentOrder.price}
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
            <PageHeader onBack={() => history.push('/book')} title="Rent Order" />
            {Message}
          </div>  
        )
    }
}

export default RentOrderList