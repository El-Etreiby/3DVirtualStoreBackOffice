using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class StoreSetup : MonoBehaviour
{
    public GameObject planePrefab;
    public GameObject wallPrefab;
    public GameObject shelfPrefab;
    public bool execute;
    private GameObject parent;
    // Start is called before the first frame update
    void Start()
    {
        SetupStore();
    }

    // Update is called once per frame
    void Update()
    {
        if(execute){
            SetupStore();
            execute=false;
        }
        
    }
    public async void SetupStore(){
        if(parent!=null){
            DestroyImmediate(parent);
        }
        parent = new GameObject("Parent");
        float wallRotation = 0f;
        float leftShelfPosition = 0f;
        float rightShelfPosition = 0f;
        for(int i = 0; i < 7; i++){
            for(int j = 0; j < 6; j++){

                GameObject ground = Instantiate(planePrefab, new Vector3(i*10,0,j*10), Quaternion.identity);
                ground.transform.parent = parent.transform;
                ground.name = string.Format("Ground : ({0},{1})",i,j);
                 
                 if(i>0 && i<6 && j>0 && j<5){
                 GameObject wall = Instantiate(wallPrefab, new Vector3(i*10,5,j*10), Quaternion.LookRotation(new Vector3(0f,1800f+wallRotation,180f+wallRotation)));
                wall.transform.parent = parent.transform;
                wall.name = string.Format("Wall : ({0},{1})",i,j);

                wallRotation+=15;

                switch(i){
                    case 1:
                    rightShelfPosition = 9f;
                    leftShelfPosition = 11f;
                    break;
                    case 2:
                    rightShelfPosition = 9.2f;
                    leftShelfPosition = 10.8f;
                    break;
                    case 3:
                    rightShelfPosition = 9.4f;
                    leftShelfPosition = 10.6f;
                    break;
                    case 4:
                    rightShelfPosition = 9.6f;
                    leftShelfPosition = 10.4f;
                    break;
                    case 5:
                    rightShelfPosition = 9.8f;
                    leftShelfPosition = 10.2f;
                    break;

                }

                 GameObject rightShelf = Instantiate(shelfPrefab, new Vector3(i*rightShelfPosition,0,j*10), Quaternion.LookRotation(new Vector3(90f,0f,0f)));
                rightShelf.transform.parent = parent.transform;
                rightShelf.name = string.Format("shelf : ({0},{1})",i,j);

                 GameObject leftShelf = Instantiate(shelfPrefab, new Vector3(i*leftShelfPosition,0,j*10), Quaternion.LookRotation(new Vector3(90f,0f,0f)));
                leftShelf.transform.parent = parent.transform;
                leftShelf.name = string.Format("shelf(1) : ({0},{1})",i,j);
                 }
                if((i==0 || i==6)) {
                 GameObject wall1 = Instantiate(wallPrefab, new Vector3(i*10,5,j*10), Quaternion.LookRotation(new Vector3(0f,-1770f,-1800f)));
                wall1.transform.parent = parent.transform;
                wall1.name = string.Format("Rotated Wall : ({0},{1})",i,j);
                }

                // GameObject ceiling = Instantiate(wallPrefab, new Vector3(i*10,10,j*10), Quaternion.LookRotation(new Vector3(0f,0f,90f)));
                // ceiling.transform.parent = parent.transform;
                // ceiling.name = string.Format("Ceiling : ({0},{1})",i,j);


               

            }
        }
    }
}
