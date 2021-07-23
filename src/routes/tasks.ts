import TResponse from "../models/response";
import Task from "../models/task";

const dataPath = 'src/data/db.json';

const TasksRoutes = (app: { get: (arg0: string, arg1: (req: any, res: any) => void) => void; }, fs: { readFile: (arg0: string, arg1: string, arg2: (err: any, data: any) => void) => void; }) => {
    
    app.get('/tasks', (req: any, res: { send: (arg0: any) => void; }) => {
        console.log('GET in ' + req._parsedUrl.path);
        
      fs.readFile(dataPath, 'utf8', (err: any, data: string) => {
        if (err) {
            res.send(new TResponse(null, 'failed!'));
        }

        const result = JSON.parse(data)["tasks"] as Task[];

        console.log('Sending ' + result.length + ' Task(s)');
        res.send(new TResponse(result,`${result.length} Task(s) getted!`));
      });
    });
  };
  
export default TasksRoutes;