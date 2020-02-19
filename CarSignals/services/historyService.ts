const database = {
    users: [
        {
            email: "alexmurariu98@gmail.com",
            history: [
                {
                    id: '1',
                    img: '',
                    name: 'Signal number 1',
                    cause: 'This is the cause of the problem',
                    fix: 'This is the fix that will solve the problem mentioned above',
                    type: 'type1'
                },
                {
                    id: '2',
                    img: '',
                    name: 'Signal number 2',
                    cause: 'This is the cause of the problem',
                    fix: 'This is the fix that will solve the problem mentioned above',
                    type: 'type2'
                },
                {
                    id: '1',
                    img: '',
                    name: 'Signal number 3',
                    cause: 'This is the cause of the problem',
                    fix: 'This is the fix that will solve the problem mentioned above',
                    type: 'type3'
                },
                {
                    id: '1',
                    img: '',
                    name: 'Signal number 4',
                    cause: 'This is the cause of the problem',
                    fix: 'This is the fix that will solve the problem mentioned above',
                    type: 'type4'
                },
                {
                    id: '1',
                    img: '',
                    name: 'Signal number 5',
                    cause: 'This is the cause of the problem',
                    fix: 'This is the fix that will solve the problem mentioned above',
                    type: 'type6'
                },
                {
                    id: '1',
                    img: '',
                    name: 'Signal number 6',
                    cause: 'This is the cause of the problem',
                    fix: 'This is the fix that will solve the problem mentioned above',
                    type: 'type7'
                }
            ]
        }
    ]
}

class AuthService {
    static myInstance: AuthService;

    static getInstance() {
        if (!this.myInstance) {
            this.myInstance = new AuthService();
        }
        return this.myInstance;
    }

    getDetectedSignals(email: string) {
        database.users.forEach((user: any) => {
            if (email === user.email) {
                return user;
            }
        })
        return null; 
    }
}