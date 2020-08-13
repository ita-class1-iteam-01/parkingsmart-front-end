import React from 'react'
import { Card, Row, Col, Button, Empty, Descriptions,Tabs, Tag  } from 'antd'
import PropTypes from 'prop-types'
import moment from 'moment'
import CountDown from '../CountDown'
import "./ParkingLotList.css"


const { TabPane } = Tabs
class ParkingLotList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  onClick = (parkinglot) => {
    this.props.history.push({
      pathname: '/parkingLotInfo',
      query: {
        parkinglot
      }
    })
  }
  
  toPersonalParkingLot = (parkinglot) => {
    this.props.history.push({
      pathname: '/personalCarportDetail',
      query: {
        parkinglot
      }
    })
  }

  onTypeChange = (key) => {
    if(Number(key) === 2) {
      this.props.searchPersonal()
    }
    this.props.keyChange(key)
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
          id="motion"
        >
          {parkinglots.map((parkinglot) => {
            return (
              <Col
                span={6}
                key={parkinglot.id}
              >
                <Card
                  hoverable
                  style={{ barground: '#ffffff', margin: '20px', textAlign: 'left' }}
                  title={parkinglot.name}
                >
                  <Descriptions>
                    <Descriptions.Item span={3} label="Remain Park Spaces">
                      {parkinglot.size}
                    </Descriptions.Item>
                    <Descriptions.Item span={3} label="Price">
                      ￥
                      {parkinglot.price}
                      /h
                    </Descriptions.Item>
                  </Descriptions>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      onClick={() => this.onClick(parkinglot)}
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
 
    let PersonalParkingPortList
    if (!this.props.personalParkingPortList || this.props.personalParkingPortList.length === 0) {
      PersonalParkingPortList = (
        <Empty
          className="empty"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      )
    } else {
      PersonalParkingPortList = (
        <Row
          className="row"
          id="motion"
        >
          {this.props.personalParkingPortList.map((parkinglot) => {
            return (
              <Col
                span={6}
                key={parkinglot.id}
              >
                <Card
                  hoverable
                  style={{ barground: '#ffffff', margin: '20px', textAlign: 'left' }}
                  title={parkinglot.address}
                  extra={<Tag style={{ display: !parkinglot.seckilling ? "none" : "block" }} color="#cd201f">Seckilling</Tag>}
                >
                  <Descriptions>
                    <Descriptions.Item span={3} label="Time">
                      {moment(parkinglot.rentStartDate).format('yyyy-MM-DD')}
                      {' - '}
                      {moment(parkinglot.rentEndDate).format('yyyy-MM-DD')}
                    </Descriptions.Item>
                    <Descriptions.Item span={3} label="Price">
                      ￥
                      {parkinglot.price}
                      /month
                    </Descriptions.Item>
                  </Descriptions>
                  <CountDown creationTime={parkinglot.creationTime} style={{ display: !parkinglot.seckilling ? "none" : "block" }} />
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      onClick={() => this.toPersonalParkingLot(parkinglot)}
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
      <div className="parkingLotList">
        {
          this.props.searched ? (
            <Tabs defaultActiveKey="1" centered style={{margin: "20px"}} onChange={this.onTypeChange}>
              <TabPane tab="Lots" key="1">
                {Message}
              </TabPane>
              <TabPane tab="Personal" key="2">
                {PersonalParkingPortList}
              </TabPane>
            </Tabs>
        )
          : 
            <div />
        }
      </div>
    )
  }
}

ParkingLotList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  personalParkingPortList: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchPersonal: PropTypes.func.isRequired,
  searched: PropTypes.bool.isRequired,
  keyChange: PropTypes.func.isRequired
}

export default ParkingLotList