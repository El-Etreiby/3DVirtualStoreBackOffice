using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;

public class changeInput : MonoBehaviour
{
    EventSystem system;
    public Selectable input;
    public Button submitButton;
    // Start is called before the first frame update
    void Start()
    {
        system = EventSystem.current;
        input.Select();
    }

    // Update is called once per frame
    void Update()
    {
        if(Input.GetKey(KeyCode.LeftShift) && Input.GetKeyDown(KeyCode.Tab)){
            Selectable previous = system.currentSelectedGameObject.GetComponent<Selectable>().FindSelectableOnUp();
            if(previous != null){
                previous.Select();
            }
        }
        else if(Input.GetKeyDown(KeyCode.Tab)){
            Selectable next = system.currentSelectedGameObject.GetComponent<Selectable>().FindSelectableOnDown();
            if(next != null){
                next.Select();
            }
        }
        else if(Input.GetKeyDown(KeyCode.Return)){
            submitButton.onClick.Invoke();
            Debug.Log("Button pressed");
        }
    }
}
