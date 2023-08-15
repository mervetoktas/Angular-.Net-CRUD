# Angular-.Net-CRUD
An Angular and ASP.NET project that possess all CRUD operations and connects to SQL server


- First you need Visual Studio code and Visual Studio 2022(Preferably).
- Open visual studio code and change directory to CRUD.UI inside the folder named CRUD_Project,

- install angular using terminal with 
	command : npm install -g @angular/cli
		and
		  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
- install nodejs
	download from site the current version, perform the installation with default settings, using powershell, I downgraded to version 6 with,
	command : npm i -g npm@6
		and check if it is downgraded with,
		  npm --version


-----

- Opened visual studio code after installation, checked versions with ng version command in terminal
Angular CLI: 16.2.0
Node: 20.5.1 (Unsupported)
Package Manager: npm 6.14.18
OS: win32 x64

- I also downloaded Angular Language Service in VSCode.

- In my project folder, I run the command ng new CRUD.UI to set up my project, I used Angular routing and CSS.
- I then right clicked my project name and opened with integrated terminal.
- I created components, models and services folders inside the CRUD_Project\CRUD.UI\src\app folder.

-----

IN CRUD.UI

- I created a class named User in CRUD_Project\CRUD.UI\src\app\models\user.ts
- I then changed directory to CRUD_Project\CRUD.UI\src\app\services and in this directory I used ng g s user --skip-tests to create the service.
- Inside this service I created the getUser method to return a user array with an observable.
- Afterwards, I created a component with users array on CRUD_Project\CRUD.UI\src\app with users array. Then created a table with user attributes in html.

AFTER (*)
- Since my Angular CLI is version 16.2.0, in order to acquire environments.ts, I used ng g environments command.
- I then modified the environment production and apiUrl, modified the user.service.ts url and in app.module.ts I added HttpClientModule to imports. Then, I injected to the user.service HttpClient. (!)

AFTER (><)
- Now I created a new component with ng g c editUser --skip-tests command in my components folder in order to update users.
- I added couple of buttons and text boxes in order to provide some UI to the client in to editusercomponent.html. I also bonded update, delete and create functions to the corresponding buttons.
- I also added 2 main buttons to app.component.html as edit and create buttons. I also added the http call for real time table refresh and sql database update by writing the corresponding CRUD operation functions to editUser component.
-----

IN CRUD_API

- I created a public class User with the same properties as in CRUD.UI
- I also created an empty userController and defined the method getUsers
- Afterwards, I ran swaggerUI and obtained curl localhost https. (*)

AFTER (!)
- I went to Program.cs and used builder.Services.AddCors to add a policy for our localhost with name userOrigins and used it in order to allow this http.
- Then, I added the Data folder and DataContext.cs and installed Microsoft.EntityFrameworkCore, NuGet package Microsoft.EntityFrameworkCore.Design and Microsoft.EntityFrameworkCore.SqlServer.
- After, I handled DataContext with user DbSet, then added a connection string to appsettings.json . I added this connection string to Program.cs again, as DefaultConnection. I then installed the dotnet-ef to my project directory using package manager console with command dotnet tool install --global dotnet-ef. In my case it installed version 7.0.10.
- When this step finished I finally migrated using dotnet ef migrations add Initial command and acquired migrations folder. Then, in order to create the database I used dotnet ef database update command and created the database.
- After I see that the database is created, I modified the userController to possess the DataContext and now it is directly communicating with the SQL database. With this, I finished the boilerplate code. (><)

AFTER (><)

- I added the HttpPost, HttpPut and HttpDelete async methods to my userController. This concluded my basic API.
-----

I used Microsoft SQL Server Management Studio for my SQL server and I migrated the project.

-----