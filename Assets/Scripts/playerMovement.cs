using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class playerMovement : MonoBehaviour
{
    // Start is called before the first frame update
    public CharacterController controller;

    public float speed = 10f;
    void Start()
    {
        // Vector3 move = transform.right + transform.up + transform.forward;
        // controller.Move(move*speed);
        
    }

    // Update is called once per frame
    void Update()
    {
        float x = Input.GetAxis("Horizontal");
        float z = Input.GetAxis("Vertical");

        Vector3 move = transform.right * x + transform.forward * z; 

        controller.Move(move * speed * Time.deltaTime);
        // Debug.Log("move: " + move);

    }
}
