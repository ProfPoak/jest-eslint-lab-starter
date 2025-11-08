const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

// capitalizeWords tests
describe('capitalizeWords', () => {
    it('Capitalizes the first letter of each word in the input string', () => {
        const input = 'the happy married couple';

        const capInput = capitalizeWords(input);

        expect(capInput).toBe('The Happy Married Couple');
    });

    it('Handles an empty string', () => {
        const input = '';

        const capInput = capitalizeWords(input);

        expect(capInput).toBe('Error: cannot be left empty');
    });

    it('Handles a single-word string', () => {
        const input = 'single';

        const capInput = capitalizeWords(input);

        expect(capInput).toBe('Single');
    });
});

// filterActiveUsers tests
describe('filterActiveUsers', () => {
    it('Filters active users from the array', () => {
        const users = [{ name: 'User1', isActive: true }];

        const activeUsers = filterActiveUsers(users);

        expect(activeUsers).toEqual([{ name: 'User1', isActive: true }]);
    });

    it('Handles an array with mixed active/inactive users', () => {
        const users = [
            { name: 'User1', isActive: true }, 
            { name: 'User2', isActive: false }
        ];

        const activeUsers = filterActiveUsers(users);

        expect(activeUsers).toEqual([{ name: 'User1', isActive: true }]);
    });

    it('Handles an array with all inactive users', () => {
        const users = [
            { name: 'User1', isActive: false }, 
            { name: 'User2', isActive: false }
        ];

        const activeUsers = filterActiveUsers(users);

        expect(activeUsers).toBe('All users inactive');
    });

    it('Handles an empty array', () => {
        const users = [];

        const activeUsers = filterActiveUsers(users);

        expect(activeUsers).toBe('Users cannot be empty');
    });
});

// logAction tests
describe('logAction', () => {
    it('Logs an action performed by a user with a timestamp', () => {
        const action = 'Action';
        const username = 'Porter';

        const logMessage = logAction(action, username);
        
        // Verify the message format
        expect(logMessage).toMatch(/^User Porter performed Action at \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
    });

    it('Handles a missing action', () => {
        const action = '';
        const username = 'Porter';

        const logMessage = logAction(action, username);

        expect(logMessage).toBe('Error: Action must be provided');
    });

    it('Handles a missing username', () => {
        const action = 'Action';
        const username = '';

        const logMessage = logAction(action, username);

        expect(logMessage).toBe('Error: Username must be provided');
    });

    it('Handles empty parameters', () => {
        const action = '';
        const username = '';

        const logMessage = logAction(action, username);

        expect(logMessage).toBe('Error: No parameters provided');
    });
});