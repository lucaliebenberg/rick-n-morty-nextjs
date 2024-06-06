import {getLocations} from "@/app/api/getLocations";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default async function LocationsPage() {
  const returnedData = await getLocations()
  // console.log('returned data --> ', returnedData)
  const locations = returnedData.results
  console.log('characters --> ', locations)

  return (
    <div className={"h-full text-white"}>
      <div className={"mt-20"}>
        <Table>
          <TableCaption className={"text-white text-[1.1rem] mt-5"}>A list of all the Rick n Morty
            locations!</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-white">ID</TableHead>
              <TableHead className={"text-white"}>Name</TableHead>
              <TableHead className={"text-white"}>Type</TableHead>
              <TableHead className="text-right text-white">Created</TableHead>
            </TableRow>
          </TableHeader>
          {locations.map((item: any) => (
            <>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell className="text-right">{item.created}</TableCell>
                </TableRow>
              </TableBody>
            </>
          ))}
        </Table>
      </div>
    </div>
  )
}