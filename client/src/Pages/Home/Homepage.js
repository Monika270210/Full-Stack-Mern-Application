import React, { useState, useEffect } from 'react'
import Form from '../../components/Form/form';
import Posts from '../../components/Posts/posts';
import { Grid, Grow, Container, Paper,AppBar,TextField,Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { getData } from '../../actions/postactions';
import Paginate from '../../components/Pagination/Pagination';
import ChipInput from 'material-ui-chip-input';
import useStyles from './styles'

const Homepage = () => {

    const classes = useStyles();

    const [curr, setCurrent] = useState(undefined);
    const [titlesearch,setTitleSearch]=useState('');
    // const [tagsearch,setTagSerach]=useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData());
    }, [dispatch, curr]);

    const handlechange=(e)=>{
          setTitleSearch(e.target.value);
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
                            <TextField name="titlesearch" variant="outlined" label="Search Memories" fullWidth
                              value={titlesearch}
                              onChange={handlechange}
                             />
                            <ChipInput
                                style={{ margin: '10px 0' }}
                                label="Search Tags"
                                variant="outlined"
                                name="tagsearch"
                            />
                            <Button className={classes.searchButton} variant="contained" color="primary">Search</Button>
                        </AppBar>
                        <Form curr={curr} setCurrent={setCurrent} />
                        <Paper className={classes.pagination} elevation={6}>
                            <Paginate />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Homepage
