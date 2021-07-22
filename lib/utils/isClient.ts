/**
 * Exports a boolean value reporting whether is client side or server side by checking on the window object
 */
const isClient: boolean = typeof window === 'object';

export default isClient;
