const users = [
    { id: 1, name: 'Peter', email: 'peter@peter.com' },
    { id: 2, name: 'Parker', email: 'parker@peter.com' }
];

export class User {
    static findAll(): Promise<any> {
        return Promise.resolve(users);
    }
    static findById(id: number): Promise<any> {
        return Promise.resolve(users.find(o => o.id == id));
    }
}