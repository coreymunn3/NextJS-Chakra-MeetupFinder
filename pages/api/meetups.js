import { connectDB } from '../../lib/db-util';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { title, image, address, description } = req.body;
    let client, result;
    try {
      client = await connectDB();
    } catch (error) {
      res.status(500).json({ error: 'Mongo Connection Failed' });
      return;
    }

    try {
      const meetupsCollection = client.db().collection('meetups');
      result = await meetupsCollection.insertOne({
        title,
        image,
        address,
        description,
      });
      client.close();
    } catch (error) {
      client.close();
      res.status(500).json({ error: 'Inserting Data Failed' });
      return;
    }

    res.status(201).json(result.ops);
  }
};

export default handler;
