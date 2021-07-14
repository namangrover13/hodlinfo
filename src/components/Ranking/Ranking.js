import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../../styles/Ranking.css'
import { ThemeContext } from '../../contexts/ThemeContext';

function Ranking(props) {
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
            backgroundColor: isDarkMode ? "#191d28" : "#fff",
            
        },
        value: {
            color :isDarkMode?"#fff": "#0c0f48",
            fontFamily: "Oswald, sans-serif",
            fontSize: isDarkMode ? "24px" : "18px",
            fontWeight: 500,
            // margin: 0,
            opacity: 1,
            marginTop: "8px"
        },
        row: {
            color :isDarkMode?"#fff": "#0c0f48",
            fontFamily: "Oswald, sans-serif",
            fontSize: isDarkMode ? "24px" : "18px",
            fontWeight: 500,
            // margin: 0,
            opacity: 1,
            marginTop: "8px"
        },
        rowhead: {
            color: isDarkMode? "#fff": "#0c0f48",
            
            fontFamily: "Oswald, sans-serif",
            fontSize: isDarkMode ? "24px" : "18px",
            fontWeight: 500,
            backgroundColor : isDarkMode ? "#191d28" : "#fff"
        },
        name: {
            fontFamily: "Oswald, sans-serif",
            fontSize: isDarkMode ? "24px" : "18px",
            fontWeight: 500,
            // margin: 0,
            opacity: 1,
            color:isDarkMode? "#fff": "black",
            marginTop: "8px"
        },
        rankingrow:{
            backgroundColor:isDarkMode ? "#2b2f3b" : "#fff",
        }
    });
    const classes = useStyles();

    function insertCommas(x) {
        x = x.toString();
        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers !== '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return res
    }

    function round(number) {
        return number.toFixed(2);
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.rowhead} align="center">#</TableCell>
                        <TableCell className={classes.rowhead} align="center">Platform</TableCell>
                        <TableCell className={classes.rowhead} align="center">Last Traded Price</TableCell>
                        <TableCell className={classes.rowhead} align="center">Buy / Sell Price</TableCell>
                        <TableCell className={classes.rowhead} align="center">Difference</TableCell>
                        <TableCell className={classes.rowhead} align="center">Savings</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.ranks.rows.map((row) => (
                        <TableRow className={classes.rankingrow} key={row.id}>
                            <TableCell className={classes.row} align="center">{row.id}</TableCell>
                            <TableCell className={classes.name} align="center"><img className="ranking-img" src={row.src} alt={row.platform}/>   {row.platform}</TableCell>
                            <TableCell className={classes.value} align="center">{`₹ ${insertCommas(row.ltp)}`}</TableCell>
                            <TableCell className={classes.value} align="center">{`₹ ${insertCommas(row.bp)} / ${insertCommas(row.sp)}`}</TableCell>
                            <TableCell className={classes.row} align="center" style={{ color: row.sp - row.bp < 0 ? "red" : "#3dc6c1" }}>{`${round(((row.sp - row.bp) / row.sp) * 100)} %`}</TableCell>
                            <TableCell className={classes.row} align="center" style={{ color: row.sp - row.bp < 0 ? "red" : "#3dc6c1" }}>{row.sp - row.bp < 0 ? <i class="fas fa-caret-down"></i> : <i class="fas fa-caret-up"></i>} {`₹ ${insertCommas(row.sp - row.bp)}`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default Ranking;