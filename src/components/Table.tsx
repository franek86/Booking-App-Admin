import { useContext, createContext } from "react";

type TableContextProps = {
  columns: string;
};

type TableProps = {
  columns: string;
  children: React.ReactNode;
};

const TableContext = createContext<TableContextProps>({ columns: "" });

function Table({ columns, children }: TableProps) {
  return (
    <TableContext.Provider value={{ columns }}>
      <main className='bg-white my-5 rounded shadow border border-gray-200'>{children}</main>
    </TableContext.Provider>
  );
}

function Header({ children }: { children: React.ReactNode }) {
  const { columns } = useContext(TableContext);

  return (
    <header
      className='grid text-sm p-4 font-bold border-b border-gray-200'
      style={columns ? { gridTemplateColumns: `${columns}` } : undefined}
    >
      {children}
    </header>
  );
}
function Row({ children }: { children: React.ReactNode }) {
  const { columns } = useContext(TableContext);

  return (
    <div className='grid text-sm p-4 border-b border-gray-200' style={columns ? { gridTemplateColumns: `${columns}` } : undefined}>
      {children}
    </div>
  );
}
function Body({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;

export default Table;
