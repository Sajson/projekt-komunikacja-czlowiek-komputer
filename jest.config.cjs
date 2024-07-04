module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    testEnvironment: "jest-environment-jsdom",
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
    testPathIgnorePatterns: [
        "/node_modules/"
    ],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
        '^.+\\.tsx?$': 'babel-jest'
    },
    verbose: true,
};