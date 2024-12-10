import FloatBtn from "@/components/FloatBtn";
import Table from "@/components/Table";

function SailingArea() {
  return (
    <>
      <h1 className='main-heading'>Sailing Area</h1>

      <FloatBtn>
        <Table columns='1fr 1fr 1fr 50px'>
          <Table.Header>
            <div>Region</div>
            <div>Number of bases</div>
            <div>Number of boats</div>
            <div>Actions</div>
          </Table.Header>

          <Table.Row>
            <div>Sibenik region</div>
            <div>24 bases</div>
            <div>1239 yachts</div>

            <FloatBtn.Toggle current='text1' />
            <FloatBtn.Box current='text1' />
          </Table.Row>
          <Table.Row>
            <div>Sibenik region</div>
            <div>24 bases</div>
            <div>1239 yachts</div>

            <FloatBtn.Toggle current='text2' />
            <FloatBtn.Box current='text2' />
          </Table.Row>
        </Table>
      </FloatBtn>
    </>
  );
}

export default SailingArea;
