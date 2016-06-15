import {HttpRequest} from "./module_httpRequest";

let http = new HttpRequest("http://localhost");
console.log(http.get("customer/1"));  

import * as httpMoudle from "./module_httpRequest";

let http2 = new httpMoudle.HttpRequest("http://server1:832");
console.log(http2.get("customer/1/orders"));

import C from "./module_constant";
import * as moduleConstants from "./module_constant";

C.ServerAddress
new moduleConstants.OtherClass();
moduleConstants.Constants.ServerAddress;
moduleConstants.SomeFunctionIWantToExport();

import exp = require("./module_singleexport");
exp.func1();