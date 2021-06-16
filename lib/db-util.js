import { MongoClient } from 'mongodb';
export const connectDB = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://coreymunn:Sherm@n5@cluster0.kdjja.mongodb.net/meetup-db?retryWrites=true&w=majority'
  );
  return client;
};
