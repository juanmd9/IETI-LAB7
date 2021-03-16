module.exports = async function (context, req) {
    if(req.method=="GET"){
        context.log('Getting!!');
        context.res={
            status:200,
            body:tasks
        }

    } else if(req.method=="POST"){
        const shortid = require('shortid');
    
        
        const task = req.body;
        // Implement the response
        var id = shortid.generate();
        task.id = id;
        tasks.push(task);
        context.log('Adding a task to the planner', tasks);
        const responseMessage = task;

        context.res = {
            status: 201,
            body: responseMessage
        };
    }
}

var tasks = [];