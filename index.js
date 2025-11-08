
// Utility Functions

/**
 * Capitalizes the first letter of each word in the input string.
 * @param {string} input - The input string.
 * @returns {string} - The formatted string.
 */
function capitalizeWords(input) {
    if (input === '') {
        return 'Error: cannot be left empty';
    }
    
    return input.replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Filters active users from the array.
 * @param {Array} users - An array of user objects.
 * @returns {Array} - An array of active user objects.
 */
function filterActiveUsers(users) {
    if (users.length === 0) {
        return 'Users cannot be empty';
    }
    
    const activeUsers = users.filter(user => user.isActive);
    
    if (activeUsers.length === 0) {
        return 'All users inactive';
    }

    return activeUsers;
}

/**
 * Logs an action performed by a user with a timestamp.
 * @param {string} action - The action performed.
 * @param {string} username - The name of the user.
 * @returns {string} - The log message.
 */
function logAction(action, username) {
    if (username === '' && action === '') {
        return 'Error: No parameters provided';
    }
    if (username === '') {
        return 'Error: Username must be provided';
    }
    if (action === '') {
        return 'Error: Action must be provided';
    }
    
    const timestamp = new Date().toISOString();
    return `User ${username} performed ${action} at ${timestamp}`;
}

module.exports = { capitalizeWords, filterActiveUsers, logAction };
