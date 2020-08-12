import React from 'react'
import { Card, Row, Col, Button, Empty, Descriptions, Radio } from 'antd'
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
    },{
        "name": "parkinglot6",
        "remain": 10,
        "fee": 3
    },{
        "name": "parkinglot6",
        "remain": 10,
        "fee": 3
    },{
        "name": "parkinglot6",
        "remain": 10,
        "fee": 3
    },{
        "name": "parkinglot6",
        "remain": 10,
        "fee": 3
    },{
        "name": "parkinglot6",
        "remain": 10,
        "fee": 3
    },{
        "name": "parkinglot6",
        "remain": 10,
        "fee": 3
    },{
        "name": "parkinglot6",
        "remain": 10,
        "fee": 3
    },{
        "name": "parkinglot6",
        "remain": 10,
        "fee": 3
    },{
        "name": "parkinglot6",
        "remain": 10,
        "fee": 3
    },{
        "name": "parkinglot6",
        "remain": 10,
        "fee": 3
    },{
        "name": "parkinglot6",
        "remain": 10,
        "fee": 3
    },{
        "name": "parkinglot6",
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
            type: 'lots',
            parkinglots: testParkingLotListData
            // parkinglots: []
        }
    }

    onClick = () => {

    }

    onTypeChange = (event) => {
        this.setState({
            type: event.target.value
        })
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
                        <div style={{display:"flex", justifyContent:"center"}}>
                          <Button 
                            onClick={this.onClick}
                            type="primary"
                            shape="round"
                          >
                            More
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
            <Radio.Group 
              buttonStyle="solid"
              style={{margin: '20px 0 0 225px', display:"flex", justifyContent:"left"}} 
              className="radiogroup"
              onChange={this.onTypeChange} 
              value={this.state.type}
            >
              <Radio.Button value="lots">Lots</Radio.Button>
              <Radio.Button value="personal">Personal</Radio.Button>
            </Radio.Group>
            {Message}
          </div>  
        )
    }
}

export default ParkingLotList