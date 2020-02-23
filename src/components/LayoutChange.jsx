import React from 'react';
import { Switch,Route  } from 'react-router-dom';
import Home from './Home'; 
import Account from './Account';
import AccountAdmin from './AccountAdmin';
import Login from './Login';
import Register from './Register';
import Shop from './Shop';

function LayoutChange(){
    return(
        <Switch>
            <Route path='/' exact children={<Home />}/>
            <Route path='/login' exact children={<Login />}/>
            <Route path='/register' exact children={<Register />}/>
            <Route path='/account' exact children={<Account />}/>
            <Route path='/admin' exact children={<AccountAdmin />}/>
            <Route path='/shop/:item' exact children={<Shop />}/>
        </Switch>
    );
}

export default LayoutChange;