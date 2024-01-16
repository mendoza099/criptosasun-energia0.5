import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "../css/contactform.css";
function ContactForm() {
    const [state, handleSubmit] = useForm("xqkraele");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit} className="formulario-estilo">
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
                className="input-email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message">Mensaje</label>
            <textarea
                id="message"
                name="message"
                className="textarea-mensaje"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} className="boton-enviar">
                Enviar
            </button>
        </form>
    );
}

export default ContactForm;