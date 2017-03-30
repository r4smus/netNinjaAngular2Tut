import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryComponent } from "./directory/directory.component";
import { HomeComponent } from "./home/home.component";
import { PersonsComponent } from './persons/persons.component';


const routes: Routes = [
        { 
            path: 'directory', 
            component: DirectoryComponent 
        },
        { 
            path: '', 
            component: HomeComponent 
        },
        {
            path: 'persons',
            component: PersonsComponent
        }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}