import React from 'react'
import {Route, Switch} from 'react-router-dom'

import BookList from '../containers/BookList'
import Detail from '../containers/Detail'
import Sample from '../containers/Sample'

export default (
  <Switch>
    <Route exact path="/books" component={BookList}/>
    <Route exact path="/books/:id" component={Detail}/>
    <Route exact path="/sample" component={Sample}/>
  </Switch>
)