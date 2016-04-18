/**
 * Created by ebinhon on 4/18/2016.
 */
var context = require.context('./src', true, /-test\.js$/);
context.keys().forEach(context);
console.log(context.keys());