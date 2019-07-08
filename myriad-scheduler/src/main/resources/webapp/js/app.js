/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import Myriad from './components/Myriad';
//import FlexComponent from './components/FlexComponent';
//import TasksComponent from './components/TasksComponent';
//import ConfigComponent from './components/ConfigComponent';
//import AboutComponent from './components/AboutComponent';
//import HelpComponent from './components/HelpComponent';
//import ShutdownFrameworkComponent from './components/ShutdownFrameworkComponent';

//var Router = require('react-router')
//  , RouteHandler= Router.RouteHandler
//  , Route = Router.Route
//  , Redirect = Router.Redirect;
//
//var routes = (
//  <Route name="myriad" path="/" handler={Myriad} >
//    <Route name="frameworkDown" path="frameworkDown" handler={ShutdownFrameworkComponent} />
//    <Route name="flex" path="flex" handler={FlexComponent} />
//    <Route name="tasks" path="tasks" handler={TasksComponent} />
//    <Route name="help" path="help" handler={HelpComponent} />
//    <Route name="config" path="config" handler={ConfigComponent} />
//    <Route name="about" path="/" handler={AboutComponent} />
//    <Redirect from="myriad" to="about" />
//  </Route>
//);

//Router.run(routes, function (Handler) {
//  ReactDOM.render(<Handler/>, document.getElementById("myriad"));
//});

ReactDOM.render(<Myriad />, document.getElementById("myriad"));
