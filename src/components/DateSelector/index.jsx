import React from 'react'
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;
class DateSelector extends React.Component {

    range=(start, end)=> {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }

    disabledDate=(current)=> {
        return current && current < moment().endOf('day');
    }


    disabledRangeTime=(_, type)=> {
        if (type === 'start') {
            return {
                disabledHours: () => this.range(0, 60).splice(4, 20),
                disabledMinutes: () => this.range(30, 60),
                disabledSeconds: () => [55, 56],
            };
        }
        return {
            disabledHours: () => this.range(0, 60).splice(20, 4),
            disabledMinutes: () => this.range(0, 31),
            disabledSeconds: () => [55, 56],
        };
    }

    render() {
        return (
            <React.Fragment>
                <Space direction="vertical" size={12}>

                    <RangePicker
                        disabledDate={this.disabledDate}
                        disabledTime={this.disabledRangeTime}
                        showTime={{
                            hideDisabledOptions: true,
                            defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
                        }}
                        format="YYYY-MM-DD HH:mm:ss"
                    />
                </Space>
            </React.Fragment>
        )
    }
}

export default DateSelector