import TResponse from "../models/response";
import Task from "../models/task";

const dataPath = 'src/data/db.json';

const TasksRoutes = (app: any, fs: any) => {
    
    app.get('/tasks', (req: any, res: any) => {
        console.log('GET in ' + req._parsedUrl.path);
        
      fs.readFile(dataPath, 'utf8', (err: any, data: string) => {
        if (err) {
            res.send(new TResponse<null>(null, 'failed!'));
        }

        const result = JSON.parse(data)["tasks"] as Task[];

        console.log('Sending ' + result.length + ' Task(s)');
        res.send(new TResponse<Task[]>(result,`${result.length} Task(s) getted!`));
      });
    });
  };
  
export default TasksRoutes;