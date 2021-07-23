// load up our shiny new route for users
import TasksRoutes from './tasks';

const routes = (app: any, fs: any) => {
  app.get('/', (req: any, res: any) => {
    res.send('Welcom to Task API v1.0.0');
  });

  TasksRoutes(app, fs);
};

export default routes;