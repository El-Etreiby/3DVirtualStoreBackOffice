using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using MongoDB.Driver;
using MongoDB.Bson;


public class DatabaseAccess : MonoBehaviour
{
    MongoClient client = new MongoClient("mongodb+srv://MayaKhaled:Yooya2000@grocerystore.zfizl.mongodb.net/?retryWrites=true&w=majority");
    // Start is called before the first frame update
    IMongoDatabase database;
    IMongoCollection<BsonDocument> collection;
    void Start()
    {
        database = client.GetDatabase("grocerystore");
        collection = database.GetCollection<BsonDocument>("products");
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
