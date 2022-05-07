import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";

import 'antd/dist/antd.css';
import './basicform.css';
const { Option } = Select;
const BasicForm = () => {
    return (
        <Form className="basicform"
            name="basicform"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}

            autoComplete="off"
        >
            <Form.Item
                label="First name"
                name="firstname"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Last name"
                name="lastname"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your last name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please enter email address!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="gender"
                label="Gender"
                rules={[
                    {
                        required: true,
                        message: 'Please select gender!',
                    },
                ]}
            >
                <Select placeholder="select your gender">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                </Select>
            </Form.Item>
            <Form.Item name={['user', 'address']} label="Address">
                <Input.TextArea />
            </Form.Item>



            <Form.Item
                label="Interests"
                name="remember"
                valuePropName="checked"

            >
                <div className="interests">
                    <Row>
                        <Col span={12}><Checkbox checked>Listening Music</Checkbox></Col>
                        <Col span={12}><Checkbox>Games</Checkbox></Col>
                    </Row>
                    <Row>
                        <Col span={12}><Checkbox>Playing Cricket</Checkbox></Col>
                        <Col span={12}><Checkbox>Surfing on Internet</Checkbox></Col>
                    </Row>
                </div>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}
export default BasicForm