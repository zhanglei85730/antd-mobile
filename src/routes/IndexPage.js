import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Grid, Icon } from 'antd-mobile';
import Title from '../components/Title/Title.js';


function DataItem(dataItem) {
  return (
    <div className="am-grid-item-inner-content">
      <Link to={dataItem.href}>
        <img src={dataItem.icon} style={{ width: '30%' }} />
        {/* <Icon type="check-circle" size='xs' />
        <Icon type={'\ue601'} size={55} /> */}
        <div style={{ color: '#888', fontSize: '12px', marginTop: '12px' }}>
          <span>{dataItem.text}</span>
        </div>
      </Link>
    </div>
  );
}

function IndexPage() {
  const data = [
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: '费用申请记录',
      href: '/chargeManage/applicationRecord',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: '预付申请记录',
      href: '/chargeManage/advanceApplication',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: '借款申请记录',
      href: '/chargeManage/borrowRecord',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: '费用报销记录',
      href: '/chargeManage/recoverableRecord',
    },
  ]
  return (
    <div>
      <Title>费用管理</Title>
      <Grid
        data={data}
        activeStyle={false}
        renderItem={DataItem}
      />
      <Title>合同管理</Title>
      <Grid
        data={[
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: '合同管理',
            href: '/chargeManage/applicationRecord',
          },
        ]}
        activeStyle={false}
        renderItem={DataItem}
      />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
