import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit * 2,
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
    },
});

function SimpleTooltips(props) {
    const { classes } = props;
    return (
        <div>
            <Tooltip title="Удалить">
                <IconButton aria-label="Delete">
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Редактировать" aria-label="Add">
                <Fab color="secondary" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Tooltip>
        </div>
    );
}

SimpleTooltips.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTooltips);
