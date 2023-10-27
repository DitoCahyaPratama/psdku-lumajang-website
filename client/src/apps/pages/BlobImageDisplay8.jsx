import React, { useEffect, useState } from "react";

export function BlobImageDisplay({ blob }) {
    const [blobUrl, setBlobUrl] = useState(null);
  
    useEffect(() => {
      if (blob) {
        setBlobUrl(blob)
      }
    }, [blob]);
  
    return (
      <div>
        {blobUrl ? (
          <img src={`data:image/png;base64,${blobUrl}`} style={{ width: "100%"}} alt="Blob Image" />
        ) : (
          <p>No image to display</p>
        )}
      </div>
    );
  }