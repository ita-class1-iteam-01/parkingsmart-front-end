import React from 'react'
import { Statistic, Row, Col } from 'antd'
import PropTypes from 'prop-types'

const { Countdown } = Statistic

class CountDown extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            time: {}
        }
      }

      componentDidMount () {
        const time = new Date(this.props.creationTime)
        time.setDate(time.getDate()+1)
        time.setHours(10,0,0)
        time.setTime(time.getTime())
        this.setState({
            time,
            isSec: time.getTime() < new Date().getTime()
        })
      }

    render(){
        return(
            this.state.isSec ? <div /> : (
              <Row gutter={16}>
                <Col>
                  <Countdown id='countDown' title="秒杀" value={this.state.time} />
                </Col>
              </Row>
          )
        )
    }
}

CountDown.propTypes = {
    creationTime: PropTypes.objectOf(PropTypes.object).isRequired
  }

export default CountDown