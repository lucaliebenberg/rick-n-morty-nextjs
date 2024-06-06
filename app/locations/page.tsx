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
    <div className={"h-full"}>
      <div className={""}>
        <Table>
          <TableCaption>A list of all the Rick n Morty locations!</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Created</TableHead>
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