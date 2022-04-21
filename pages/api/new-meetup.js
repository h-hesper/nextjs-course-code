import MongoClient from "mongodb/lib/mongo_client";

const handler = async(req, res) => {
  if (req.method === "post") {
    const data = req.body;

    const {title, image, address, description} = data;
 
    const client = await MongoClient.connect("mongodb+srv://nextjstest:12345@cluster0.vsi0k.mongodb.net/meetups?retryWrites=true&w=majority");

    const db = client.db();

    const meetupCollection = db.collection("meetupDetail");

    const result = await meetupsCollection.insertOne(data);

    console.log(result)

    client.close();

    res.status(201).json({msg: "meetup updated!"})

  }
};

export default handler;
