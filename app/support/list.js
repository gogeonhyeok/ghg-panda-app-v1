import { MongoClient } from 'mongodb';

export default async () => {
  const client = new MongoClient("mongodb+srv://gogeonhyeok:qTAB0aDdtRBKocyx@cluster0.smqlq.mongodb.net/?retryWrites=true&w=majority");
  const database = client.db('ghg-master-api-v1');
  const items = await database.collection('requestSupportTypes').find().toArray();
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Description</th>
      </tr>
      {items.map(entry => (
        <tr>
          <td>{entry.supportTypeId}</td>
          <td>{entry.supportTypeDescription}</td>
        </tr>
      ))}
    </table>
    // <ul style={{
    //   display: 'flex',
    //   flexDirection: 'column',
    //   gap: 24,
    //   padding: 24
    // }}>
    //   {items.map((entry) => (
    //     <li>
    //       <h2>{entry.supportTypeId}</h2>
    //       <p>{entry.supportTypeDescription}</p>
    //     </li>
    //   ))}
    // </ul>
  );
}
