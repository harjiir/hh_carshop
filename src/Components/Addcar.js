import React, { useState } from "react";
import { Button } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

function Addcar({ addCar }) {
    const [open, setOpen] = useState(false);

    // Car state
    const [car, setCar] = useState({
        brand: "",
        model: "",
        color: "",
        fuel: "",
        year: "",
        price: "",
    });

    // Add New Car button and opening a form
    const handleClickOpen = () => {
        console.log('Add new car button handled');
        setOpen(true);
    }

    // If save button is pressed in the car form
    const handleClose = () => {
        console.log('Save car button handled')
        addCar(car);
        setOpen(false);
    }

    // If cancel button is pressed in the car form
    const handleCancel = () => {
        console.log('Handle cancel called')
        setOpen(false);
    }

    // Changing values for the car
    const inputChanged = (event) => {
        setCar({ ...car, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <Button className="addButton" variant="outlined" onClick={handleClickOpen}>Add New Car</Button>
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
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Save</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Addcar;