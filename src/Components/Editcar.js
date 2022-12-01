import React, { useState } from "react";
import { Button } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

function Editcar({ updateCar, params }) {
    const [open, setOpen] = useState(false);

    // Car state
    const [car, setCar] = useState({
        brand: '',
        model: '',
        color: '',
        fuel: '',
        year: '',
        price: '',
    });

    // Edit Car button and opening a form with previous infos
    const handleClickOpen = () => {
        console.log('Edit car button handled');
        setOpen(true);
        setCar({
            brand: params.data.brand,
            model: params.data.model,
            color: params.data.color,
            fuel: params.data.fuel,
            price: params.data.price,
            year: params.data.year
        })
    }

    // Closing form
    const handleClose = () => {
        console.log('Close form handled')
        setOpen(false);
    }

    // if save button is pressed in the form, update car
    const handleSave = () => {
        updateCar(car, params.value);
        setOpen(false);
    }

    // If cancel button is pressed in the car form
    const handleCancel = () => {
        console.log('Handle cancel')
        setOpen(false);
    }

    // Changing values for the car
    const inputChanged = (event) => {
        setCar({ ...car, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <Button className="addButton" variant="outlined" onClick={handleClickOpen}>EDIT</Button>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>New Car</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        name="brand"
                        value={car.brand}
                        margin="dense"
                        label="Brand"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="model"
                        value={car.model}
                        margin="dense"
                        label="Model"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="color"
                        value={car.color}
                        margin="dense"
                        label="Color"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="fuel"
                        value={car.fuel}
                        margin="dense"
                        label="Fuel"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="year"
                        value={car.year}
                        margin="dense"
                        label="Year"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="price"
                        value={car.price}
                        margin="dense"
                        label="Price"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSave}>Save</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Editcar;