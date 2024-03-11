import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { WorkingLocationType } from "@app/models/event";
import HomeIcon from "@mui/icons-material/Home";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import BusinessIcon from "@mui/icons-material/Business";
import CodeOffIcon from "@mui/icons-material/CodeOff";

const rows = [
  {
    user: { id: 1, name: "Mr A" },
    monday: [{ workingLocation: WorkingLocationType.officeLocation }],
    tuesday: [{ workingLocation: WorkingLocationType.officeLocation }],
    wednesday: [{ workingLocation: WorkingLocationType.homeOffice }],
    thursday: [{ workingLocation: WorkingLocationType.homeOffice }],
    friday: [{ workingLocation: WorkingLocationType.other }],
    saturday: [{ workingLocation: WorkingLocationType.outOfOffice }],
    sunday: [{ workingLocation: WorkingLocationType.outOfOffice }],
  },
  {
    user: { id: 2, name: "Mr B" },
    monday: [{ workingLocation: WorkingLocationType.officeLocation }],
    tuesday: [{ workingLocation: WorkingLocationType.officeLocation }],
    wednesday: [{ workingLocation: WorkingLocationType.homeOffice }],
    thursday: [{ workingLocation: WorkingLocationType.homeOffice }],
    friday: [{ workingLocation: WorkingLocationType.other }],
    saturday: [{ workingLocation: WorkingLocationType.outOfOffice }],
    sunday: [{ workingLocation: WorkingLocationType.outOfOffice }],
  },
];

const workingLocationToIcon = (workingLocation: WorkingLocationType) => {
  switch (workingLocation) {
    case WorkingLocationType.homeOffice:
      return <HomeIcon />;
    case WorkingLocationType.officeLocation:
      return <BusinessIcon />;
    case WorkingLocationType.outOfOffice:
      return <CodeOffIcon />;
    default:
      return <QuestionMarkIcon />;
  }
};

const daysOfWeek = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export default function Calendar() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">User</TableCell>
            <TableCell align="right">Monday</TableCell>
            <TableCell align="right">Tuesday</TableCell>
            <TableCell align="right">Wednesday</TableCell>
            <TableCell align="right">Thursday</TableCell>
            <TableCell align="right">Friday</TableCell>
            <TableCell align="right">Saturday</TableCell>
            <TableCell align="right">Sunday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.user.id || 1}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {row.user && (
                <TableCell component="th" scope="row" align="right">
                  {row.user.name}
                </TableCell>
              )}
              {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                <TableCell align="right" key={`dow-${index}`}>
                  {workingLocationToIcon(
                    Reflect.get(row, daysOfWeek[index])[0].workingLocation
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
