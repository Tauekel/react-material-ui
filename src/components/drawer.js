import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import TextField from "@material-ui/core/TextField/TextField";
import CircularIntegration from "./buttonSaveLoading";
import SimpleSnackbar from "./snackbars";
import RadioButtonsGroup from "./radioButtons";
import Autocomplete from "./autocomplete";
import SimpleSelect from "./selects";
import TextFields from "./textfield";

const styles = {
    list: {
        width: 370,
    },
    // fullList: {
    //     width: 'auto',
    // },
};

class TemporaryDrawer extends Component {
    state = {
        left: false
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List style={{textAlign: 'center'}}>
                    {<h2>Новая задача</h2>}
                </List>
                <Divider />
                <List>
                    {[<TextFields />,
                      <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="filled-textarea"
                            label="Описание задачи"
                            placeholder="Multiline"
                            multiline
                            className={classes.textField}
                            margin="normal"
                            variant="filled"/>
                      </form>,
                      <form className={classes.container} noValidate>
                         <TextField
                            id="date"
                            label="Дата выполнения"
                            type="date"
                            defaultValue="2019-03-31"
                            className={classes.textField}
                            InputLabelProps={{shrink: true}}/>
                      </form>,
                      <RadioButtonsGroup />,
                        <SimpleSelect />,
                        <Autocomplete />].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List style={{padding: '30px', textAlign: 'right', position: 'fixed'}}>
                    <CircularIntegration />
                    <SimpleSnackbar />
                </List>
            </div>
        );

        return (
            <div style={{textAlign: 'center', paddingTop: 30}}>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.toggleDrawer('left', true)}>Добавить задачу</Button>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}> {/*false*/}
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', true)} // false
                        onKeyDown={this.toggleDrawer('left', true)} // false
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
