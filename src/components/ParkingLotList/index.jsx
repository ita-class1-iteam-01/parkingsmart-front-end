import React from 'react'
import { Card, Row, Col, Button, Empty, Descriptions } from 'antd'

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
                style={{fontSize: '25px', marginTop: '150px'}} 
                image={Empty.PRESENTED_IMAGE_SIMPLE}
              />
)
        } else {
            Message = (
              <Row 
                gutter={[16, 10]}
                style={{marginTop: '20px', 
                  marginLeft: '25%', 
                  marginRight: '25%'
                  }}
              >
                {this.state.parkinglots.map((parkinglot) => {
                  return (
                    <Col
                      span={8}
                    >
                      <Card  
                        hoverable 
                        style={{barground: '#ffffff', margin: '20px', textAlign: 'left'}}
                      >
                        <Descriptions title={parkinglot.name}>
                          <Descriptions.Item span={3} label="Capacity">
                            {parkinglot.remain}
                          </Descriptions.Item>                  
                          <Descriptions.Item span={3} label="Price">
                            {parkinglot.remain}
                            ￥/h
                          </Descriptions.Item>
                        </Descriptions>
                        <Button 
                          type="primary"
                          shape="round" 
                          style={{marginLeft: '130px'}}
                        >
                          Log Info
                        </Button>
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