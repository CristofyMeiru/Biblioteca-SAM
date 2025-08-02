
use reqwest::{header, Response};
use serde_json::{self, Number};
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct ApiResponse {
  #[serde(flatten)]
  pub data: serde_json::Value,
}


#[tauri::command]
pub async fn get(url: String, auth_token: Option<String>) -> Result<ApiResponse, String> {

  let client = reqwest::Client::new();
  println!("Bearer {}", auth_token.as_deref().unwrap_or("Null"));
  let mut request = client.get(&url);
  
  if let Some(token) = auth_token {
    println!("Bearer {}", token);
    request = request.header("Authorization", format!("Bearer {}", token));
  }
  
  let response = request.send().await.map_err(|e| e.to_string())?;
  
  if response.status().is_success() {
    let data = response.json::<serde_json::Value>().await.map_err(|e| e.to_string())?;
    Ok(ApiResponse { data })
  } else {
        let error_text = response.text().await.map_err(|e| e.to_string())?;

        Err(error_text)
  }
  
}


#[tauri::command]
pub async fn post(url: String, body: serde_json::Value) -> Result<ApiResponse, String> {
    let client = reqwest::Client::new();
    let response = client.post(url).json(&body).send().await.map_err(|e| e.to_string())?;

    if response.status().is_success() {
        
        let data = response.json::<serde_json::Value>().await.map_err(|e| e.to_string())?;
       
        Ok(ApiResponse { data })
    } else {
        let error_text = response.text().await.map_err(|e| e.to_string())?;

        Err(error_text)
    }
}

#[tauri::command]
pub async fn auth_token(auth_token: String) -> Result<(), ()>{

  println!("Token {}", auth_token);

 Ok(()) 
}