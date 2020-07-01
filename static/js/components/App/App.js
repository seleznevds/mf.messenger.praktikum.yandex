import {AppComponent} from '../../classes/AppComponent.js';
import {template} from './App.hbs.js';
import {Menu} from '../Menu/Menu.js';
 

class App extends AppComponent{
   
    
    renderTemplate(){
        
        return template({Menu, ParentComponent:this,  id:this.id});
    }    
}

export {App};
  

