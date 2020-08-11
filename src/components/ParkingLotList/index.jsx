import React from 'react'
import { Card, Row, Col, Button, Empty, Descriptions } from 'antd'
import "./ParkingLotList.css"

const testParkingLotListData = [
    {
        "name": "OOCL Parking lot No.1",
        "remain": 10,
        "fee": 3
    },
    {
        "name": "parkinglot2",
        "remain": 10,
        "fee": 3
    },{
        "name": "parkinglot3",
        "remain": 10,
        "fee": 3
    },{
        "name": "parkinglot4",
        "remain": 10,
        "fee": 3
    },{
        "name": "parkinglot5",
        "remain": 10,
        "fee": 3
    },{
        "name": "parkinglot6",
        "remain": 10,
        "fee": 3
    }
]

class ParkingLotList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parkinglots: testParkingLotListData
            // parkinglots: []
        }
    }

    render() {
        let Message
        if (this.state.parkinglots.length === 0) {
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
                gutter={[16, 10]} 
              >
                {this.state.parkinglots.map((parkinglot) => {
                  return (
                    <Col
                      span={6}
                    >
                      <Card  
                        hoverable 
                        style={{barground: '#ffffff', margin: '20px', textAlign: 'left'}}
                        title={parkinglot.name}
                      >
                        <Descriptions>
                          <Descriptions.Item span={3} label="Remain Park Spaces">
                            {parkinglot.remain}
                          </Descriptions.Item>                  
                          <Descriptions.Item span={3} label="Price">
                            {parkinglot.remain}
                            ￥/h
                          </Descriptions.Item>
                        </Descriptions>
                        <div style={{display:"flex",justifyContent:"center"}}>
                          <Button 
                            type="primary"
                            shape="round"
                          >
                            Log Info
                          </Button>
                        </div>
                      </Card>
                    </Col>
                )
            })}
              </Row>
    )
        }
        return (
          <div>
            {Message}
          </div>  
        )
    }
}

export default ParkingLotList