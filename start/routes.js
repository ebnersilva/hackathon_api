'use strict'

const Route = use('Route')

Route.post('/sessions', 'SessionController.store');

Route.group(() => {
  Route.post('/activities', 'ActivityController.store');

  Route.get('/areas', 'AreaController.index');
  Route.get('/areas/:id', 'AreaController.show');
  Route.post('/areas', 'AreaController.store');

  Route.get('/points', 'PointController.index');
  Route.post('/points', 'PointController.store');

  Route.post('/user_activity', 'UserActivityController.store');

  Route.post('/user_point', 'UserPointController.store');

  Route.get('/questions', 'QuestionController.index');

  Route.get('/answers', 'AnswerController.index');

  Route.post('/user_answer', 'UserAnswerController.store');
}).middleware(['auth']);

Route.get('/users', 'UserController.index');
Route.post('/users', 'UserController.store');
Route.get('/users/:id', 'UserController.show');
Route.put('/users/:id', 'UserController.update');
Route.delete('/users/:id', 'UserController.destroy');






