import React from 'react';

export const Form = () => {
  return (
    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="name">Fornavn</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="subject">Tema</label>
        <input type="text" name="subject" id="subject" />
      </div>
      <div>
        <label htmlFor="message">Beskjed</label>
        <textarea name="message" id="message" rows="6" />
      </div>
      <div>
        <input type="submit" value="Send" />
      </div>
    </form>
  );
}

