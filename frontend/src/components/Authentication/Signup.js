import { Stack, Input, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Field } from "../ui/field"
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const postDetails = (pics) =>{

  }
  const submitHandler = ()=>{

  }
  return (
    <Stack gap="8" width="100%" css={{ "--field-label-width": "96px" }}>
      <Field orientation="horizontal" label="Name" id="name">
        <Input placeholder="John Doe" flex="1" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Field>
      <Field orientation="horizontal" label="Email" id="email">
        <Input placeholder="me@example.com" flex="1" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Field>
      <Field orientation="horizontal" label="Upload Picture" id="pic">
        <Input type="file" p="1.5" flex="1" accept="image/*" value={email} onChange={(e)=>postDetails(e.target.files[0])}/>
      </Field>
      <Button
      colorScheme={"purple"}
      color={"purple"}
      backgroundColor={"#341539"}
      width="100%"
      style={{marginTop: 15}}
      onClick={submitHandler}
      >
        Sign up
      </Button>
    </Stack>
  )
}

export default Signup