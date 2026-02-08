const startUpload = () => {
  if (!file) return;

  const xhr = new XMLHttpRequest();
  const formData = new FormData();

  formData.append("file", file);

  xhr.open("POST", "https://example.com/upload");

  setIsUploading(true);

  xhr.upload.onprogress = (event) => {
    if (!event.lengthComputable) return;

    const percent = Math.round((event.loaded / event.total) * 100);

    setProgress(percent);
  };

  xhr.onload = () => {
    setIsUploading(false);
    setProgress(100);
  };

  xhr.onerror = () => {
    setIsUploading(false);
    alert("Upload failed");
  };

  xhr.send(formData);
};
