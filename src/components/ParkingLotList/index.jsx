import React from 'react'
import { Card, Row, Col, Button, Empty, Descriptions, Radio } from 'antd'
import PropTypes from 'prop-types'
import "./ParkingLotList.css"

class ParkingLotList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'lots'
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
        const parkinglots = this.props.list
        let Message
        if (parkinglots.length === 0) {
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
                {parkinglots.map((parkinglot) => {
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
                            {parkinglot.size}
                          </Descriptions.Item>                  
                          <Descriptions.Item span={3} label="Price">
                            {parkinglot.price}
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

ParkingLotList.propTypes = {
	list: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ParkingLotList