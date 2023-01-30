
import './App.css';
import Customer from './components/customer';
import  render  from '@testing-library/react';
import { Component } from 'react';
import { Table } from '@mui/material';
import {TableHead} from '@mui/material';
import {TableBody} from '@mui/material';
import {TableRow} from '@mui/material';
import {TableCell} from '@mui/material';
import {withStyles} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
const styles = theme =>({
  root: {
    width: '100%', 
    marginTop: theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table: {
    minWidth: 1080,
  }  
})

const customers =[
  {
  id : "1",
  image : "http://placeimg.com/64/64/1",
  name : "홍길동",
  birthday : "000525",
  gender : "남자",
  job : "학생",
  },
  {
  id : "2",
  image : "http://placeimg.com/64/64/2",
  name : "이순신",
  birthday : "010525",
  gender : "남자",
  job : "개발자",
  },
  {
    id : "3",
    image : "http://placeimg.com/64/64/3",
    name : "이재용",
    birthday : "000215",
    gender : "남자",
    job : "백수",
  },
]

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c=>{ return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>)})}
          </TableBody>
        </Table> 
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
