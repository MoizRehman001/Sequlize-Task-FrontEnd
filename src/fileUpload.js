import React, { useState } from 'react';
import axios from 'axios';

function FileUploadUser() {
  const [document, setDocument] = useState(null);
  const [username, setUsername] = useState('');

  const handleFileChange = (event) => {
    setDocument(event.target.files[0]);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append('document', document);
      formData.append('username', username);

      const response = await axios.post('http://localhost:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data);
      // Handle success
    } catch (error) {
      console.error('Error uploading document:', error.response.data.error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Document Upload Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="document">Choose File:</label>
          <input type="file" id="document" accept=".pdf" onChange={handleFileChange} />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <button type="submit">Upload Document</button>
      </form>
    </div>
  );
}

export default FileUploadUser;

































// import React, { useState } from 'react';
// import axios from 'axios';

// function FileUploadUser() {
//   const [file, setFile] = useState(null);
//   const [filePreview, setFilePreview] = useState(null); // State to store file preview
//   const [username, setUsername] = useState('');

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     setFile(selectedFile);
//     // Display preview for images
//     if (selectedFile && selectedFile.type.startsWith('image/')) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFilePreview(reader.result);
//       };
//       reader.readAsDataURL(selectedFile);
//     } else {
//       setFilePreview(null);
//     }
//   };

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append('document', file);
//       formData.append('username', username);

//       const response = await axios.post('http://localhost:8000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       console.log(response.data);
//       // Handle success
//     } catch (error) {
//       console.error('Error uploading document:', error.response.data.error);
//       // Handle error
//     }
//   };

//   return (
//     <div>
//       <h2>Document Upload Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="document">Choose File:</label>
//           <input type="file" id="document" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} />
//         </div>
//         {filePreview && (
//           <div>
//             <h3>File Preview:</h3>
//             {/* Display preview for images */}
//             {file.type.startsWith('image/') && <img src={filePreview} alt="File Preview" style={{ maxWidth: '100%' }} />}
//             {/* Add other types of previews here */}
//           </div>
//         )}
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input type="text" id="username" value={username} onChange={handleUsernameChange} />
//         </div>
//         <button type="submit">Upload Document</button>
//       </form>
//     </div>
//   );
// }

// export default FileUploadUser;




// import React, { useState } from "react";
// import axios from "axios";

// function FileUploadUser() {
//   const [file, setFile] = useState(null);
//   const [username, setUsername] = useState("");
//   const [data, setData] = useState({
//     document: null,
//     username: "",
//   });

//   const handleFileChange = (event) => {
//     console.log(event.target.value);
//     setData({...data , document : event.target.value })
//     // setFile(event.target.value);
//   };

//   const handleUsernameChange = (event) => {
//     setData({...data , username : event.target.value })
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:8000/upload",
//         data
//       );

//       console.log(response.data);
//       // Handle success
//     } catch (error) {
//       console.error("Error uploading document:", error.response.data.error);
//       // Handle error
//     }
//   };

//   return (
//     <div>
//       <h2>Document Upload Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="document">Choose File:</label>
//           <input
//             type="file"
//             id="document"
//             accept=".pdf"
//             onChange={handleFileChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={data?.username}
//             onChange={handleUsernameChange}
//           />
//         </div>
//         <button type="submit">Upload Document</button>
//       </form>
//     </div>
//   );
// }

// export default FileUploadUser;

// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function FileUploadUser() {
// //   const [document, setDocument] = useState('');
// //   const [username, setUsername] = useState('');

// //   const handleFileChange = (event) => {
// //     setDocument(event.target.value);
// //   };

// //   const handleUsernameChange = (event) => {
// //     setUsername(event.target.value);
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     try {
// //       const requestData = { document, username };
// //       const response = await axios.post('http://localhost:8000/upload', requestData);
// //       console.log(response.data);
// //       // Handle success
// //     } catch (error) {
// //       console.error('Error uploading document:', error.response.data.error);
// //       // Handle error
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Document Upload Form</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label htmlFor="document">Document:</label>
// //           <input type="file" id="document" value={document} onChange={handleFileChange} />
// //         </div>
// //         <div>
// //           <label htmlFor="username">Username:</label>
// //           <input type="text" id="username" value={username} onChange={handleUsernameChange} />
// //         </div>
// //         <button type="submit">Upload Document</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default FileUploadUser;
