import React from 'react';
import { connect } from 'dva';
import { createForm } from 'rc-form';
import { List, InputItem, Switch, Stepper, Range, Button, Flex, WingBlank } from 'antd-mobile';
import styles from './ApplicationRecord.css';

const Item = List.Item;

function ApplicationRecord({ form }) {
  const { getFieldProps, getFieldError } = form;
  const onSubmit = () => {
    form.validateFields({ force: true }, (error) => {
      if (!error) {
        console.log(form.getFieldsValue());
      } else {
        alert('Validation failed');
      }
    });
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div className={styles.normal}>
      <form>
        <List
          renderHeader={() => '费用申请'}
          renderFooter={() => getFieldError('account') && getFieldError('account').join(',')}
        >
          <InputItem
            {...getFieldProps('account', {
              // initialValue: 'little ant',
              rules: [
                { required: true, message: 'Please input account' },
                // { validator: this.validateAccount },
              ],
            }) }
            clear
            error={!!getFieldError('account')}
            onErrorClick={() => {
              alert(getFieldError('account').join('、'));
            }}
            placeholder="please input account"
          >姓名</InputItem>
          <InputItem {...getFieldProps('password') } placeholder="please input password" type="password">
            联系方式
        </InputItem>
          <Item
            extra={<Switch {...getFieldProps('1', { initialValue: true, valuePropName: 'checked' }) } />}
          >是feng</Item>
          {/* <Item><div style={{ padding: 7 }}><Range defaultValue={[20, 80]} /></div></Item> */}
          <Item extra={<Stepper style={{ width: '100%', minWidth: '100px' }} showNumber size="small" defaultValue={20} />}>Number of Subscribers</Item>
        </List>
        <WingBlank>
          <Flex justify="center">
            <Flex.Item>
              <Button type="primary" onClick={onSubmit}>Submit</Button>
            </Flex.Item>
            <Flex.Item>
              <Button onClick={onReset}>Reset</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
      </form>
    </div>
  );
}

function mapStateToProps() {
  return {};
}
const ApplicationRecordWrapped = createForm()(ApplicationRecord);
export default connect(mapStateToProps)(ApplicationRecordWrapped);
