"use client";
import { Ref, useEffect, useRef, useState } from "react";

type videoRefProps = Ref<HTMLVideoElement> & {
  srcObject?: MediaStream;
};

export default function WebCamViewer() {
  const videoRef = useRef<videoRefProps>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error: any) {
        console.log("Erro ao acessar a camera", error);
        if (error.name === "NotAllowedError") {
          setError("Permissão de câmera negada. Por favor, permita o acesso nas configurações do navegador.");
        } else if (error.name === "NotFoundError" || error.name === "DevicesNotFoundError") {
          setError("Nenhuma câmera encontrada ou disponível.");
        } else {
          setError(`Erro: ${error.message}`);
        }
      }
    };
    startWebcam();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div>
      {error && <p className=" text-red-400 ">{error}</p>}
      <video
        className=" w-full max-w-full border rounded-md "
        ref={videoRef}
        autoPlay
        playsInline
        muted
      />
    </div>
  );
}
