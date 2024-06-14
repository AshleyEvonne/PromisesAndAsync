// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
  try{
      const centralDB = await central(id); // used to access the data of each data base
      const userInfo = await dbs[centralDB](id);
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