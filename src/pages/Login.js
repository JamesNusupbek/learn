import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';

import { fetchUser } from "../redux/actions";

class NormalLoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.fetchUserFunc(values)
            }
            console.log('values: ', values)
        });
    };

    render() {
        const { email } = this.props;
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                    Email: {email}
                </Form.Item>
            </Form>
        );
    }
}

const mapStateToProps = (state) =>{
    console.log('state: ', state)
    return { email: state.user.email}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserFunc: values => fetchUser(values, dispatch)
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
