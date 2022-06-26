export enum MenuItemEnum {
    Account = 'Account',
    Notifications = 'Notifications',
    Security = 'Security',
    Delete_Account = 'Delete Account',
    Logout = 'Logout',
}

export const MenuItemsData: { title: MenuItemEnum }[] = [
    {
        title: MenuItemEnum.Account,
    },
    {
        title: MenuItemEnum.Notifications,
    },
    {
        title: MenuItemEnum.Security,
    },
    {
        title: MenuItemEnum.Logout,
    },
    {
        title: MenuItemEnum.Delete_Account,
    },
];
