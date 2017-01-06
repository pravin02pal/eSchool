"use strict";
var router_1 = require("@angular/router");
var appRoutes = [
    {
        path: '',
        loadChildren: 'app/home/home.module'
    },
    {
        path: 'signup',
        loadChildren: 'app/registration/registration.module'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map