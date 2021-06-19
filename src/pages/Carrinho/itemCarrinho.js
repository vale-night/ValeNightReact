import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { AddCircleOutline, ControlPoint, RemoveCircleOutline } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      marginTop: theme.spacing(2),
      width: '100%'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
      paddingBottom: 0,
    },
    cover: {
        width: 120,
        overflow: "visible",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      height: 38,
      width: 38,
    },
  }));

export default ({amount = 1, name, price, category, imageUrl}) => {
    const classes = useStyles();
    const theme = useTheme();

    const [itemCount, setItemCount] = useState(amount)
  
    return (
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={imageUrl}
          title={`Imagem de ${name}`}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h6" variant="h6" nowrap={true}>
              {name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              R$ {price.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Tipo: {category}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton className={classes.icon} aria-label="Remover" onClick={() => setItemCount(itemCount - 1)}>
              <RemoveCircleOutline />
            </IconButton>
            {itemCount}
            <IconButton className={classes.icon} aria-label="Adicionar" onClick={() => setItemCount(itemCount + 1)}>
              <AddCircleOutline />
            </IconButton>
          </div>
        </div>
      </Card>
    );
}