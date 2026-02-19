import "./DownloadButton.css";

const DownloadButton = ({ url }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "imagen.jpg");
    link.setAttribute("target", "_blank"); // abre en nueva pestaña si no permite download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="btn-download" onClick={handleDownload}>
      Descargar
    </button>
  );
};

export default DownloadButton;
