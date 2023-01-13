app.get("/viewSectors", async (req, res) => {
  const query = {};
  const options = {
    sort: {
      _id: -1
    }
  };
  const cursor = sectorUserCollection.find(query, options).limit(6);
  const result = await cursor.toArray();

  // send the data
  res.send(result);
});
