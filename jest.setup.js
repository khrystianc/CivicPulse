import '@testing-library/jest-native/extend-expect';

// Mock react-native modules that cause issues in tests
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
