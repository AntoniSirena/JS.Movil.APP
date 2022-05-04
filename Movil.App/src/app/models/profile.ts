

export class Profile {
    User: User;
    Person: Person;
}

export class User {
    Id: number;
    UserName: string;
    Name: string;
    Surname: string;
    EmailAddress: string;
    Image: string;
    Token: string;
    RefreshToken: string;
    WelcomeMessage: string;
    MenuTemplate: Object;
    RoleDescription: string;
    RoleShortName: string;
    RoleParent: string;
    
    CanDoInventory: boolean;
    ShowCost: boolean;
    ShowPrice: boolean;
  
    //Crud
    CanCreate: boolean;
    CanEdit: boolean;
    CanDelete: boolean;
  
    IsVisitorUser: boolean;
}
  
export class Person {
    FirstName: string;
    SecondName: string;
    Surname: string;
    secondSurname: string;
    BirthDate: string;
    FullName: string;
    Gender: string;
}