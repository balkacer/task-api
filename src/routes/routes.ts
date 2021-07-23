// load up our shiny new route for users
import TasksRoutes from './tasks';

const routes = (app: { get: (arg0: string, arg1: (req: any, res: any) => void) => void; }, fs: any) => {
  // we've added in a default route here that handles empty routes
  // at the base API url
  app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('welcome to the development api-server');
  });

  // run our user route module here to complete the wire up
  TasksRoutes(app, fs);
};

// this line is unchanged
export default routes;