using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using TMPro;
using UnityEngine.SceneManagement;


public class SignupData
{
    public string firstName;
    public string lastName;
    public string phone;
    public string username;
    public string password;
    public string email;
}

public class Signup : MonoBehaviour
{
    [SerializeField] private string authenticationEndpoint = "http://localhost:2000/api/user/";
    [SerializeField] private TMP_InputField emailInputField;
    [SerializeField] private TMP_InputField passwordInputField;

    [SerializeField] private TMP_InputField firstNameInputField;

    [SerializeField] private TMP_InputField lastNameInputField;

    [SerializeField] private TMP_InputField phoneNumberInputField;

    [SerializeField] private TMP_InputField usernameInputField;
    
    public void onSignupClick(){
        Debug.Log("Attempting singup");
        StartCoroutine(AttemptSignup());
    }
    public void LoadStore()
    {
        SceneManager.LoadScene(3);
    }

    private IEnumerator AttemptSignup(){

       string email = emailInputField.text;
       string password = passwordInputField.text;
       string firstName = firstNameInputField.text;
       string lastName = lastNameInputField.text;       
       string phoneNumber =  phoneNumberInputField.text;
       string username = usernameInputField.text;

       var user = new SignupData();
       user.email=email;
       user.firstName=firstName;
       user.lastName=lastName;
       user.phone=phoneNumber;
       user.username=username;
       user.password=password;

       string json = JsonUtility.ToJson(user);

        var req = new UnityWebRequest(authenticationEndpoint + "signup", "POST");
        byte[] jsonToSend = new System.Text.UTF8Encoding().GetBytes(json);
        req.uploadHandler = (UploadHandler)new UploadHandlerRaw(jsonToSend);
        req.downloadHandler = (DownloadHandler)new DownloadHandlerBuffer();
        req.SetRequestHeader("Content-Type", "application/json");
         
        Debug.Log("sending request");
        //Send the request then wait here until it returns
        yield return req.SendWebRequest();

         

         if (req.responseCode==200)
         {
             Debug.Log(req.result+"");
             LoadStore();
         }
         else 
         {
             Debug.Log(req.result+"");
         }


    }

}
