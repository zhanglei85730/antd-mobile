import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { getDeviceType } from './utils/util';
import IndexPage from './routes/IndexPage';
import ApplicationRecord from './routes/ChargeManage/ApplicationRecord/ApplicationRecord.js';


function RouterConfig({ history }) {
  // const deviceType = getDeviceType();
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/chargeManage/applicationRecord" exact component={ApplicationRecord} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
