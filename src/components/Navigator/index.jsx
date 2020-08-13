import React from 'react'
import { Menu,Dropdown , Row, Col } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import { HashRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
import BookContainer from '../../containers/BookContainer'
import ParkingLotInfoContainer from '../../containers/ParkingLotInfoContainer'
import RentCarportForm from '../RentCarportForm'
import RentOrderList from '../RentOrderList'
import BookOrder from '../BookOrder'
import './index.css'

class Navigator extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const menu = (
          <Menu>
            <Menu.Item>
              <Link to="/bookOrder">Book order</Link>             
            </Menu.Item>
            <Menu.Item>
              <Link to="/rentOrder">Rent order</Link>
            </Menu.Item>
          </Menu>
          )
        return (
          <HashRouter>
            <Row className="nav">
              <Col span={3}>
                <Link to="/book">
                  <img src="/logo.png" height={48} alt="logo" className="logo" />
                </Link>
              </Col>
              <Col span={12}>
                <Menu defaultSelectedKeys={["book"]} mode="horizontal" className="nav-tab">
                  <Menu.Item key="book">
                    <Link to="/book">Book</Link>
                  </Menu.Item>
                  <Menu.Item key="rent">
                    <Link to="/rent">Rent</Link>
                  </Menu.Item>
                </Menu>
              </Col>
              <Col span={3} offset={6}>
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Avatar size={42} src="/avatar.jpg" className="avatar" />
                </Dropdown>
              </Col>
            </Row>
            <div className="main">
              <Switch>
                <Route exact path="/book" component={BookContainer} />
                <Route exact path="/rent" component={RentCarportForm} />
                <Route exact path="/parkingLotInfo" component={ParkingLotInfoContainer} />
                <Route exact path="/rentOrder" component={RentOrderList} />
                <Route exact path="/bookOrder" component={BookOrder} />
                <Route exact path="/" render={() => <Redirect to="/book" />} />
              </Switch>
            </div>
            
          </HashRouter>
        )
    }
}

export default Navigator