#[cfg_attr(mobile, tauri::mobile_entry_point)]

mod api;

pub fn run() {
  tauri::Builder::default().invoke_handler(tauri::generate_handler![api::get, api::post, api::auth_token])
    .setup(|app| {
      if cfg!(debug_assertions) {
        app.handle().plugin(
          tauri_plugin_log::Builder::default()
            .level(log::LevelFilter::Info)
            .build(),
        )?;
      }
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
