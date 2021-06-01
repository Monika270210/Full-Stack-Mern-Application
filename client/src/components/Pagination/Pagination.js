import React,{useEffect} from 'react'
import { Pagination, PaginationItem } from '@material-ui/lab';
import useStyles from './styles'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {getData} from '../../actions/postactions';
import {useSelector} from 'react-redux';

const Paginate = ({page}) => {
    const classes=useStyles();
    const dispatch=useDispatch();

    const {totalpages}=useSelector((state)=>state.postReducer);

    useEffect(() => {
      dispatch(getData(Number(page)));
  }, [page,dispatch]);

    return (
        <Pagination
        classes={{ ul: classes.ul }}
        count={totalpages}
        page={Number(page)||1}
        variant="outlined"
        color="primary"
        renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
        )}
      />
    )
}

export default Paginate;
