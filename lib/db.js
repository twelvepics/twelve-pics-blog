import { Database } from "arangojs";

export function getDb(context) {
  console.log("-- Init DB --");
  const dbUser = context ? context.$config.dbUser : process.env.DB_USER;
  const dbPasswd = context ? context.$config.dbPasswd : process.env.DB_PASSWORD;
  const sysdb = new Database();
  console.log("#----------- DB INITED --------------#");
  // console.log(`${dbUser}/${dbPasswd}`);
  sysdb.useBasicAuth(dbUser, dbPasswd);
  const db = sysdb.database("blog");
  return () => {
    console.log("GET DB FUNC I WAS CALLED");
    return db;
  };
}
