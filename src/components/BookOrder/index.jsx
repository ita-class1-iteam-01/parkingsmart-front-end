import React from 'react'
import { Card, Row, Col,  Empty, Descriptions,Tag,Badge,Menu,Dropdown } from 'antd'
import "./BookOrder.css"
import {LeftOutlined} from "@ant-design/icons"
import Avatar from 'antd/lib/avatar/avatar'
import { HashRouter, Route, Switch } from 'react-router-dom'
import color from "./color"
import bookOrderApi from "../../api/BookOrderApi"



// eslint-disable-next-line react/prefer-stateless-function

const testBookOrdersData = [
    {
        "address": "南方软件园1",
        "status": "finished",
        "price": 30,
        "reservationStartTime": "2020.8.10 11:00" ,
        "reservationEndTime": "2020.8.10 12:00",
        "type": "personal"
    },{
        "address": "南方软件园2",
        "status": "processing",
        "price": 30,
        "reservationStartTime": "2020.8.10 11:00" ,
        "reservationEndTime": "2020.8.10 12:00",
        "type": "lots"
    },{
        "address": "南方软件园3",
        "status": "booked",
        "price": 30,
        "reservationStartTime": "2020.8.10 11:00" ,
        "reservationEndTime": "2020.8.10 12:00",
        "type": "lots"
    },{
        "address": "南方软件园4",
        "status": "finished",
        "price": 30,
        "reservationStartTime": "2020.8.10 11:00" ,
        "reservationEndTime": "2020.8.10 12:00",
        "type": "lots"
    },{
        "address": "南方软件园5",
        "status": "booked",
        "price": 30,
        "reservationStartTime": "2020.8.10 11:00" ,
        "reservationEndTime": "2020.8.10 12:00",
        "type": "lots"
    },{
        "address": "南方软件园6",
        "status": "processing",
        "price": 30,
        "reservationStartTime": "2020.8.10 11:00" ,
        "reservationEndTime": "2020.8.10 12:00",
        "type": "lots"
    }
    
]



class BookOrder extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            bookOrders: testBookOrdersData
            // parkinglots: []
        }
        console.log(this.props)
    }

    componentDidMount() {
        bookOrderApi.getAll().then(response => {
            console.log(response.data.data)
            this.props.addBookOrders(response.data.data)
        })
    }


    render() {
        const menu = (
            <Menu>
              <HashRouter>
                <Menu.Item>
                  book order
                  {/* <span><Link to="/book-order">book order</Link></span> */}
                </Menu.Item>
                <Menu.Item>             
                  {/* <span><Link to="/rent-order">rent order</Link></span> */}
                  rent order
                </Menu.Item>
                <Switch>
                  <Route exact path="/book-order" component={BookOrder} />
                  <Route exact path="/rent-order" component={BookOrder} />
                </Switch>
              </HashRouter>
            </Menu>
            )
        let Message
        if (this.state.bookOrders.length === 0) {
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
                {this.state.bookOrders.map((bookOrder) => {
                  return (
                    <Col
                      span={6}
                    >
                    <Badge.Ribbon text={bookOrder.status} color={color[bookOrder.status]}>
                      <Card  
                        hoverable 
                        style={{barground: '#ffffff',padding: '0 23px', margin: '20px', textAlign: 'left',border:"1px solid black"}}
                        title={bookOrder.address}
                        extra={<Tag style={{right:30}} color={bookOrder.type==="lots" ? "blue" : "orange"}>{bookOrder.type}</Tag>}
                      >
                        
                        <Descriptions>                  
                          <Descriptions.Item span={3} label="Price">
                            ￥
                            {bookOrder.price}
                          </Descriptions.Item>
                          <Descriptions.Item span={3} label="Rent Date">
                            {bookOrder.reservationStartTime}
                            {' - '}
                            {bookOrder.reservationEndTime}
                          </Descriptions.Item>
                          
                        </Descriptions>                   
                      </Card>
                    </Badge.Ribbon>
                    </Col>
                )
            })}
              </Row>
    )
        }
        return (
          <div> 
            <Row className="nav">
              <Col span={3}>
                <img src="/logo.png" height={48} alt="logo" className="logo" />
              </Col>
              <Col span={12}></Col>
              <Col span={3} offset={6}>
              <Dropdown overlay={menu} trigger={["click"]}>
                <Avatar size={42} src="/avatar.jpg" className="avatar" />
              </Dropdown>
              </Col>
            </Row>   
            <h1 style={{position:"absolute",left:245,top:110}}>Book Order</h1>
            <LeftOutlined style={{margin: '20px 0 0 225px', display:"flex", justifyContent:"left"}} />         
            {Message}
          </div>  
        )
    }
}

export default BookOrder