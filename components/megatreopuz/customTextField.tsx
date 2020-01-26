import React from "react";
import { TextFieldProps, TextField as MUITextField } from "@material-ui/core";
import { useField } from "formik";
interface Props {
    name: string;
}

const TextField: React.FunctionComponent<Props & TextFieldProps> = props => {
    const [field, meta] = useField({ name: props.name });
    const error = Boolean(meta.touched && meta.error);
    return (
        <MUITextField
            error={error}
            helperText={error ? meta.error : props.helperText || " "}
            {...props}
            {...field}
        />
    );
};

export default TextField;
