// import React, { useEffect, useState }  from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Link } from "react-router-dom";
// import { getActorCredits } from "../../api/tmdb-api";
// import { excerpt } from "../../util";

// export default function ActorCredits({ actor }) {
//   const [credits, setCredits] = useState([]);

//   useEffect(() => {
//     getActorCredits(actor.id).then((credits) => {
//       setCredits(credits);
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{minWidth: 550}} aria-label="credits table">
//         <TableHead>
//           <TableRow>
//             <TableCell >Seen in: </TableCell>
//             <TableCell align="center">Overview</TableCell>
//             <TableCell align="right">More</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {credits.cast.map((r) => (
//             <TableRow key={r.id}>
//               <TableCell component="th" scope="row">
//                 {r.title}
//               </TableCell>
//               <TableCell >{excerpt(r.overview)}</TableCell>
//               <TableCell >
//               <Link
//                   to={`/credits/${r.id}`}
//                   state={{
//                       credit: r,
//                       actor: actor,
//                   }}
//                 >
//                   Full Info
//                 </Link>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }