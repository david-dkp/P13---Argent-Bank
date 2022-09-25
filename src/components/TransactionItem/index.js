import React, { useState, useMemo, useCallback } from "react"
import {
    Box,
    Collapse,
    IconButton,
    MenuItem,
    Select,
    Stack,
    TableCell,
    TableRow,
} from "@mui/material"
import { makeStyles } from "@mui/styles"

import {
    ArrowDownward,
    ArrowDropDown,
    KeyboardArrowUp,
    Edit,
    KeyboardArrowDown,
    Check,
} from "@mui/icons-material"

const useStyles = makeStyles((theme) => ({
    iconOpen: {
        transform: "rotate(0deg)",
    },
}))

const TransactionItem = ({
    date,
    description,
    amount,
    balance,
    type,
    category,
    categories,
    notes,
    onCategoryEdit,
    onNotesEdit,
    ...props
}) => {
    const [open, setOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [edittingNotes, setEdittingNotes] = useState(notes)

    const classes = useStyles()

    const formattedDate = useMemo(() => {
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        })
    }, [date])

    const formattedAmount = useMemo(() => {
        return `$${amount.toFixed(2)}`
    }, [amount])

    const formattedBalance = useMemo(() => {
        return `$${balance.toFixed(2)}`
    }, [balance])

    const onEditNotesClick = useCallback(() => {
        if (isEditing) {
            onNotesEdit(edittingNotes)
        }
        setIsEditing(!isEditing)
    }, [isEditing, edittingNotes, onNotesEdit])

    return (
        <React.Fragment {...props}>
            <TableRow
                sx={{
                    "& > *": {
                        borderBottom: "none",
                        fontSize: "1em",
                        fontWeight: "bold",
                    },
                    backgroundColor: "white",
                }}
            >
                <TableCell>
                    <IconButton onClick={() => setOpen((open) => !open)}>
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>
                <TableCell align="center">{formattedDate}</TableCell>
                <TableCell align="center">{description}</TableCell>
                <TableCell align="center">{formattedAmount}</TableCell>
                <TableCell align="center">{formattedBalance}</TableCell>
            </TableRow>
            <TableRow
                sx={{
                    "& > *": {
                        fontSize: "0.9em",
                    },
                    backgroundColor: "white",
                }}
            >
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} />
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={4}
                >
                    <Collapse in={open}>
                        <Stack direction="column" sx={{ margin: 1 }}>
                            <span>Transaction Type: {type}</span>
                            <div>
                                Category:
                                <Select
                                    sx={{
                                        "& > *": {
                                            border: "none",
                                        },
                                    }}
                                    classes={{
                                        iconOpen: classes.iconOpen,
                                    }}
                                    value={category}
                                    onChange={(e) =>
                                        onCategoryEdit(e.target.value)
                                    }
                                    inputProps={{
                                        sx: {
                                            "& > *": {
                                                border: "none",
                                            },
                                            fontSize: "0.9em",
                                        },
                                    }}
                                    IconComponent={Edit}
                                >
                                    {categories.map((category) => (
                                        <MenuItem
                                            key={category}
                                            value={category}
                                        >
                                            {category}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                            <span>
                                Notes:{" "}
                                {isEditing ? (
                                    <input
                                        style={{
                                            fontSize: "1em",
                                            width: "100%",
                                        }}
                                        type="text"
                                        value={edittingNotes}
                                        onChange={(e) =>
                                            setEdittingNotes(e.target.value)
                                        }
                                    />
                                ) : (
                                    notes
                                )}
                                <IconButton onClick={onEditNotesClick}>
                                    {isEditing ? <Check /> : <Edit />}
                                </IconButton>
                            </span>
                        </Stack>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

export default TransactionItem
