// import React, { useState } from "react";
// import { db } from "./firebaseConfig"; 
// import { ref, set } from "firebase/database";
// import teachers from "./teachers.json"; 

// const UploadTeachers = () => {
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const uploadTeachers = async () => {
//     setLoading(true);
//     setMessage("");

//     try {
//       const teachersRef = ref(db, "teachers");
//       await set(teachersRef, teachers);
//       setMessage("✅ Дані успішно завантажені у Firebase!");
//     } catch (error) {
//       setMessage("❌ Помилка при завантаженні даних: " + error.message);
//     }

//     setLoading(false);
//   };

//   return (
//     <div>
//       <h2>Завантажити викладачів у Firebase</h2>
//       <button onClick={uploadTeachers} disabled={loading}>
//         {loading ? "Завантаження..." : "Завантажити"}
//       </button>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default UploadTeachers;