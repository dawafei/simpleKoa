let simpleKoa = require('./lib/application');
let app = new simpleKoa();

app.use(async ctx => {
    ctx.body = 'hello ' + ctx.query.name;
});

app.listen(3000, () => {
    console.log('listening on 3000');
});