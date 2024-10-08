import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getUsers } from '@/lib/data';

const tableHeads = ['ID', 'Name', 'Email'];

export default async function UsersPage() {
  const users = await getUsers();
  return (
    <div>
      <h2 className="mb-4 font-semibold text-xl">Users</h2>
      <Table>
        <TableHeader>
          <TableRow>
            {tableHeads.map((tableHead) => (
              <TableHead key={tableHead}>{tableHead}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
