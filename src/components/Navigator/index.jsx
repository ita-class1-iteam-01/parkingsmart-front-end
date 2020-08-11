import React from 'react'
import { Menu,Dropdown , Row, Col } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'

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
              book order
            </Menu.Item>
            <Menu.Item>
              rent order
            </Menu.Item>
          </Menu>
          )
        return (
          <Row className="nav">
            <Col span={3}>
              <img src="/logo.png" height={48} alt="logo" className="logo" />
            </Col>
            <Col span={12}>
              <Menu defaultSelectedKeys={["book"]} mode="horizontal" className="nav-tab">
                <Menu.Item key="book">
                  Book
                </Menu.Item>
                <Menu.Item key="rent">
                  Rent
                </Menu.Item>
              </Menu>
            </Col>
            <Col span={3} offset={6}>
              <Dropdown overlay={menu} trigger={["click"]}>
                <Avatar size={42} src="/avatar.jpg" className="avatar" />
              </Dropdown>
            </Col>
          </Row>
        )
    }
}

export default Navigator