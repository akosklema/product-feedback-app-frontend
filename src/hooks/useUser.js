// import { useState, useEffect } from 'react';
// import { getUserDoc } from '../services/firebase/user';
// import { downloadImage } from '../services/firebase/storage';

// function useUser(id) {
//   const [user, setUser] = useState({});
  
//   useEffect(() => {
//     getUserDoc(id)
//       .then((user) => {
//         if (user.data().profileImg === '') {
//           setUser(user.data());
//         } else {
//           downloadImage(id)
//             .then((imageUrl) => {
//               setUser({...user.data(), profileImg: imageUrl});
//             })
//             .catch((error) => console.log(error.message))
//         }
//       })
//       .catch((error) => console.log(error.message));
    
//     return () => {
//       setUser({});
//     }
//   }, [id, getUserDoc]);

//   return user;
// };

// export default useUser;