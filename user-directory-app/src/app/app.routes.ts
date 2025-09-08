import { Routes } from '@angular/router';
import { NewUser } from './new-user/new-user';
import { Component } from '@angular/core';
import { Users } from './users/users';

export const routes: Routes = [
    {path:'' ,component:Users},
    {path:'newUser', component:NewUser}
];
