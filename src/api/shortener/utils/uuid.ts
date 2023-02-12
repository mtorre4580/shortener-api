import UUID from 'uuid-int';

const generator = UUID(0);

function generateID() {
  return generator.uuid();
}

export default generateID;
