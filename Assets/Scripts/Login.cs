using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using TMPro;
using UnityEngine.SceneManagement;

public class UserData
{
    public string password;
    public string email;
}

public class Login : MonoBehaviour
{
    [SerializeField] private string authenticationEndpoint = "http://localhost:2000/api/user/";
    [SerializeField] private TMP_InputField emailInputField;
    [SerializeField] private TMP_InputField passwordInputField;
    // Start is called before the first frame update
    public void OnLoginClick()
    {
        StartCoroutine(AttemptLogin());
    }
    public void LoadStore()
    {
        SceneManager.LoadScene(3);
    }

    public void LoadSignupPage(){
        SceneManager.LoadScene(2);
    }
    private IEnumerator AttemptLogin()
    {

        string email = emailInputField.text;
        string password = passwordInputField.text;

        var user = new UserData();
        user.email = email;
        user.password = password;

        string json = JsonUtility.ToJson(user);

        var req = new UnityWebRequest(authenticationEndpoint + "signin", "POST");
        byte[] jsonToSend = new System.Text.UTF8Encoding().GetBytes(json);
        req.uploadHandler = (UploadHandler)new UploadHandlerRaw(jsonToSend);
        req.downloadHandler = (DownloadHandler)new DownloadHandlerBuffer();
        req.SetRequestHeader("Content-Type", "application/json");

        //Send the request then wait here until it returns
        yield return req.SendWebRequest();

         

         if (req.responseCode==200)
         {
             LoadStore();
         }
         else 
         {
             Debug.Log(req.result);
         }
    }
}
