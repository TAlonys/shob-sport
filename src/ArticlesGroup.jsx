import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CommentIcon from '@material-ui/icons/Comment'
import SendIcon from '@material-ui/icons/Send'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { TextField } from '@material-ui/core';

const styles = theme => ({
  card: {
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: '1%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class ArticlesGroup extends React.Component {
  state = { expanded: false, commentExpanded: false, comments: [], currentComment: "" };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleExpandComment = () => {
    this.setState(state => ({ commentExpanded: !state.commentExpanded }));
  }

  updateComment = (event) => {
      this.setState({
        currentComment: event.target.value
      })
  }

  handleCommentAdd = () => {
      this.setState({
          comments: [...this.state.comments, this.state.currentComment],
          currentComment: ""
      })
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              TS
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Ter Stegen, baja para la final de Copa"
          subheader="May 24th, 2019"
        />
        <CardMedia
          className={classes.media}
          image="https://talksport.com/wp-content/uploads/sites/5/2017/11/barca.jpg?strip=all&quality=100&w=700&quality=100"
          title="Paella dish"
        />
        <CardContent>
          <Typography component="p">
          El portero sigue con molestias en la rodilla y continuará con el tratamiento durante las próximas semanas
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
            l jugador del primer equipo Marc-André ter Stegen sigue con las molestias en la rodilla derecha, continuará con el tratamiento durante las próximas semanas y es baja para el partido del sábado.

49 partidos disputados este curso
Ter Stegen ha jugado este curso 49 duelos, que se reparten de la siguiente forma: 35 en la Liga, los dos duelos de semifinales de la Copa del Rey contra el Real Madrid, 11 duelos en la Champions y el de la Supercopa de España contra el Sevilla. El portero alemán ha sido clave en la consecución de la Liga y participó, con su actuación en las semifinales, en la clasificación para una nueva final de Copa.
            </Typography>
            <IconButton aria-label="Comment" onClick={this.handleExpandComment}>
                <CommentIcon  />
            </IconButton>
            {this.state.commentExpanded && 
                <>
                    <TextField onChange={this.updateComment}/>
                    <IconButton onClick={this.handleCommentAdd}>
                        <SendIcon/>
                    </IconButton>
                </>}
            {this.state.comments.length > 0 && 
            <div>
            {this.state.comments.map(comment => <Typography key={comment} component="p">{comment}</Typography>)}
            </div>}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

ArticlesGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArticlesGroup);