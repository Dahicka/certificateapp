import Dexie from 'dexie';

// Database that stores certificates.
const db = new Dexie("Certficates");
db.version(1).stores({
  certificates: "++id,supplier,certificateType,validFrom,validTo,participants,comments",
});
export default db;