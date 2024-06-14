// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
  try{
      const centralDB = await central(id);
      const userInfo = await (centralDB === "db1" ? db1(id): centralDB === "db2" ? db2(id): centralDB === "db3" ? db3(id))
      const personalData = await vault(id);

      return {
        id,
        name: personalData.name,
        username: userInfo.username,
        email: personalData.email,
        address: personalData.address,
        phone: personalData.phone,
        website: userInfo.website,
        company: userInfo.company
        
      };
  } catch(err){
    return Promise.reject(err.message);
  }
}
getUserData(2)
.then(data => console.log(data))
.catch(error => console.error(error))