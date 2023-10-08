import Dexie from 'dexie';
const db = new Dexie("Certficates");
db.version(1).stores({
  certificates: "++id,supplier,certificateType,validFrom,validTo,participants,comments",
});
export default db;