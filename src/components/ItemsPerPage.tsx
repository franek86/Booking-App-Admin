import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type ItemsPerPageProps = {
  handleChange: (value: string) => void;
  currentValue: number;
};

function ItemsPerPage({ handleChange }: ItemsPerPageProps) {
  return (
    <>
      <Select onValueChange={handleChange}>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Select per page' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='5'>5</SelectItem>
          <SelectItem value='10'>10</SelectItem>
          <SelectItem value='25'>25</SelectItem>
          <SelectItem value='50'>50</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}

export default ItemsPerPage;
