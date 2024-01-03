import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const List = () => {
    const rows = [
        {
          id: 1,

          img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
        
          amount: 50,
          method: "Development",
          status: "4.5",
          earning: "$40",
          visitor: "24512",
        },
        {
          id: 2,

          img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Michael Doe",

          amount: 90,
          method: "Sales",
          status: "4.3",
          earning: "$404",
          visitor: "212",
        },
        {
          id: 3,

          img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",

          amount: 35,
          method: "Design",
          status: "3.7",
          earning: "$20",
          visitor: "24512",
        },
        {
          id: 4,

          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Jane Smith",

          amount: 20,
          method: "Backend",
          status: "4.0",
          earning: "$880",
          visitor: "6512",
        },
        {
          id: 5,

          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Harold Carol",

          amount: 70,
          method: "Marketing",
          status: "4.4",
          earning: "$430",
          visitor: "512",
        },
      ];
    
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className="tablecell"> Id</TableCell>
           <TableCell className="tablecell">Name</TableCell>
           <TableCell className="tablecell"></TableCell>
           <TableCell className="tablecell"> Category</TableCell>
           <TableCell className="tablecell">Sales</TableCell>
           <TableCell className="tablecell">Rating</TableCell>
           <TableCell className="tablecell">Earning</TableCell>
           <TableCell className="tablecell">Visitor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}>
              <TableCell >
                {row.id}
              </TableCell>
              {/* <TableCell className="tablecell">{row.id}</TableCell> */}
              <TableCell className="tablecell">
                <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product} 
                </div>
              </TableCell>
              <TableCell className="tablecell">{row.customer}</TableCell>
              <TableCell className="tablecell">{row.method}</TableCell>
              <TableCell className="tablecell">{row.amount}</TableCell>
              
              <TableCell className="tablecell">{row.status}
              <StarBorderIcon/></TableCell>
              
              <TableCell className="tablecell">{row.earning}</TableCell>
              <TableCell className="tablecell">{row.visitor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List
