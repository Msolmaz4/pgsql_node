
![pgsql](https://github.com/Msolmaz4/pgsql_node/assets/86296198/805ab83c-8c64-4f8a-989c-8b65cf391fd1)


create User dDOC
https://node-postgres.com/features/queriesconst
 text = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *'
const values = ['brianc', 'brian.m.carlson@gmail.com']
 const res = await client.query(text, values)

https://hasura.io/learn/database/postgresql/installation/2-postgresql-connection-string/
burdan env baglanti icin postgresql://username:password@host:port/dbname[?paramspec] bunu kullandik
DB_CONNECTION_STRING=postgresql://postgres:**********@localhost:5432/test localhostu unutma
https://node-postgres.com/ buda node gore doc



├─ .env
├─ db.js
├─ index.js
├─ package-lock.json
├─ package.json
├─ routes
│  └─ userRouter.js
└─ test.rest

```
