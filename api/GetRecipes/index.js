const sql = require("mssql");

module.exports = async function (context, req) {
  try {
    await sql.connect(process.env["AZURESQLCONNECTION"]);
    const result = await sql.query("SELECT * FROM Recipes.Recipes");
    context.res = {
      status: 200,
      body: result.recordset,
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (err) {
    context.log(err);
    context.res = {
      status: 500,
      body: "Error connecting to database",
    };
  }
  await sql.close();
};
