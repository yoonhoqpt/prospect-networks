import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    margin: '30px 0',
    align: 'center',
  },
  headinglr: {
    color: 'rgba(0,0,0, 1)',
    fontSize: 17.5,
    margin: '0px 17px',
    padding: '0px 0px',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },

  headingsm: {
    color: 'rgba(0,0,0, 1)',
    fontSize: 17.5,
    margin: '0px 9px',
    padding: '0px 0px',
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  imagelr: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  imagesm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  bigtitle: {
    fontSize: 50,
    padding: '140px 0px 0px 0px',
    margin: '0px 0px 0px 0px',
    fontWeight: 'bold',
    lineHeight: 1.2,
  },

  smalltitle: {
    fontSize: 20,
    margin: '0px',
    padding: '0px',
  },

  art: {
    maxwidth: '100%',
  },
}));
