/// <reference path="Scripts/typings/requirejs/require.d.ts" />
/// <reference path="app.ts" />
require.config({
    // baseUrl : '../' // commented for now
    paths: {
        "knockout": "/Scripts/knockout-3.0.0.js"
    }
});

require(['App'], function (main) {
    var appMain = new main.App();
    appMain.run();
});
//# sourceMappingURL=AppConfig.js.map
