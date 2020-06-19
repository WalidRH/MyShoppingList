# MyShoppingList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Description

This is a very simple 'dump' side project, that I created a long time ago, but is's quite useful.
This project is a Shopping list application for groceries; it manages all kind of foods ( liqudes, sucres, milks, flours, cereals, vegetbales, fruits, meats, fishs, eggs ). So we can add food to the list, configure the price, unit, quantity of the food ....
I didn't add some fancy CSS style because it's not the purpose of this project -- maybe I will add it in the future-- .
The Goal of this project is to use all the important aspects of angular:
- [x] Components & Data-Binding
- [x] Directives
- [x] Services & dependency Injection
- [x] Routing
- [x] Observables
- [x] forms
- [ ] Pipes
- [x] Handling HTTP
- [x] Authentication
- [ ] optimizations & NgModules
- [ ] animations & Testing

## Import Project
To import this project:
- git clone
- run ' npm install '
- create a simple firebase project
- uncomment the code below in src/app/food_component/vegetable/vegetable.component.ts
	```
	
	this.foodService.setListElement("VEGETABLES");
	```

PS : I will add more features in the future	

