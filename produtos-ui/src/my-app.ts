export class MyApp {
    static routes = [
        { 
          path:'/produtos/:id',
          component: () => import('./about-page'),
         title:'Titulo da página (Editar, no caso)'
         }
       ]
}
