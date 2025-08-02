"use client";
import { invoke } from "@tauri-apps/api/core";
import React, { createContext, useContext, useEffect, useState } from "react";

interface Admin {
  id: string;
  identifier: string;
  email: string;
}

interface authContextValues {
  admin: Admin | null;
  setAdmin: React.Dispatch<React.SetStateAction<Admin | null>>;
  retrieveAdmin(): Promise<void>;
}

interface RetrieveAdmin {
  admin_data: {
    id: string;
    identifier: string;
    email: string;
  };
}

const authContext = createContext({} as authContextValues);
export const useAuth = () => useContext(authContext);

export default function AuthProvider({ children }: { children: React.ReactNode }) {

  const adminMock: RetrieveAdmin["admin_data"] = {
    id: "1",
    identifier: "Admin",
    email: "thayza.therian@gmail.com"

  }
  
  const [admin, setAdmin] = useState<Admin | null>(adminMock);

  async function retrieveAdmin() {
    const authToken = sessionStorage.getItem("auth_token");

    const request = await invoke("get", { url: "http://localhost:3333/auth/retrieve_admin", authToken: authToken })
      .then((response) => {
        const data = response as RetrieveAdmin;
        setAdmin(data.admin_data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const valuesToProvider = {
    admin,
    setAdmin,
    retrieveAdmin,
  };

  useEffect(() => {
    retrieveAdmin();
  }, []);

  return <authContext.Provider value={valuesToProvider}>{children}</authContext.Provider>;
}
