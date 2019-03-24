import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './component/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root : {
    width : '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table : {
    minWidth : 1080
  }
})

const customers = [{
  'id' : "1",
  'image' : "https://placeimg.com/64/64/1",
  'name' : '홍길동',
  'birthday' : '941001',
  'gender' : '남자1',
  'job' : '학생1'
},
{
  'id' : "2",
  'image' : "https://placeimg.com/64/64/2",
  'name' : '홍길동2',
  'birthday' : '941002',
  'gender' : '남자2',
  'job' : '학생2'
},
{
  'id' : "3",
  'image' : "https://placeimg.com/64/64/3",
  'name' : '홍길동3',
  'birthday' : '941003',
  'gender' : '남자3',
  'job' : '학생3'
}]

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>사진</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { customers.map(c =>{ return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>; }) }
          </TableBody>
        </Table>
        
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
