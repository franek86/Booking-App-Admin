import FloatBtn from "@/components/FloatBtn";
import Table from "@/components/Table";

function SailingArea() {
  return (
    <>
      <h1 className='main-heading'>Sailing Area</h1>

      <Table columns='4'>
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
          <div>
            <FloatBtn>
              <FloatBtn.Toggle current='text1' />
              <FloatBtn.Box current='text2' />
            </FloatBtn>
          </div>
        </Table.Row>
        <Table.Row>
          <div>Sibenik region</div>
          <div>24 bases</div>
          <div>1239 yachts</div>
          <div>
            <FloatBtn>
              <FloatBtn.Toggle current='text2' />
              <FloatBtn.Box current='text2' />
            </FloatBtn>
          </div>
        </Table.Row>
      </Table>
    </>
  );
}

export default SailingArea;
