/// <reference path="Scripts/typings/requirejs/require.d.ts" />
/// <reference path="app.ts" />

require.config({
    // baseUrl : '../' // commented for now
    paths: {
        "knockout": "/Scripts/knockout-3.0.0"
    }
});

require(['App'], (main) => {
    var appMain = new main.App();
    appMain.run();
});