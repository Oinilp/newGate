import React, { useEffect } from "react";
import { Field } from "formik";
import { Input, Text, Box, Textarea, Checkbox, Flex } from "@chakra-ui/react";

export const FormikFields = (props) => {
  const {
    borderColor = 'white',
    name,
    label,
    placeholder,
    type = "text",
    checboxLabel,
    onChange = ()=>{},
    disable
} = props
 
 
  
  return (
    <Field name={name}>
      {({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta,
      }) => (
        <Box>
          <Text>{label}</Text>
          {type.toLowerCase() == "textarea" ? (
            <Textarea
              border={`2px ${borderColor} solid`}
              pt={2}
              rows="3"
              {...field}
              placeholder={placeholder}
            />
          ) : type.toLowerCase() == "checkbox" ? (
            <Flex gap={1}>
              <Field
                type="checkbox"
                disabled={disable}
                name={field.name}
              ></Field>
              <Text>{checboxLabel}</Text>
            </Flex>
          ) : type.toLowerCase() == "email" ? (
            <Flex gap={1}>
              <Input
               border={`2px ${borderColor} solid`}
                type="email"
                name={field.name}
                placeholder={placeholder}
              ></Input>
              <Text>{checboxLabel}</Text>
            </Flex>
          ) : (
            <Input
              border={`2px ${borderColor} solid`}
              pt={2}
              type={type}
              placeholder={placeholder}
              {...field}
            />
          )}

          {meta.touched && meta.error && (
            <Text color={"tomato"} fontSize={"sm"}>
              {meta.error}
            </Text>
          )}
        </Box>
      )}
    </Field>
  );
};
