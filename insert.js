const dbConnect = require("./mongodb");

const inserted = async () => {
  const db = await dbConnect();
  const result = await db.insertOne(
    {
      name: "Note 5",
      brand: "vivo",
      Product: "mobile",
    },
    {
      name: "Note 65",
      brand: "Redmi",
      Product: "mobile",
    },
    {
      name: "Note 5",
      brand: "Mi",
      Product: "mobile",
    }
  );
  console.log(result);
};
inserted();
