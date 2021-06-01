import React, { useState} from 'react'
import Form from '../../components/Form/form';
import Posts from '../../components/Posts/posts';
import { Grid, Grow, Container, Paper,AppBar,TextField,Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import {useHistory,useLocation} from 'react-router-dom'
import {  getsearchData } from '../../actions/postactions';
import Paginate from '../../components/Pagination/Pagination';
import useStyles from './styles'


function useQuery(){
    return new URLSearchParams(useLocation().search);
}


const Homepage = () => {

    const classes = useStyles();

    const [curr, setCurrent] = useState(undefined);
    const [titlesearch,setTitleSearch]=useState('');
    const [tagsearch,setTagSearch]=useState('');
    const dispatch = useDispatch();
    const history=useHistory();
    const query=useQuery();
    const page = query.get('page') || 1;
    // console.log(page);


    const handlechange=(e)=>{
        if(e.target.name==="titlesearch")
          setTitleSearch(e.target.value);
          else
          setTagSearch(e.target.value);
    }

    const handleSearch=()=>{
        if(titlesearch.trim() || tagsearch)
        {   
        dispatch(getsearchData({title:titlesearch,tag:tagsearch}));
        history.push(`/posts/search`);
        }
        else
        {
            history.push('/');
        }
    }


    return (

        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts curr={curr} setCurrent={setCurrent} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit">
                            <TextField name="titlesearch" variant="outlined" label="Search Title" fullWidth
                              value={titlesearch}
                              onChange={handlechange}
                             />
                              <TextField style={{margin:'10px 0'}} name="tagsearch" variant="outlined" label="Search Tag" fullWidth
                              value={tagsearch}
                              onChange={handlechange}
                             />
                            <Button className={classes.searchButton} variant="contained" color="primary" onClick={handleSearch}>Search</Button>
                        </AppBar>
                        <Form curr={curr} setCurrent={setCurrent} />
                        <Paper className={classes.pagination} elevation={6}>
                            <Paginate page={page} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Homepage
