/** @jsx jsx */
import { jsx, useThemeUI, Grid } from 'theme-ui';
import { useState } from "react";
import { navigate } from "gatsby-link";
import styled from '@emotion/styled'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export const Form = () => {
  const { theme: { colors } } = useThemeUI()
  const defautltValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  const [formValue, setFormValue] = useState(defautltValues)

  const handleChange = e => {
    e.persist()
    setFormValue(formValue => ({
      ...formValue,
      [e.target.name]: e.target.value
    })
    )
  }

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formValue
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };


  return (
    <div sx={{
      bg: 'grey150',
      p: [5, 10, null, null, 16]
    }}>
      <Title>Kontakt oss</Title>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <Grid columns={[1, '1fr 1fr', 1, null, '1fr 1fr']} gap={[null, 8]}>
          <FormControl>
            <Input
              type="text"
              name="name"
              placeholder="Fornavn"
              onChange={handleChange}
              value={formValue.name}
              {...{ colors }} />
          </FormControl>
          <FormControl>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formValue.email}
              {...{ colors }} />
          </FormControl>
        </Grid>
        <FormControl>
          <Input
            type="text"
            name="subject"
            placeholder="Tema"
            onChange={handleChange}
            value={formValue.subject}
            {...{ colors }} />
        </FormControl>
        <FormControl>
          <Input as="textarea"
            name="message"
            placeholder="Beskjed"
            onChange={handleChange}
            value={formValue.message}
            {...{ colors }}
            sx={{ height: '100px', resize: 'none' }} />
        </FormControl>
        <FormControl sx={{ m: 0 }}>
          <button type="submit" sx={{ variant: 'buttons.secondary' }}>Send</button>
        </FormControl>
      </form>
    </div >
  );
}


const Title = styled.h5`
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 28px;
  margin-bottom: 40px;
  &:after {
    content: "";
    width: 30px;
    height: 1px;
    background: #b4b4b4;
    display: block;
    margin: 5px auto;
  }
`

const Input = styled.input`
  font-family: 'Lato';
  font-size: 15px;
  color: ${props => props.colors.mainDark};
  width: 100%;
  height: 40px;
  padding: 6px 10px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${props => props.colors.grey};
  border-radius: 0px;
  padding-left: 0;
  padding-right: 0;
  transition: 0.4s linear;
  &:focus {
    border: none;
    border-bottom: 1px solid ${props => props.colors.mainDark};
    outline: 0;
  }
  &::placeholder {
    color: ${props => props.colors.grey200};
    font-weight: bold;
    font-size: 15px;
  }
`

const FormControl = styled.div`
  margin-bottom: 40px;
`
