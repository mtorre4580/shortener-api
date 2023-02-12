import UUID from 'uuid-int';

const generator = UUID(0);

/**
 * Create a unique integer to use
 */
function generateID() {
  return generator.uuid();
}

export default generateID;
